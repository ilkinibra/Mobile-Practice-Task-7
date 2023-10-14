let str = "Hello Deveducation Student";
let text = "Deveducation";
let replaceText = "BDU";
let textIndex=0;
let newStr="";

for(let i = 0; i <str.length;i++){
    if(str[i] == text[textIndex]){
        textIndex++;
        if (textIndex === text.length) {
            newStr += replaceText;
            textIndex = 0;
        }
    }
    else{
        newStr += str[i]
        textIndex = 0;
    }
   
}
console.log(newStr)