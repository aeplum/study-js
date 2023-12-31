function solution(code) {
    var ret = '';
    let mode = 0;
    
    for (let idx = 0; idx < code.length; idx++){
        // mode가 0일 때
        if (mode == 0){
            if(code[idx] != "1"){
                if(idx % 2 == 0) {
                    ret += code[idx];
                }
            }else {
                mode = 1;
            }
        }
        // mode가 1일 때
        else {
            if(code[idx] != "1") {
                if(idx % 2 == 1) {
                    ret += code[idx];
                }
            }else{
                mode = 0;
            }
        }
    }
    
    if (ret == ""){
        ret = "EMPTY";
    }
    return ret;
}