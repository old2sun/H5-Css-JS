package main

import "fmt"

func main() {
    var a []int
    printSlice("a", a)

    a = append(a, 0)
    printSlice("a", a)

    a = append(a, 1)
    printSlice("a", a)

    a = append(a, 2, 3, 4)
    printSlice("a", a)

}

func printSlice(s string, x []int) {
    fmt.Printf("%s len=%d cap=%d %v\n", s, len(x), cap(x), x)
}
    // a len=0 cap=0 []
    // a len=1 cap=1 [0]
    // a len=2 cap=2 [0 1]
    // a len=5 cap=6 [0 1 2 3 4]


/*
    向 slice 添加元素

    方式：
    func append(s []T, vs ...T) []T

    append 的第一次参数 s 是元素类型为 T 的 slice,
    其余类型为 T的值将会附加到该slice的末尾

    append 的结果是一个包含原 slice所有元素加上新添加元素的 slice

    如果 s 的底层数组太小, 而不能容纳所有值时, 会分配一个更大的数组,
    返回的slice 会指向这个新分配的数组
*/
