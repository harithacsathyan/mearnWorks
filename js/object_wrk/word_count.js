var text="hello hai hello hai hello hiii"
var words=text.split(" ") //* split using space
console.log(words);
var wordCount={} //empty object to add word and its count


for (let word of words)
{
    if (word in wordCount )
    {
        wordCount[word]+=1 //step2  count++
    }
    else
    {
        wordCount[word]=1 //step1    wordcount={hai:1,hello:1}
        // console.log(wordCount);
    }
}
console.log(wordCount);
