function smallest(a, b, c) {
    // if (a <= b && a <= c) {
    //     return a;
    // } else if (b <= a && b <= c) {
    //     return b;
    // } else {
    //     return c;
    // }
//-------------------------------------------------
    // const numbers = [a,b,c]
    // numbers.sort((x,y)=>x-y)
    // return numbers[0]
//-----------------------------------------------------------
    try{
        if(!isFinite(a,b,c)){
        throw new Error("enter a valid number")}
        
    } 
    catch(error){
        return error.message;
    }
     return a<b && a<c ? a : b<c ? b : c;

}

console.log(smallest(3, 4, 2)); 
console.log(smallest(7, 2, 5)); 
console.log(smallest("a", 1, 3)); 