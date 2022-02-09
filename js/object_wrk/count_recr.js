var pattern = "ABAABBC"
var wordCount = {}
var count=1
for (var i in pattern) {
    var character = pattern.charAt(i)
    for (let word of character) {
        if (character in wordCount) {
            wordCount[word] += 1
           
            // console.log(wordCount);
        }
        else {
            wordCount[word] = 1
           
        }
    }
}
console.log(wordCount);



