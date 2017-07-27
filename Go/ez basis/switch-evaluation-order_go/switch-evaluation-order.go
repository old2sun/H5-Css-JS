package main

import (
    "fmt"
    "time"
)

func main() {
    fmt.Println("when s saturday?")

    today := time.Now().Weekday()

    switch time.Saturday {
    case today + 0:
        fmt.Println("Today.")
    case today + 1:
        fmt.Println("tomorrow.")
    case today + 2:
        fmt.Println("in wo days.")
    default:
        fmt.Println("in far away.")
    }

    words := "2009-11-10 23:00:00 UTC"

    switch words {
        case "2009-11-10 23:00:00 UTC":
            fmt.Println("Go 时间")
        default:
            fmt.Println("end")
    }
}

/*
    switch 执行顺序

    switch 条件从上到下执行, 当匹配成功的时候停止

    如：
    switch i {
        case 0:
        case f():
    }
    当 i 等于 0 时不会调用 f


*/
