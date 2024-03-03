function fib(n) {
    var tmp = [0, 1];
    var i = 2;
    var a = logic(n, tmp, i);
    return a;
}

function logic(n, tmp, i){
    if (n == 0){
        tmp = [0];
        return tmp;
    } else if(n == 1){
        return tmp;
    } else {
        if (i > n){
            return tmp;
        } else {
            tmp[i] = tmp[i - 1] + tmp[i - 2];
            i++;
            return logic(n, tmp, i);
        }
    }
}
