function reverse(a){

    a = String(a)

    // if(typeof a !== 'string'){
    //     throw new Error("Only strings")
    // }
    
    let result = "";
    
    for(let i = a.length-1; i>=0; i--){
        console.log(a[i])
        result = result + a[i]
    }
    return result;

    }

    console.log(reverse("adrika gaur"))
    console.log(reverse(9087))



