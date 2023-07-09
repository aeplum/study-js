function solution(num_list) {
    let answer = 0;
    
    let product = 1;
    let mul = 0;
    
    for ( let i = 0; i < num_list.length; i++) {
        product *= num_list[i]
        mul += num_list[i]
    }
    
    (product > mul*mul) ? answer = 0 : answer = 1

    return answer
}