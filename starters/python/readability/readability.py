# TODO: 实现 readability.py


def count_letters(text):
    """统计字母数量"""
    # TODO: 实现
    return 0


def count_words(text):
    """统计单词数量"""
    # TODO: 实现
    return 0


def count_sentences(text):
    """统计句子数量"""
    # TODO: 实现
    return 0


def main():
    # 获取用户输入的文本
    text = input("Text: ")

    # 统计字母、单词、句子数量
    letters = count_letters(text)
    words = count_words(text)
    sentences = count_sentences(text)

    # 使用 Coleman-Liau 公式计算可读性等级
    # index = 0.0588 * L - 0.296 * S - 15.8
    # L = 每 100 个单词的平均字母数
    # S = 每 100 个单词的平均句子数

    # TODO: 计算并输出等级
    # 输出：Grade X 或 Before Grade 1 或 Grade 16+
    pass


if __name__ == "__main__":
    main()
