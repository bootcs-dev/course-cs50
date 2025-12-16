# TODO: 实现 credit.py


def get_card_number():
    """获取用户输入的信用卡号"""
    while True:
        try:
            return int(input("Number: "))
        except ValueError:
            pass


def main():
    card_number = get_card_number()

    # 使用 Luhn 算法验证卡号

    # 判断卡类型：AMEX, MASTERCARD, VISA 或 INVALID
    print("INVALID")


if __name__ == "__main__":
    main()
