#include <stdio.h>

int main() {
    long long int n = 0;
    long long int f = 1;
    
    scanf("%lld", &n);
   
    for(short i=n; i > 0; i--){ f = f * i;}
    
    printf("%lld", f);
    
}