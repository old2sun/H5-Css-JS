package main

import (
    "fmt"
    "math/rand"
)

func main() {
    fmt.Println("my favorite number is ", rand.Intn(10))
    // rend.Intn 每次返回同一个数字
}

/*
    包

    每个 Go 程序都由包组成, 程序运行的入口是包 main

    上面程序使用并导入包 "fmt"  和 "math/rand"

    包名应该与导入路径的最后一个目录一致。例如, "math/rand" 包由 package rand 开始

*/
