document.querySelector(".button-send")?.addEventListener("click", () => {
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
