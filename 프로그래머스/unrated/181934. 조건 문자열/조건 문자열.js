function solution(ineq, eq, n, m) {
    var answer = 0;
    if (n == m) {
        if(eq == "="){
            return 1;
        }
    }
    
    if (ineq == "<"){
        if (n < m) {
            return 1;
        }else { return 0;}
    }else {
        if(n > m) {
            return 1;
        }else {return 0;}
    }
}