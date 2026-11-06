function max(a){
    console.log(a.sort((x,y)=> x-y));
    console.log(a[a.length-1])
}

max([1, 2, 5, 3])