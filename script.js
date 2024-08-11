// WARNING! might be faulty
brainCellCount = Math.random() * 10 ** 12 - Math.random() * 10 ** 12;
cellGrowth = 1;
upgrade1Cost = 1;
upgrade1mult = 1;
upgrade2Cost = 10 ** 6;
previousIq = 1;
if (brainCellCount < 0) {
  // this happens every 50 ms
  setInterval(() => {
    brainCellCount = (Math.abs(brainCellCount) ** 1.01) * -1;
    iq = (Math.abs(brainCellCount) ** 0.09).toPrecision(3) * -1;
    document.getElementById("braincells").innerHTML = brainCellCount.toPrecision(3);
    document.getElementById("iq").innerHTML = iq.toPrecision(3);
  }, 50);
} else {
  brainCellCount = 0;
  // this happens every 25 ms
  setInterval(() => {
    brainCellCount += cellGrowth;
    iq = brainCellCount ** 0.09 * previousIq;
    document.getElementById("braincells").innerHTML = brainCellCount.toPrecision(3);
    document.getElementById("iq").innerHTML = iq.toPrecision(3);
    if (brainCellCount - upgrade1Cost >= 0) {
      brainCellCount -= upgrade1Cost;
      cellGrowth *= 1.1;
      upgrade1mult *= 1.1;
      upgrade1Cost *= 1.15;
    }
    if (brainCellCount - upgrade2Cost >= 0) {
      previousIq = iq;
      brainCellCount -= upgrade2Cost;
      iq *= previousIq;
      upgrade1mult *= previousIq;
      cellGrowth *= previousIq;
      upgrade2Cost *= 10 ** 3;
    }
    if (brainCellCount >= 10 ** 10) {
      cellGrowth *= iq;
      upgrade1mult *= iq;
    }
    document.getElementById("bcb").innerHTML = upgrade1mult.toPrecision(3);
    document.getElementById("iqb").innerHTML = previousIq.toPrecision(3);
  }, 1);
}
/* this is the end for now
bye */
