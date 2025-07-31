
function reverseWords(sentence) {
    return sentence
        .split(" ")
        .reverse()
        .join(" ");
}


let inputSentence = "JavaScript is fun and powerful";
console.log("Original Sentence:", inputSentence);
console.log("Reversed Words:", reverseWords(inputSentence));
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Example
let duplicateArray = [1, 2, 3, 2, 4, 1, 5, 3];
console.log("Original Array:", duplicateArray);
console.log("Without Duplicates:", removeDuplicates(duplicateArray));
function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}


let text = "The quick brown fox jumps over the lazy dog";
console.log("Text:", text);
console.log("Vowel Count:", countVowels(text));
