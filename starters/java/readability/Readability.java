// TODO: 实现 Readability.java
import java.util.Scanner;

public class Readability {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 获取用户输入的文本
        System.out.print("Text: ");
        String text = scanner.nextLine();

        // 统计字母、单词、句子数量
        int letters = countLetters(text);
        int words = countWords(text);
        int sentences = countSentences(text);

        // 使用 Coleman-Liau 公式计算可读性等级
        // index = 0.0588 * L - 0.296 * S - 15.8
        // L = 每 100 个单词的平均字母数
        // S = 每 100 个单词的平均句子数

        // TODO: 计算并输出等级
        // 输出：Grade X 或 Before Grade 1 或 Grade 16+

        scanner.close();
    }

    private static int countLetters(String text) {
        // TODO: 统计字母数量
        return 0;
    }

    private static int countWords(String text) {
        // TODO: 统计单词数量
        return 0;
    }

    private static int countSentences(String text) {
        // TODO: 统计句子数量
        return 0;
    }
}
