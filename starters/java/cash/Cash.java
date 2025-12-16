// TODO: 实现 Cash.java
import java.util.Scanner;

public class Cash {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 获取用户输入的找零金额
        float dollars;
        do {
            System.out.print("Change owed: ");
            dollars = scanner.nextFloat();
        } while (dollars < 0);

        // 转换为分
        int cents = Math.round(dollars * 100);

        // 使用贪心算法计算最少硬币数
        // 硬币面值：25, 10, 5, 1 分
        int coins = 0;

        // TODO: 实现贪心算法

        // 输出硬币数量
        System.out.println(coins);

        scanner.close();
    }
}
