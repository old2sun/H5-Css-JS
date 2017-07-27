package main

import "fmt"

func main() {
    i, j := 42, 2701

    p := &i         // i 的内存地址指向 p
    fmt.Println(*p)
    *p = 21         // 通过指针 p 设置 i 的值
    fmt.Println(i)

    p = &j          // j 的内存地址指向 p
    *p = *p / 37    // 通过指针 p 读取 j 的值, 然后重新设置 j 值
    fmt.Println(j)
}

/*
    指针

    GO 具有指针。指针保存 变量的内存地址

    类型 *T 是指向类型 T 的指针。 其零值是 nil （空对象）。
    var p *int

    & 符号会生成一个指向其作用对象的指针
    i := 42
    p = &i

    * 符号表示指针指向底层的值
    fmt.Println(*p)  通过指针 p 读取 i
    *p = 21   通过指针 p 设置 i

    这就是 “间接引用” 或 “非直接引用”

    与 C 不同, Go 没有指针运算
*/
