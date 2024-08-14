// WARNING! might be faulty
brainCellCount = Math.random() * 10 ** 12 - Math.random() * 10 ** 12;
cellGrowth = 1;
upgrade1Cost = 1;
upgrade1mult = 1;
multForEachUpgrade = 1.07;
costScaling = 1.08;
upgrade2Cost = 10 ** 6;
previousIq = 1;
prestigeExpBoost = 1;
if (brainCellCount < 0) {
  // this happens every 50 ms
  setInterval(() => {
    brainCellCount = (Math.abs(brainCellCount) ** 1.0055) * -1;
    iq = (Math.abs(brainCellCount) ** 0.09).toPrecision(3) * -1;
    document.getElementById("braincells").innerHTML = brainCellCount.toPrecision(3);
    document.getElementById("iq").innerHTML = iq.toPrecision(3);
    document.getElementById("notbc").innerHTML = brainCellCount.toPrecision(3) + " brain cells";
  }, 50);
} else {
  brainCellCount = 1;
  // this happens every 25 ms
  setInterval(() => {
    if (brainCellCount < 10 ** 10) {
      brainCellCount += cellGrowth;
    } else if (iq < 9 ** 9) {
      brainCellCount += cellGrowth * iq;
    } else {
      brainCellCount += cellGrowth * 9 ** 9;
    }
    iq = brainCellCount ** 0.09 * previousIq;
    document.getElementById("braincells").innerHTML = brainCellCount.toPrecision(3);
    document.getElementById("iq").innerHTML = iq.toPrecision(3);
    document.getElementById("notbc").innerHTML = brainCellCount.toPrecision(3);
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
    if (brainCellCount >= 2 ** 1024) {
      reset();
    }
    document.getElementById("bcb").innerHTML = upgrade1mult.toPrecision(3);
    document.getElementById("iqb").innerHTML = previousIq.toPrecision(3);
  }, 1);
}

function reset() {
  brainCellCount = Math.abs(Math.random() * 10 ** 12 - Math.random() * 10 ** 12);
  prestigeExpBoost++;
  cellGrowth *= 5;
  upgrade1Cost **= 0.99;
  upgrade1mult **= 5;
  // resets to default values before executing the next line of code because otherwise, you might end up with infinity in 0 seconds since I haven't added breakinfinity.js or anything like that
  multforEachUpgrade = 1.07;
  multForEachUpgrade **= prestigeExpBoost;
  costScsling = 1.08;
  costScaling **= prestigeExpBoost;
  upgrade2Cost **= 0.99;
  previousIq **= 5;
}
/* this is the end for now
bye ...*/
