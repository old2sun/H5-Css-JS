/*
    Proxy 用于修改某些操作的默认行为 .

    理解为 在目标对象之前假设一层 "拦截",外界对该对象的访问, 必须通过这层拦截

    结构：new Proxy(target, handler), target表示拦截的目标对象,
     handler 是一个对象, 用来定制拦截行为

     handler 行为参数自行查阅：
     1) get(target, proKey, receiver)
        拦截对象属性的读取
*/



var proxy = new Proxy({}, {
    get: function(target, property) {
        return 35;
    }
});

proxy.time // 35
proxy.name // 35
proxy.title // 35

console.log(proxy.title)
