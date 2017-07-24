package main

import "fmt"

func add(x int, y int) int {
    return x + y
}

func main() {
    fmt.Println(add(42, 13))
}

/*
    函数可以没有参数或接受多个参数

    上面程序, add接受两个 int 类型的参数

    注意类型在变量名之后

    当两个或多个连续的函数命名参数是同一类型, 则除了最后一个类型之外, 其他都可以省略

    如上面例子:
    x int, y int 被缩写为 x, y int
*/
