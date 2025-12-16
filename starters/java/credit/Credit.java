// TODO: 实现 Credit.java
import java.util.Scanner;

public class Credit {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 获取用户输入的信用卡号
        System.out.print("Number: ");
        long cardNumber = scanner.nextLong();

        // 使用 Luhn 算法验证卡号

        // 判断卡类型：AMEX, MASTERCARD, VISA 或 INVALID

        scanner.close();
    }

    // Luhn 算法验证
    private static boolean isValidLuhn(long number) {
        // TODO: 实现 Luhn 算法
        return false;
    }

    // 获取卡号长度
    private static int getLength(long number) {
        // TODO: 实现
        return 0;
    }

    // 获取卡号前两位
    private static int getFirstTwoDigits(long number) {
        // TODO: 实现
        return 0;
    }
}
