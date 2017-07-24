package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Println(math.Pi)
	// math.pi 会报错
}

/*
	GO 中 , 首字母大写的名称是被导出的

	在导入包之后, 只能访问包所导出的名字, 任何未导出的名字是不能被包外的代码访问的

	如：Foo 和 FOO 都是被导出的名称。 foo 是不会被导出的
*/
