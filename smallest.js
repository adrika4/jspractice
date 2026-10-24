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

    // let smallestN = a;
    // if(b<smallestN){
    //     smallestN = b;
    // }
    // if (c<smallestN){
    //     smallestN = c;
    // }
    // return smallestN;

    try{
        if(!isFinite(a)|| !isFinite(b)|| !isFinite(c)){
        throw new Error("enter a valid number")}
        
    } 
    catch(error){
        return error.message;
    }
     return a<b && a<c ? a : b<c ? b : c;

}

console.log(smallest(3, 4, 2)); 
console.log(smallest(7, 2, 5)); 
console.log(smallest(1, "a",  3)); 