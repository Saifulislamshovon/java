function isEven( num1 , num2, num3){
    return {
            number_1_is_even  : num1 % 2 === 0 ? true: false ,
            number_2_is_even  : num2 % 2 === 0 ? true: false ,
            number_3_is_even  : num3 % 2 === 0 ? true: false  
        
    
    };

}

console.log(isEven(5,10,15));
