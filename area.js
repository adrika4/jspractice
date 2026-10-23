function area(l,b){
    if(l<0){
        throw new RangeError("length should be positive")
    }
    if(b<0){
        throw new RangeError("b should be positive")
    }
    const area = l*b;
    console.log(area);
}

area(2,3)
area(2.56,8.098)
area(-2.67)