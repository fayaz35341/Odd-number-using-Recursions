class Sol{
    evenN(n){
        if (n<=0){
            return n
        }
        return (2*n-1)+this.evenN(n-1)
    }
}
const n=parseInt(prompt('enter a Number'))
console.log(new Sol().evenN(n))
