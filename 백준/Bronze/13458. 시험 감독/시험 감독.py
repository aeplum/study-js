n = int(input())
data = list(map(int, input().split()))
b, c = map(int, input().split())
g = 0

for i in data:
    i -= b
    g += 1
    if i>0:
        if i%c == 0:
            g += (i//c)
        else:
            g += (i//c) + 1

print(g)