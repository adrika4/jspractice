function armstrong(a){
    a = String(a)

    let length = a.length
    let result=0
    for(let i=0; i<=a.length-1; i++){
         result += a[i]**length 
    }

    if(result == a){
        console.log("this is an armstrong number")
    }
    else{
        console.log("this is not an armstrong number")
    }



}

armstrong(13)