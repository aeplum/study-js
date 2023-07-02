function solution(a, b) {
    var answer = 0;
    if (Number(a.toString() + b.toString()) < Number(b.toString() + a.toString())){
        answer = Number(b.toString() + a.toString());
    }else {
        answer = Number(a.toString() + b.toString());
    }
        
    return answer;
}