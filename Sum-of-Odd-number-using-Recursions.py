class Sol():
    def evenN(self,n):
        if n<=0:
            return n
        return (2*n-1)+ self.evenN(n-1)
n=int(input())
print(Sol().evenN(n))
