// consoleText(["Under Construction", "Back Soon..."], "text", ["#03A062"]);

writeText(["Under Construction", "Back Soon..."], "statement", "#008529");

function writeText(words, id, colour) {
  if (colour === undefined) colour = "#008529";

  // document elements
  const console = document.getElementById("console");
  const target = document.getElementById(id);

  // variables
  let caretVisible = true;
  let letterCount = 1;
  let index = 1;
  let waiting = false;

  target.setAttribute("style", "color:" + colour);

  // write the text
  window.setInterval(function () {
    target.innerHTML = words[0].substring(0, letterCount);
    letterCount += index;
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

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ["#fff"];
  let visible = true;
  const con = document.getElementById("console");
  let letterCount = 1;
  let x = 1;
  let waiting = false;
  const target = document.getElementById(id);
  target.setAttribute("style", "color:" + colors[0]);
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function () {
        let usedColor = colors.shift();
        colors.push(usedColor);
        let usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute("style", "color:" + colors[0]);
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
  window.setInterval(function () {
    if (visible === true) {
      con.className = "console-underscore hidden";
      visible = false;
    } else {
      con.className = "console-underscore";

      visible = true;
    }
  }, 400);
}
