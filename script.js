// WARNING! might be faulty
brainCellCount = Math.random() * 10 ** 12 - Math.random() * 10 ** 12;
cellGrowth = 1;
upgrade1Cost = 1;
upgrade1mult = 1;
multForEachUpgrade = 1.1;
costScaling = 1.15;
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
  brainCellCount = 1;
  // this happens every 25 ms
  setInterval(() => {
    brainCellCount += cellGrowth;
    iq = brainCellCount ** 0.09 * previousIq;
    document.getElementById("braincells").innerHTML = brainCellCount.toPrecision(3);
    document.getElementById("iq").innerHTML = iq.toPrecision(3);
    if (brainCellCount - upgrade1Cost >= 0) {
      brainCellCount -= upgrade1Cost;
      cellGrowth *= multForEachUpgrade;
      upgrade1mult *= multForEachUpgrade;
      upgrade1Cost *= costScaling;
    }
    if (brainCellCount - upgrade2Cost >= 0) {
      iq /= previousIq;
      upgrade1mult /= previousIq;
      cellGrowth /= previousIq;
      previousIq = iq;
      brainCellCount -= upgrade2Cost;
      iq *= previousIq;
      upgrade1mult *= previousIq;
      cellGrowth *= previousIq;
      upgrade2Cost *= (10 ** 3 * previousIq);
    }
    document.getElementById("bcb").innerHTML = upgrade1mult.toPrecision(3);
    document.getElementById("iqb").innerHTML = previousIq.toPrecision(3);
  }, 1);
}
if (brainCellCount >= 9 ** 9) {
  if (Math.log(Math.log(brainCellCount)) % 1 == 0) {
    multForEachUpgrade += 0.05;
    costScaling += 0.05;
  }
}
/* this is the end for now
bye */
