let num = [8, 3, 5, 7, 2]

/*
for (let pos = 0 ; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor: ${num[pos]}`)
}
*/
console.log('---------------------------------------------------')

//for, Versão mais simplificado para js

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor: ${num[pos]}`)
}

