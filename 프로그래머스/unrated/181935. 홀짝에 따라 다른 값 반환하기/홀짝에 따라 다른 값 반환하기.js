function solution(n) {
    var answer = 0;
    
    if (n % 2 == 0) {
        for (let i = 2; i<=n; i=i+2){
            answer = answer + i * i
        }  
    }else {
        for (let j = 1; j <= n; j=j+2){
            answer += j
        }
        
    }
    
    return answer;
}