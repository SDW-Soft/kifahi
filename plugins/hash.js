export function hashTextToUser(language, algo, inputString) {
    var resultString;
    function addCharacterAfterEach(algo, inputString, charactersToAdd) {
        const characters = inputString.split(/(?!\s)/);
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
            const sentenceArray = inputString.split('');
            const modifiedArray = sentenceArray.map((char) => characterMap[char] || char);
            const resultString = modifiedArray.join('');

            return resultString;

        }

        return resultString;
    }
    function rephraseSentence(algo, inputString, charactersToAdd) {
        var advanced = [
            'å', 'ß', 'ç', 'd', 'ê', 'f', '𝒢', '𝒽', 'î', '𝓳', '𝔎', 'ℓ', '𝔪', '𝔫', '𝑜', '𝓅', '𝔮', '𝖗', '𝖘', '𝖙', '℧', '𝓋', '𝓌', '𝖝', '𝔂', '𝖟'
        ]
        var letters = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
        ]
        if (algo == 2) {
            resultString = inputString.replace(/(\S)(?=\S)/g, '$1 ');
        } else if (algo == 1) {
            const randomChars = ['.', '-', '_'];
            resultString = inputString.replace(/\s+/g, () => {
                const randomIndex = Math.floor(Math.random() * randomChars.length);
                return randomChars[randomIndex];
            });
            // return
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
            resultString = modifiedArray.join('');
        }
        return resultString
    }

    var modifiedString = '';
    if (language == 'ar') {
        var charactersToAdd = "ـ؍"
        if (algo == 1)
            charactersToAdd = "ــ"
        else if (algo == 2)
            charactersToAdd = "ـ؍"
        else
            charactersToAdd = ""
        modifiedString = addCharacterAfterEach(algo, inputString, charactersToAdd);
    } else {
        modifiedString = rephraseSentence(algo, inputString, charactersToAdd);
    }
    return modifiedString;
}

