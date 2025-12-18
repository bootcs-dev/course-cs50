# Caesar

## 背景

凯撒密码是最简单的加密技术之一。它通过将字母表中的每个字母替换为固定位置之后的字母来实现加密。例如，密钥为 1 时，A 变成 B，B 变成 C，依此类推。

## 任务

实现一个程序，使用凯撒密码加密消息。

## 用法

```
./caesar key
```

其中 `key` 是一个非负整数。

## 示例

```
$ ./caesar 1
plaintext:  HELLO
ciphertext: IFMMP
```

```
$ ./caesar 13
plaintext:  hello, world
ciphertext: uryyb, jbeyq
```

```
$ ./caesar 3
plaintext:  Be sure to drink your Ovaltine!
ciphertext: Eh vxuh wr gulqn brxu Rydowlqh!
```

## 规范

1. 程序接受一个命令行参数：一个非负整数作为密钥
2. 如果参数无效（不是数字、缺失或过多），程序应输出错误信息并返回 1
3. 程序应提示用户输入明文 `plaintext: `
4. 程序应输出密文 `ciphertext: ` 后跟加密后的文本
5. 只加密字母（a-z, A-Z），保持大小写不变
6. 非字母字符保持原样

## 提示

<details>
<summary>点击查看提示</summary>

### 算法

对于每个字母：

1. 确定它是大写还是小写
2. 计算它在字母表中的位置（0-25）
3. 加上密钥
4. 对 26 取模以处理回绕
5. 转换回字母

### C 语言参考

```c
#include <cs50.h>
#include <stdio.h>
#include <ctype.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char *argv[])
{
    // 检查参数数量
    if (argc != 2)
    {
        printf("Usage: ./caesar key\n");
        return 1;
    }

    // 验证密钥是数字
    for (int i = 0; argv[1][i] != '\0'; i++)
    {
        if (!isdigit(argv[1][i]))
        {
            printf("Usage: ./caesar key\n");
            return 1;
        }
    }

    int key = atoi(argv[1]);

    // 获取明文
    string plaintext = get_string("plaintext:  ");

    printf("ciphertext: ");

    // 加密每个字符
    for (int i = 0; plaintext[i] != '\0'; i++)
    {
        char c = plaintext[i];
        if (isupper(c))
        {
            printf("%c", (c - 'A' + key) % 26 + 'A');
        }
        else if (islower(c))
        {
            printf("%c", (c - 'a' + key) % 26 + 'a');
        }
        else
        {
            printf("%c", c);
        }
    }
    printf("\n");

    return 0;
}
```

</details>

## 参考资料

- [凯撒密码 - 维基百科](https://zh.wikipedia.org/wiki/凱撒密碼)
