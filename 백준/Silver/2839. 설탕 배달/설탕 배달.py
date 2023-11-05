n = int(input())
k = 0

while n >=0:
    if n%5==0:
        k = k + (n//5)
        print(k)
        break;
        
    n -= 3
    k += 1
else:
    print(-1)
