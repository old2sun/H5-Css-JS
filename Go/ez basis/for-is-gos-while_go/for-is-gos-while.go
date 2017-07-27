package main

import "fmt"

func main() {
    sum := 1
    for sum < 1000 {
        sum += sum
    }
    fmt.Println(sum)
}

/*
    for 是 GO 的 "while"

    基于此可以省略分号 :  C 的 while 在 Go 中叫for
*/
