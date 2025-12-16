# TODO: 实现 cash.py


def get_cents():
    """获取用户输入的找零金额（转换为分）"""
    while True:
        try:
            dollars = float(input("Change owed: "))
            if dollars >= 0:
                return round(dollars * 100)
        except ValueError:
            pass


def main():
    cents = get_cents()

    # 使用贪心算法计算最少硬币数
    # 硬币面值：25, 10, 5, 1 分
    coins = 0

    # TODO: 实现贪心算法

    # 输出硬币数量
    print(coins)


if __name__ == "__main__":
    main()
