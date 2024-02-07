function findCodeAlgorithm(targetCode) {
    let currentCode = "";
    const maxLength = targetCode.length;

    while (currentCode !== targetCode) {
        currentCode = incrementCode(currentCode);
        if (currentCode.length > maxLength) {
            return null; // Code not found
        }
    }
    return currentCode;
}

function incrementCode(code) {
    const VALID_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let incrementedCode = "";
    if (!code) {
        incrementedCode = VALID_CHARACTERS[0];
    } else {
        let i = code.length - 1;
        let carryOver = true;
        while (i >= 0 && carryOver) {
            const currentIndex = VALID_CHARACTERS.indexOf(code[i]);
            if (currentIndex === VALID_CHARACTERS.length - 1) {
                incrementedCode = VALID_CHARACTERS[0] + incrementedCode;
                carryOver = true;
            } else {
                incrementedCode = VALID_CHARACTERS[currentIndex + 1] + incrementedCode;
                carryOver = false;
            }
            i--;
        }
        if (carryOver) {
            incrementedCode = VALID_CHARACTERS[0] + incrementedCode;
        } else {
            incrementedCode = code.slice(0, i + 1) + incrementedCode;
        }
    }
    return incrementedCode;
}
