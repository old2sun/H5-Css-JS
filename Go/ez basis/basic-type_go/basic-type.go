package main

import (
    "fmt"
    "math/cmplx"
)

var (
    ToBe bool = false
    MaxInt uint64 = 1<<64 - 1
    z complex128 = cmplx.Sqrt(-5 + 12i)
)

func main() {
    const f = "%T(%v)\n"
    fmt.Printf(f, ToBe, ToBe)
    fmt.Printf(f, MaxInt, MaxInt)
    fmt.Printf(f, z, z)

    // bool(false)
    // uint64(18446744073709551615)
    // complex128((2+3i))
}

/*
    Go 的基本类型

    bool

    string

    int int8 int16 int32 int64
    unit uint8 uint16 uint32 uint64 uintptr

    byte, unit8 的别名

    rune, int32 的别名, 代表一个 Unicode码

    float32 float64

    complex64 complex128

    这个例子演示了具有不同类型的变量。同时与导入的语句一样, 变量的定义打包在一个语法块中

    int, uint 和 uintpter类型在32位系统一般32位, 而当有特别的理由才使用定长整数类型或者无符号整数类型
*/
