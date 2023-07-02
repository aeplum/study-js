function solution(str1, str2) {
    var answer = '';
    var i = str1.length
    var x = 0
    
    while(x < i) {
        answer += str1[x] + str2[x];
        x ++; 
    }
    
    return answer;
}