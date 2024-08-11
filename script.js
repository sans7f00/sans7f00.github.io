// WARNING! might be faulty
brainCellCount = (Math.random() * 10 ** 12 - Math.random() * 10 ** 12).toPrecision(3);
if (brainCellCount < 0) {
  // this happens every 50 ms
  setInterval(() => {
    brainCellCount = (Math.abs(brainCellCount) ** 1.01) * -1;
    iq = (Math.abs(brainCellCount) ** 0.09).toPrecision(3) * -1;
    document.getElementById("braincells").innerHTML = brainCellCount.toPrecision(3);
    document.getElementById("iq").innerHTML = iq.toPrecision(3);
  }, 50);
} else {
  /* this happens every 25 seconds, but the brain cell growth is linear compared to exponential when brainCellCount is negative
  so you would have not much brain cells */
  setInterval(() => {
    brainCellCount++;
    iq = (brainCellCount ** 0.09).toPrecision(3);
    document.getElementById("braincells").innerHTML = brainCellCount.toPrecision(3);
    document.getElementById("iq").innerHTML = iq.toPrecision(3);
  }, 25);
}
