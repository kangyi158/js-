var res = "hahha";
var obj = {
    res: "heiheiehie",
    say: (...msg) => {
        console.log(this);
        console.log(this.res, "hahha", ...msg);
    }
}
obj.say(1, 2, [1], "55555")
//输出 hahha hahha 1 2 [1] 55555
// 用node的话会是undefined hahha 1 2 [ 1 ] 55555，因为node没有window对象