// randomness
brainCellCount = (Math.random() * 10 ** 12 - Math.random() * 10 ** 12).toPrecision(3);
// WARNING! code might not work
if (brainCellCount < 0) {
  setInterval(() => {
    brainCellCount = (Math.abs(brainCellCount) ** 1.01) * -1;
    document.getElementById("braincells").innerHTML = brainCellCount.toPrecision(3);
  }, 50);
} else if (brainCellCount = 0) { // highly unlikely
  brainCellCount = 1;
} else {
  setInterval(() => {
    brainCellCount **= 1.01;
    document.getElementById("braincells").innerHTML = brainCellCount.toPrecision(3);
  }, 50);
}
document.getElementById("braincells").innerHTML = brainCellCount;
