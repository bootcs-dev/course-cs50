// TODO: 实现 Scrabble.java
import java.util.Scanner;

public class Scrabble {
    // Scrabble 字母分值
    private static final int[] POINTS = {
        1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3,
        1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10
    };

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 获取两位玩家的单词
        System.out.print("Player 1: ");
        String word1 = scanner.nextLine();

        System.out.print("Player 2: ");
        String word2 = scanner.nextLine();

        // 计算每个单词的分数
        int score1 = computeScore(word1);
        int score2 = computeScore(word2);

        // 输出获胜者
        if (score1 > score2) {
            System.out.println("Player 1 wins!");
        } else if (score2 > score1) {
            System.out.println("Player 2 wins!");
        } else {
            System.out.println("Tie!");
        }

        scanner.close();
    }

    // 计算单词的 Scrabble 分数
    private static int computeScore(String word) {
        // TODO: 实现分数计算
        return 0;
    }
}
