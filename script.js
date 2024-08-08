// WARNING! might be faulty
brainCellCount = (Math.random() * 10 ** 12 - Math.random() * 10 ** 12).toPrecision(3);
if (brainCellCount < 0) {
  setInterval(() => {
    brainCellCount = (Math.abs(brainCellCount) ** 1.01) * -1;
    iq = (Math.abs(brainCellCount) ** 0.09).toPrecision(3) * -1;
    document.getElementById("braincells").innerHTML = brainCellCount.toPrecision(3);
    document.getElementById("iq").innerHTML = iq.toPrecision(3);
  }, 50);
} else if (brainCellCount = 0) {
  document.getElementById("braincells").innerHTML = 0;
  document.getElementById("iq").innerHTML = 0;
} else {
  setInterval(() => {
    brainCellCount **= 1.01;
    iq = (brainCellCount ** 0.09).toPrecision(3);
    document.getElementById("braincells").innerHTML = brainCellCount.toPrecision(3);
    document.getElementById("iq").innerHTML = iq.toPrecision(3);
  }, 50);
}
