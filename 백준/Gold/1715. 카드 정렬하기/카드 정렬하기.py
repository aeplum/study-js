import heapq

n = int(input())
card = []
result = 0

for _ in range(n):
    num = int(input())
    heapq.heappush(card, num)

while len(card)>1:
    n1 = heapq.heappop(card)
    n2 = heapq.heappop(card)
    result += n1 + n2
    heapq.heappush(card, n1+n2)

print(result)