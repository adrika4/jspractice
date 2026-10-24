function oddeven(a){
    try{
        if( !Number.isFinite(a)){
            throw new Error("Please enter a valid number")
        }
    }
    catch(error){
        return error.message
    }

    
    // if(a%2===0){
    //     console.log(`${a} is even`)
    // }
    // else{
    //     console.log("this is an odd number")
    // }
   return a%2===0 ? "even" : "odd";


}
 console.log(oddeven(-5))
 console.log(oddeven("o"))
 console.log(oddeven(28))