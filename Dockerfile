# bootcs-cli CS50 Course Image
# 包含 CS50 课程的检查脚本和 libcs50 库
# Updated: 2025-12-14

FROM ghcr.io/bootcs-cn/bootcs-cli:latest

LABEL org.opencontainers.image.source="https://github.com/bootcs-cn/course-cs50"
LABEL org.opencontainers.image.description="BootCS CLI with CS50 course checks and libcs50"

# 安装构建依赖
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    make \
    && rm -rf /var/lib/apt/lists/*

# 安装 CS50 库 (从源码编译)
RUN cd /tmp \
    && curl -LO https://github.com/cs50/libcs50/archive/refs/tags/v11.0.3.tar.gz \
    && tar -xzf v11.0.3.tar.gz \
    && cd libcs50-11.0.3 \
    && make install \
    && ldconfig \
    && rm -rf /tmp/*

# 复制检查脚本
COPY checks/ /checks/

# 设置检查脚本路径环境变量（这样就不需要 --local 参数）
ENV BOOTCS_CHECKS_PATH=/checks

# 工作目录
WORKDIR /workspace

# 入口点
ENTRYPOINT ["python", "-m", "bootcs"]
CMD ["--help"]

