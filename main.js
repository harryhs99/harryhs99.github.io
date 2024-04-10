writeText(["Under Construction", "Back Soon..."], "statement", "#008529");

function writeText(words, id, colour) {
  if (colour === undefined) colour = "#008529";

  // document elements
  const console = document.getElementById("console");
  const target = document.getElementById(id);

  // variables
  let caretVisible = true;
  let letterCount = 0;
  let n = 1;
  let waiting = false;

  target.setAttribute("style", "color:" + colour);

  // write the text
  window.setInterval(function () {
    if (letterCount === -1 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function () {
        let usedWord = words.shift();
        words.push(usedWord);
        n = 1;
        letterCount += n;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        n = -1;
        letterCount += n;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += n;
    }
  }, 135);

  // blink the caret
  window.setInterval(function () {
    if (caretVisible === true) {
      console.className = "console-underscore hidden";
      caretVisible = false;
    } else {
      console.className = "console-underscore";
      caretVisible = true;
    }
  }, 450);
}
