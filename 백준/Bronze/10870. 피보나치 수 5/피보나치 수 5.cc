#include <stdio.h>

int f_recur(int n){
    
    if (n == 0){
        return 0;
    }
    if (n == 1){
        return 1;
    }
    return f_recur(n-1) + f_recur(n-2);
}

int main(){
    int n = 0;
    scanf("%d", &n);
    
    printf("%d", f_recur(n));
    
}