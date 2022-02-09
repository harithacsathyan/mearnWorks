var text="hello hai hello hai hello hiii"
var wordCount={} 
text.split(" ").map(word=>word in wordCount?wordCount[word]+=1:wordCount[word]=1)
console.log(wordCount);
