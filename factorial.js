function factorial(a){

    try {if(!isFinite(a) || a<=0){
        throw new Error("Enter a positive number")
    }
}
catch(error) {
    console.log(error.message)
    return;
}

    let result = 1;

    
    for(let i=1;  i<=a; i++){
        
        result = result*i;
        
    }
    return result;
    
}

console.log(factorial(3));
console.log(factorial(-4));
console.log(factorial(0));
console.log(factorial("p"));
