class Sol():
    def evenN(self,n):
        if n<=0:
            return 
        print(2*n-1, end=' ')
        self.evenN(n-1)
        
n=int(input())
Sol().evenN(n)
