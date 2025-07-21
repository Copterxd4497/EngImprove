"use strict";
var _a;
(_a = document.querySelector(".button-send")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    const text = document.querySelector(".status-text");
    //   const random: number = Math.floor(Math.random() * 100);
    //   const word: string = words[random].word;
    if (text) {
        text.innerHTML = "word";
        setTimeout(() => {
            text.innerHTML = "";
        }, 5000);
    }
});
//# sourceMappingURL=index.js.map