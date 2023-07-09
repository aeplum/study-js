function solution(num_list) {
    var answer = 0;
    let odd = "";
    let even = "";
    for (let i of num_list) {
        i % 2 ? odd += String(i) : even +=String(i)
    }
    return Number(odd)+ Number(even);
}