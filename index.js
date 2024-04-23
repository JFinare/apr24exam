// Task: Reverse Words in a Sentence
// Write a function `reverseWords(sentence)` that takes a sentence as input and returns the sentence with the order of the words reversed.
// The words in the sentence should retain their original character order, but the sequence of words in the sentence should be reversed.

// Constraints:
// - Words are separated by spaces, and the sentence may contain leading or trailing spaces.
// - Consider only spaces as word separators (no punctuation splitting).
export function reverseWords(sentence) {
    let trimmed=sentence.trim();
    const trimmedArr=trimmed.split(" ");
    const splitArr=[];
    let resultArray=[];

    for(let i=0;i<trimmedArr.length;i++){
        if(trimmedArr[i]!==""){
            splitArr.push(trimmedArr[i])
        }
    }
    let j=splitArr.length-1;

    for(let i=0;i<splitArr.length;i++){
        resultArray.push(splitArr[j])
        j--;
    }

    let resultSentence=resultArray.join(" ");
    return resultSentence;

}

// Task: Word Frequency Counter
// Given a string of text, write a function `wordFrequency` that counts the
// frequency of each unique word in the text. The function should return an
// object where the keys are the unique words and the values are the counts
// of each word. The comparison of words should be case-insensitive.

// Additional instructions:
// - Words are separated by spaces, and the text may contain punctuation.
// - The function should not count punctuation as part of the words.
// - Return the result with words in lowercase.
export function wordFrequency(text) {
    const brokenDown=text.toLowerCase().replaceAll(/[,.'":?!]/g,"").split(" ");
    const extraTrimmed=[]
    for(let i=0;i<brokenDown.length;i++){
        if(brokenDown[i]!==""){
            extraTrimmed.push(brokenDown[i])
        }
    }
    const theResults={};
    for (let i=0; i<extraTrimmed.length;i++){
        let theWord=extraTrimmed[i];
        if (theWord in theResults){
            theResults[theWord]+=1;
            }else{
                theResults[theWord]=1;
            }
        }
        return theResults
    }

//console.log(wordFrequency("   This    is a   test   "))





// Task: Top N Frequent Words
// Write a function `topNFrequentWords(text, n)` that finds the top `n` most frequent words in a given text.
// The function should return an array of tuples where each tuple contains a word and its frequency,
// sorted in descending order of frequency. If two words have the same frequency, they should be sorted alphabetically.

// Constraints:
// - Text is case-insensitive.
// - Words are separated by spaces, and the text may contain punctuation.
// - Ignore punctuation, and consider only alphabetic characters for word separation.
export function topNFrequentWords(text, n) {
    const brokenDown=text.toLowerCase().replaceAll(/[,.'":?!]/g,"").split(" ");
    let extraTrimmed=[]
    for(let i=0;i<brokenDown.length;i++){
        if(brokenDown[i]!==""){
            extraTrimmed.push(brokenDown[i])
        }
    }
    extraTrimmed=extraTrimmed.sort()
    const counted=[];
    for(let i=0;i<extraTrimmed.length;i++){
        let doesExist = counted.findIndex(existing => existing[0]===extraTrimmed[i]);
        if (doesExist===-1){
            counted.push([extraTrimmed[i],1])
        }else{
            counted[doesExist][1]++;
        }
        
    }
    
    counted.sort((a,b)=>b[1]-a[1])
    counted.sort((a,b)=>{
        if(a[1]===b[1]){
        if (a[0]<b[0]){
            return -1;
        }
        if (a[0]>b[0])
        return 1;}
    })

    /*
    const orderByValue=[]
    counted.sort((a,b)=>{
        if (a.counted[1]<b.counted[1]){
         return -1;
     }
      if (a.counted[1]>b.counted[1]){
         return 1;
     }
     })
     console.log(counted)
     */
    const theResults=counted.slice(0,n)
return theResults

}

