package main

import "fmt"

func main() {
	v := 42 // change me !
	fmt.Printf("v is of type %T\n", v)
	// v is of type int
}

/*
   类型推导

   在定义一个变量却不显示指定其类型时（使用 := 语法 或者 var = 表达式语法）,
   变量的类型由（等号）右侧的值推导得出。

   当右值定义了类型时, 新变量的类型与其相同：
   var i int
   j := i    这里 j 也是一个 int

   但是当右边包含了未指名类型的数字常量时, 新的变量可能是 int、float64 或 complex128。
   这取决于常量的精度：
   i := 42   int
   f := 3.142    float64
   g := 0.867 + 0.5i   complex128

   尝试改变变量 v 中的值, 看看有什么变化
*/
