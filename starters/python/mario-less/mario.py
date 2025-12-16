# TODO: 实现 mario.py


def get_height():
    """获取用户输入的高度（1-8）"""
    while True:
        try:
            height = int(input("Height: "))
            if 1 <= height <= 8:
                return height
        except ValueError:
            pass


def main():
    height = get_height()

    # 打印半个金字塔
    pass


if __name__ == "__main__":
    main()
