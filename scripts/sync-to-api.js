/**
 * 课程同步脚本
 *
 * 解析 course.yml 和 stages/*.yml，调用 bootcs-api 同步接口
 */
const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

// 读取 Markdown 文件内容（如果 description 是 .md 引用）
function readDescription(dir, description) {
  if (!description) return null;
  if (description.endsWith(".md")) {
    const mdPath = path.join(dir, description);
    if (fs.existsSync(mdPath)) {
      return fs.readFileSync(mdPath, "utf8");
    }
    console.warn(`Warning: ${mdPath} not found`);
    return null;
  }
  return description; // 内联文本
}

async function main() {
  const apiUrl = process.env.BOOTCS_API_URL;
  const syncSecret = process.env.SYNC_SECRET;

  if (!apiUrl || !syncSecret) {
    console.error("Missing BOOTCS_API_URL or SYNC_SECRET environment variables");
    process.exit(1);
  }

  // 1. 解析 course.yml
  const courseYml = yaml.load(fs.readFileSync("course.yml", "utf8"));
  const courseDescription = readDescription(".", courseYml.description);

  console.log(`Syncing course: ${courseYml.slug} (${courseYml.name})`);

  // 2. 解析所有 stage yml
  const stagesDir = "stages";
  const stages = [];

  for (const file of fs.readdirSync(stagesDir)) {
    if (file.endsWith(".yml")) {
      const stageYml = yaml.load(
        fs.readFileSync(path.join(stagesDir, file), "utf8")
      );
      // 读取 Markdown 描述
      const stageDescription = readDescription(stagesDir, stageYml.description);
      // 从 stage_order 获取 position
      const position = courseYml.stage_order?.indexOf(stageYml.slug) ?? 999;
      stages.push({ ...stageYml, description: stageDescription, position });
      console.log(`  - Stage: ${stageYml.slug} (position: ${position})`);
    }
  }

  // 3. 构建请求体
  // 解析 access 配置
  const accessType = courseYml.access?.type?.toUpperCase() || "FREE";
  const freeStages = courseYml.access?.free_stages || [];

  const payload = {
    course: {
      slug: courseYml.slug,
      name: courseYml.name,
      summary: courseYml.summary,
      description: courseDescription,
      icon: courseYml.icon,
      difficulty: courseYml.difficulty,
      status: courseYml.status,
      evaluatorImage: courseYml.evaluation?.image,
      defaultTimeout: courseYml.evaluation?.timeout,
      tags: courseYml.tags,
      // v2: 多语言和访问控制
      languages: courseYml.languages || [],
      accessType: accessType,
    },
    stages: stages.map((s) => {
      // v2: 将 languages 配置转换为 languageConfigs JSON
      // 新格式: languages: { c: { starter_path, check_path, files } }
      // 旧格式向后兼容: language, starter.path, evaluation.check_path, files
      let languageConfigs = null;
      let primaryLanguage = null;

      if (s.languages && typeof s.languages === "object") {
        // 新格式: 多语言配置
        languageConfigs = {};
        for (const [lang, config] of Object.entries(s.languages)) {
          if (!primaryLanguage) primaryLanguage = lang;
          languageConfigs[lang] = {
            starterPath: config.starter_path,
            checkPath: config.check_path,
            files: config.files || {},
          };
        }
      } else if (s.language) {
        // 旧格式向后兼容
        primaryLanguage = s.language;
        languageConfigs = {
          [s.language]: {
            starterPath: s.starter?.path,
            checkPath: s.evaluation?.check_path,
            files: s.files || {},
          },
        };
      }

      // 判断 stage 是否免费
      const isFree = accessType === "FREE" || freeStages.includes(s.slug);

      return {
        slug: s.slug,
        name: s.name,
        summary: s.summary,
        description: s.description,
        position: s.position,
        category: s.category,
        timeout: s.evaluation?.timeout,
        // v2: 新字段
        languageConfigs: languageConfigs,
        isFree: isFree,
        // 向后兼容: 保留主语言作为 language 字段
        language: primaryLanguage,
        // 从 languageConfigs 中提取主语言的配置（向后兼容）
        checkPath: languageConfigs?.[primaryLanguage]?.checkPath,
        starterPath: languageConfigs?.[primaryLanguage]?.starterPath,
        filesRequired: languageConfigs?.[primaryLanguage]?.files?.required,
        filesAllowed: languageConfigs?.[primaryLanguage]?.files?.allowed,
        filesBlocked: languageConfigs?.[primaryLanguage]?.files?.blocked,
      };
    }),
  };

  // 4. 调用 API
  console.log(`\nCalling ${apiUrl}/api/admin/courses/sync...`);

  const response = await fetch(`${apiUrl}/api/admin/courses/sync`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${syncSecret}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`Sync failed (${response.status}):`, errorText);
    process.exit(1);
  }

  const responseData = await response.json();
  // API 返回统一格式 { success: true, data: {...} }
  const result = responseData.data || responseData;
  
  console.log("\n✅ Sync successful!");
  console.log(`  Course: ${result.course?.action || "unknown"}`);
  console.log(`  Stages: created=${result.stages?.created || 0}, updated=${result.stages?.updated || 0}`);
}

main().catch((err) => {
  console.error("Sync error:", err);
  process.exit(1);
});
