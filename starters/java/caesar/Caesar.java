// TODO: 实现 Caesar.java
import java.util.Scanner;

public class Caesar {
    public static void main(String[] args) {
        // 检查命令行参数数量
        if (args.length != 1) {
            System.out.println("Usage: java Caesar key");
            System.exit(1);
        }

        // 验证密钥是否为数字

        // 将密钥转换为整数

        // 提示用户输入明文
        Scanner scanner = new Scanner(System.in);
        System.out.print("plaintext:  ");

        // 获取用户输入

        // 加密并输出密文

        scanner.close();
    }
}
