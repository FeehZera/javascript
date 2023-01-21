function tsst(n) {
    if (n%2==0 || n==0){
        return 'par'
    } else {
        return 'Ímpar'
    }
}
let res = tsst(222)
console.log(res)