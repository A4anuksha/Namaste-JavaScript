function a(){//c()'s parent lexical environment
    var b=10;
    c();
    function c(){//lexically(physically) present inside a()
        console.log(b);
    }
}
a();