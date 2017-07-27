package main

import(
    "fmt"
    "math"
)

func Sqrt(x float64) float64 {
    // z := float64(1)
    z := 1.0

    for i := 0; i < 10; i++ {
        z = z - ( z*z - x )  / ( 2 * z )
    }
    return z
}

func main()  {
    fmt.Println(Sqrt(2))
    fmt.Println(math.Sqrt(2))
}

/*
    牛顿法实现开方函数

    求 Sqrt(x)的近似值：
    z = z - (z的二次方 - x) / (2 * x)

    迭代后结果与  math.Sqrt 接近
*/
