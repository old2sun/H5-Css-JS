package main

import "fmt"

func main() {
    s := []int{2, 3, 5, 7, 11, 13}
    fmt.Println("s ==", s)
    fmt.Println("s[1:4] ==", s[1:4])

    fmt.Println("s[:3] ==", s[:3])

    fmt.Println("s[4:] ==", s[4:])

    // s == [2 3 5 7 11 13]
    // s[1:4] == [3 5 7]
    // s[:3] == [2 3 5]
    // s[4:] == [11 13]

}

/*
    对 slice 切片

    slice可以重新切片, 创建一个新的 slice值指向相同的数组。

    表达式
    s[lo:hi]
    表示 从 lo 到 hi-1 的slice元素, 含前端, 不含后端。
    因此, s[lo:lo] 是空的, s[lo:lo+1] 有一个元素

*/
