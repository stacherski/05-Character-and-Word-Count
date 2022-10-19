const CHARACTER_COUNT = document.querySelector("#character-count");
const WORD_COUNT = document.querySelector("#word-count");
const TEXTAREA = document.querySelector("#text");

//for repeated code used with multiple events
//provide array with event names
//and use forEach to iterate through
["input"].forEach((EVT) => {
  TEXTAREA.addEventListener(EVT, () => {
    CHARACTER_COUNT.textContent = TEXTAREA.value.length;
    let WORDS = TEXTAREA.value.replace(",", "").replace(".", "").split(" ");
    WORD_COUNT.textContent = WORDS.length;
    console.log(WORDS);
  });
});
