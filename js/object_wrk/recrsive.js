var pattern="ABBABB"
var wc={}
for(let char of pattern){
    if(char in wc){
        console.log(`${char} is 1st recursive char `);
        break
    }
    else{
        wc[char]=1
    }
}