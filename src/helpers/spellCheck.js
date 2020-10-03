import checkSimilarity from './checkSimilarity.js';

const spellCheck = (name, arr) => {
    let bestMatch = arr[0];
    let bestSimilarity = checkSimilarity(bestMatch, name);
    let item;
    for (item of arr) {
        const newSimilarity = checkSimilarity(item, name);
        if (newSimilarity > bestSimilarity) {
            bestSimilarity = newSimilarity;
            bestMatch = item;
        }
    }
    return bestMatch;
};

export default spellCheck;
