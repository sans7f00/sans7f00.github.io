// randomness
brainCellCount = (Math.random() * 10 ** 12 - Math.random() * 10 ** 12).toPrecision(3);
setInterval(() => {
  if (brainCellCount < 0) {
    brainCellCount = -(Math.abs(brainCellCount) ** 1.01);
  } else if (brainCellCount = 0) {
    brainCellCount++;
    brainCellCount **= 1.01;
  } else {
    brainCellCount **= 1.01;
  }
}, 50);
document.getElementById("braincells").innerHTML = brainCellCount;
