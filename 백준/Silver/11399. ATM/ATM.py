n = int(input())
p = list(map(int, input().split()))
time = 0
total = 0

p.sort()

for i in p:
    time += i
    total += time
    
print(total)

    

         