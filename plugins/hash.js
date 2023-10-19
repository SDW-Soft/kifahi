export function hashTextToUser(algo, inputString) {
    function addCharacterAfterEach(algo, inputString, charactersToAdd) {
        const characters = inputString.split(/(?!\s)/);
        var resultString;
        var attached = [
            'ب',
            'ت',
            'ث',
            'ج',
            'ح',
            'خ',
            'س',
            'ش',
            'ص',
            'ض',
            'ط',
            'ظ',
            'ع',
            'غ',
            'ف',
            'ق',
            'ك',
            'ل',
            'م',
            'ن',
            'ه',
            'ي']
        var advanced = [
            'ٵ', 'ٹ', 'ټ', 'ٽ', 'چ', 'ڂ', 'ځ', 'ڍ', 'ڎ', 'ڔ', 'ژ', 'ڛ', 'ڜ', 'ڝ', 'ڞ', 'ط', 'ڟ', 'ڠ', 'غ', 'ڢ', 'ڣ', 'ک', 'ڷ', '۾', 'ن', 'ﻬ', 'ﯝ', 'ﻰ'
        ]
        var letters = [
            'ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي'
        ]
        if (algo == 2) {
            for (let i = 0; i < characters.length - 1; i++) {
                if (attached.includes(characters[i]))
                    characters[i] += charactersToAdd;
            }
            resultString = characters.join('');
        } else if (algo == 1) {
            for (let i = 0; i < characters.length - 1; i++) {
                if (attached.includes(characters[i]))
                    characters[i] += charactersToAdd;
            }
            resultString = characters.join('');
        } else {
            const characterMap = {};
            for (let i = 0; i < letters.length + 1; i++) {
                characterMap[letters[i]] = advanced[i];
            }

            // Split the sentence into an array of characters
            const sentenceArray = inputString.split('');

            // Replace characters based on the character map
            const modifiedArray = sentenceArray.map((char) => characterMap[char] || char);

            // Join the modified characters back into a string
            const resultString = modifiedArray.join('');

            return resultString;

        }

        return resultString;
    }
    var charactersToAdd = "ـ؍"
    if (algo == 1)
        charactersToAdd = "ــ"
    else if (algo == 2)
        charactersToAdd = "ـ؍"
    else
        charactersToAdd = ""
    const modifiedString = addCharacterAfterEach(algo, inputString, charactersToAdd);
    return modifiedString;
}

