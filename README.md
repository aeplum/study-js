# study-js
javascript 공부공간

1일차(23-06-30)</br>
<img width="311" alt="스크린샷 2023-06-30 오후 1 24 25" src="https://github.com/aeplum/study-js/assets/105475492/2a74778b-7dbf-47f0-98ee-967a38d63a94">



<details>
<summary>2일차</summary>
## 문자열 겹쳐쓰기
문자열 함수 slice랑 length를 이용하면 된다
  
```
function solution(my_string, overwrite_string, s) {
    var answer = '';
    
    answer = my_string.slice(0,s) + overwrite_string
            + my_string.slice( s+ overwrite_string.length)

    return answer;
}
```

</details>
