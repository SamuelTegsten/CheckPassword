// CommonCodes.js
class CommonCodes {
    constructor() {
        this.commonCodes = new Map();
    }

    populate(...filenames) {
        const totalFiles = filenames.length;
        let filesLoaded = 0;

        for (const filename of filenames) {
            fetch(filename)
                .then(response => response.text())
                .then(data => {
                    const codes = data.trim().split('\n');
                    for (const code of codes) {
                        this.commonCodes.set(code.trim(), true);
                    }
                    filesLoaded++;
                    updateLoadingBar(filesLoaded, totalFiles);
                })
                .catch(error => {
                    console.error(`Error reading password file: ${error}`);
                    filesLoaded++;
                    updateLoadingBar(filesLoaded, totalFiles);
                });
        }
    }

    contains(code) {
        return this.commonCodes.has(code);
    }
}

const commonCodes = new CommonCodes();

function updateLoadingBar(filesLoaded, totalFiles) {
    const loadingBar = document.getElementById("loadingBar");
    const loadingText = document.getElementById("loadingText");
    const percentage = (filesLoaded / totalFiles) * 100;
    loadingBar.style.width = `${Math.min(percentage, 100)}%`; // Ensure the width doesn't exceed 100%
    loadingText.textContent = `Loading ${Math.round(percentage)}%`;
}

commonCodes.populate("codes1.txt", "rockyou.txt", "rockyou2.txt");
