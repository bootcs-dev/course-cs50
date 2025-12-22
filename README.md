# CS50: Introduction to Computer Science

## 简介

CS50 是哈佛大学的计算机科学入门课程，由 David J. Malan 教授主讲。这门课程涵盖了计算机科学的核心概念，适合零基础学员。

> 本课程已在 BootCS 平台上线，支持在线编程和自动评测。

## 学习内容

- **Week 1**: C 语言基础
- **Week 2**: 数组与字符串
- **Week 3**: 算法
- **Week 4**: 内存管理
- **Week 5**: 数据结构

## 先修要求

无需编程经验。

## 参考资料

- [CS50 官方网站](https://cs50.harvard.edu/)
- [CS50 Manual](https://manual.cs50.io/)

## 本地自测

### 方式一：安装 bootcs 命令（推荐）

**macOS / Linux：**

```bash
curl -fsSL https://bootcs.dev/install.sh | bash
```

安装后直接使用：

```bash
bootcs check cs50/credit
```

### 方式二：直接使用 Docker

```bash
docker run --rm -v $(pwd):/workspace ghcr.io/bootcs-dev/bootcs-cli:cs50 check cs50/<stage>
```

### 方式三：设置别名

将以下内容添加到 `~/.zshrc` 或 `~/.bashrc`：

```bash
alias bootcs='docker run --rm -v $(pwd):/workspace ghcr.io/bootcs-dev/bootcs-cli:cs50'
```

然后使用：

```bash
bootcs check cs50/credit
```
