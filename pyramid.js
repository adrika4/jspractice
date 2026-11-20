function pyramid(a){
    //a is the number
    //print from 1 to n then print n-1 to 1 for hotizontal ones total n number of times(vertical)
    let i = 1;
    
    while(i<=a){
        let row = "";
        for(let m =1; m<a-i; m++){
            row = row + " ";

            
        }
        

        for(let j=1; j<i; j++){
               
              row = row + j;
        }
        row = row + i;
        for(let k=i-1; k>0; k--){
               
              row = row + k;
        }
        
        console.log(row)
        i+=1
        
            }
    }
    pyramid(5)



// console.log(pyramid(5))

// n_odd = 1 
// n = 0
// while n < val:

//     print(" " * (val - n - 1), end="")
//     if n_odd == 1:
//         print(n_odd, end="")
//         n += 1
//         n_odd += 1
//         print()
//         continue


//     target_number = 2 * n_odd - 1
//     for i in range(1, target_number // 2 + 1):
//         print(i, end="")
//     for i in range(target_number // 2 + 1, 0, -1):
//         print(i, end="")

//     print()
//     n += 1
//     n_odd += 1 