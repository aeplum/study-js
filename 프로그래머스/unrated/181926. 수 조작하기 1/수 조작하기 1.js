function solution(n, control) {
    let i;
    
    for (i of control) {
        if (i=="w") {
            n++
        }else if(i=="s"){
            n--
        }else if(i=="d"){
            n = n+10
        }else if(i=="a"){
            n = n-10
        }else{
            console.log('error')
        }
    }

    return n;
}