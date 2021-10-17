// call 、bind 、apply三个都是用来改变函数的this对象的指向，
// 第一个参数都是this要指向的对象，也就是想指定的上下文。call和apply是立即调用函数，
// 而bind是返回一个函数，需要调用的时候再执行

//方法或函数.call(obj, 参数1，参数2，...)

// Function.prototype.mycall = function (ctx, ...args) {
//     ctx = ctx || window
//     ctx.func = this    //这里的this是调用call的那个函数，这一句就把这个函数挂载在了ctx上了
//     let res = ctx.func(...args)
//     delete ctx.func
//     return res
// }


//方法或函数.apply(obj,  [参数1，参数2，...])
Function.prototype.myapply = function (ctx, args = []) {
    if (!args instanceof Array) thow('只接受数组')
    ctx = ctx || window
    ctx.func = this
    let arg = arguments[1]
    let res = ctx.func(...arg)
    delete ctx.func
    return res
}

//方法或函数.bind(obj)
// Function.prototype.mybind = function (thisArg, ...args1) {
//     return (...args2) => {
//         thisArg.fn = this;
//         thisArg.fn(...args1.concat(args2));
//         delete thisArg.fn;
//     }
// }



// 测试
var obj = {
    name: 'yiyiyi',
    show: function () {
        console.log(this.name);
        console.log(arguments);
    }
}

var person = { name: 'kang' }

// obj.show.mycall(person, 1, 2, 3)
obj.show.myapply(person, [1, 2, 3, 4])
// obj.show.mybind(person, 1, 2, 3)(4, 5, 6)
