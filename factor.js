function factor(a) {
    let result = [];

    for(let i=0; i<=a; i++){
        if(a%i===0){
            result.push(i);
        }
    }
    console.log(result);

}

factor(45)