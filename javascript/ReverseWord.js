
const str = "This is a sunny day";


const wordsArr = str.split(' ');

for(let i = 0; i < wordsArr.length; i++){
    
  
    let word = wordsArr[i];
    
   
    let temp = "";
    
    
    for(let j = word.length - 1; j >= 0; j--){
        
        
        temp = tempWord + word[j];
        
    }
    
    
    wordsArr[i] = temp;
    
}


const reversedStr = wordsArr.join(' ');

console.log(reversedStr);