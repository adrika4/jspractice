function word(a){
   if (a.trim()=== ""){
    console.log(0);
    return;
   }

   let result = a.trim().split(/\s+/).length;
   console.log(`number of words are ${result}`);
}

word("I am a boy");
word("I  am  a boy");
word(" I am a boy ");
word("");