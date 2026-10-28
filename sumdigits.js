function sum(a){

    const digits  = String(a).split('').map(Number)
    console.log( digits);

    let result = 0

    for(let i=0; i<digits.length ; i++){
        result = result + digits[i]

    }
    return result;

}
 
console.log(sum(123))