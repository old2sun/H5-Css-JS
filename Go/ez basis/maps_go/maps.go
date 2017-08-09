package main

import "fmt"

type Vertex struct {
    Lat, Long float64
}

var m map[string]Vertex

func main() {
    m = make(map[string]Vertex)
    m["Bell Labs"] = Vertex {
        40.68433, -74.399967,
    }
    fmt.Println(m["Bell Labs"])
    // {40.68433 -74.399967}
}

/*
    map

    map 映射键到值

    map 在使用之前必须用 make 创建为 nil 的 map 是空的, 并且不能对他赋值
*/
