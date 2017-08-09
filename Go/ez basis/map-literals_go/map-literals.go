package main

import "fmt"

type Vertex struct {
    Lat, Long float64
}

var m = map[string]Vertex {
    "Bell Labs":Vertex {
        40.68433, -74.399967,
    },
    "Google":Vertex {
        37.42202, -122.08408,
    },
}

func  main()  {
    fmt.Println(m)

    // map[Bell Labs:{40.68433 -74.399967} Google:{37.42202 -122.08408}]
}

/*
    map 的文化

    它的文法跟结结构体文法相似, 不过必须有键名
*/
