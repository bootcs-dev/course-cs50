// TODO: 实现 Mario.java
import java.util.Scanner;

public class Mario {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 获取用户输入的高度（1-8）
        int height;
        do {
            System.out.print("Height: ");
            height = scanner.nextInt();
        } while (height < 1 || height > 8);

        // 打印半个金字塔

        scanner.close();
    }
}
