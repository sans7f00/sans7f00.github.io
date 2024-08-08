// WARNING! might be faulty
brainCellCount = (Math.random() * 10 ** 12 - Math.random() * 10 ** 12).toPrecision(3);
if (brainCellCount <= 0) {
  setInterval(() => {
    brainCount--;
    brainCellCount = (Math.abs(brainCellCount) ** 1.01) * -1;
    iq = (Math.abs(brainCellCount) ** 0.09) * -1;
    document.getElementById("braincells").innerHTML = brainCellCount.toPrecision(3);
    document.getElementById("iq").innerHTML = iq.toPrecision(3);
  }, 50);
} else {
  setInterval(() => {
    brainCellCount **= 1.01;
    iq = brainCellCount ** 0.09;
    document.getElementById("braincells").innerHTML = brainCellCount.toPrecision(3);
    document.getElementById("iq").innerHTML = iq.toPrecision(3)
  }, 50);
}
