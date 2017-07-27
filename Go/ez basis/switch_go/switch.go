package main

import (
    "fmt"
    "runtime"
)

func main() {
    fmt.Print("Go runs on")

    switch os := runtime.GOOS; os {
    case "darwin":
            fmt.Println("OS X.")
        case "linux":
            fmt.Println("linux")
        default:
            fmt.Printf("%s.", os)
            // winodws
    }
}

/*
    switch

    除非以 fallthrough 语句结束,,  否则分支会自动禁止
*/
