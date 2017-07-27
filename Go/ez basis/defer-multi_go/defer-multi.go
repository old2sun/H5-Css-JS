package main

import "fmt"

func main() {
    fmt.Println("counting")

    for i := 0; i < 10; i++ {
        defer fmt.Println(i)
    }

    fmt.Println("done")

    // counting
    // done
    // 9
    // 8
    // 7
    // 6
    // 5
    // 4
    // 3
    // 2
    // 1
    // 0
}

/*
    defer 栈

    延迟的函数调用被压入一个栈中。当函数返回时, 会按照后进先出的顺序调用被延迟的函数调用
*/
