// lines setup for typewriter animation
const line1 = "hello.";
const line2 = "why are you here?";
const line3 = "";
const line4 = "get out of here.";
const line5 = "";
const line6 = "or else...";
const line7 = "";
const line8 = "what would happen?";
const line9 = "";
const line10 = "YOU DON'T WANT TO KNOW...";
const lines = [line1, line2, line3, line4, line5, line6, line7, line8, line9, line10];

// other variables setup
// in most programming languages, index starts at 0
lineIndex = 0;
charIndex = 0;
typeSpeed = 99; // in ms
pauseDuration = 1000; // in ms; this is equal to 1 sec
text = document.getElementById('text');

function typeWriter() {
  if (lineIndex < lines.length) {
    if (charIndex < lines[lineIndex].length) {
      text.textContent += lines[lineIndex].charAt(charIndex); // "prints" out text, letter by letter
      charIndex++; // moves to next letter
        if (lineIndex === 9) {
          // executes only when line10 is being printed
          setTimeout(typeWriter, typeSpeed * 3); // line10 is printed 3 times slower >:)
        } else {
          setTimeout(typeWriter, typeSpeed); // other lines are printed out at normal speed
        }
    } else {
      text.innerHTML += '<br>'; // Move to the next line if last letter is reached
      charIndex = 0;
      lineIndex++;
      setTimeout(typeWriter, pauseDuration); // Pause for 1 second after each line is printed
    }
  }
}

// Start the typewriter animation by calling the function
typeWriter();

/* this is not a multi-line comment but it is still a comment */
