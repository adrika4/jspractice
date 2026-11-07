function prime(a) {
    let result = "number is prime";

    for(let i=2; i<a; i++){
        if(a%i===0){
            
             result= "number is composite"
             break;
        }
    }
            console.log(result)

    
}

prime(5)