/*
    Go标记
    Go 可以由多个标记组成, 可以是关键字, 标识符, 常量, 字符串, 符号。
    如：fmt.Println("Hello, World!")
    上面的语句有6个标记, 每行一个
    fmt
    .
    Println
    (
    "Hello, World!"
    )
*/

/*
    位分隔符
    在 Go 中, 一行代表一个语句结束。每个语句不需要像其它语言一样分号结尾, 这些工作由 Go 编译器自动完成
    如果打算把多个语句写在同一行, 它们则必须使用分号认为区分, 但不鼓励使用

    两个语句demo：
    fmt.Println("helloween")
    fmt.Println("u r noob")
*/

/*
    标识符
    标识符用来命名遍历、类型等程序实体。一个标识符实际上就是一个或是多个字母、数字、下划线
    组成的序列, 但是第一个字符必须是字母或下划线而不能是数字。

    有效标识符 demo:
    mahesh   kumar   abc   move_name   a_123
    myname50   _temp   j   a23b9   retVal

    无效标识符 demo:
    1ab（以数字开头）
    case（Go 语言的关键字）
    a+b（运算符是不允许的）

*/
