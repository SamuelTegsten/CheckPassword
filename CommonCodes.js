class CommonCodes {
    constructor() {
        this.commonCodes = new Map();
    }

    populate(...filenames) {
        for (const filename of filenames) {
            fetch(filename)
                .then(response => response.text())
                .then(data => {
                    const codes = data.trim().split('\n');
                    for (const code of codes) {
                        this.commonCodes.set(code.trim(), true);
                    }
                })
                .catch(error => {
                    console.error(`Error reading password file: ${error}`);
                });
        }
    }

    contains(code) {
        return this.commonCodes.has(code);
    }
}

const commonCodes = new CommonCodes();
commonCodes.populate("codes1.txt", "rockyou.txt", "rockyou2.txt");
