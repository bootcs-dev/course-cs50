# TODO: 实现 scrabble.py

# Scrabble 字母分值 (A=1, B=3, C=3, ...)
POINTS = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10]


def compute_score(word):
    """计算单词的 Scrabble 分数"""
    # TODO: 实现分数计算
    return 0


def main():
    # 获取两位玩家的单词
    word1 = input("Player 1: ")
    word2 = input("Player 2: ")

    # 计算每个单词的分数
    score1 = compute_score(word1)
    score2 = compute_score(word2)

    # 输出获胜者
    if score1 > score2:
        print("Player 1 wins!")
    elif score2 > score1:
        print("Player 2 wins!")
    else:
        print("Tie!")


if __name__ == "__main__":
    main()
