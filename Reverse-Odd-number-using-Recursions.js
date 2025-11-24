class Sol{
    evenN(n){
        if (n<=0){
            return
        }
        console.log(2*n-1)
        this.evenN(n-1)
    }
}
const n=parseInt(prompt('enter a Number'))
new Sol().evenN(n)
