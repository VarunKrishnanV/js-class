function fun1() {
    console.log("Function 1 excuted");
    fun2()
}

function fun2() {
    console.log("Function 2 excuted");
    fun3()
}

function fun3() {
    console.log("Function 3 excuted");
    fun4()

}

function fun4() {
    console.log("Function 4 excuted");
}

fun1()


console.log("-------------- Recursion --------------");

function singleAdd(a){
    console.log(a);
    if(a < 10) return singleAdd(++a);
    return;
}

singleAdd(0)
