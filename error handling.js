function divide(a,b){
    if(b===0){
        throw new Error("b cannot be 0")
    }
    return a/b;
}
try {
        console.log(divide(4,9))
}
catch(error){
    console.log("errorrrrr")
}