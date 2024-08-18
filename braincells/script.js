// WARNING! might be faulty
function setup() {
  brainCellCount = Math.random() * 10 ** 12 - Math.random() * 10 ** 12;
  cellGrowth = 1;
  upgrade1Cost = 1;
  upgrade1mult = 1;
  multForEachUpgrade = 1.07;
  costScaling = 1.08;
  upgrade2Cost = 10 ** 6;
  previousIq = 1;
  document.getElementById("braincells").innerHTML = brainCellCount.toPrecision(3);
  document.getElementById("iq").innerHTML = iq.toPrecision(3);
  document.getElementById("notbc").innerHTML = brainCellCount.toPrecision(3) + " brain cells";
}
if (brainCellCount < 0) {
  // reset button
  const resetButton = document.createElement('button');
  resetButton.innerText = 'Reset';
  // only executes if brainCellCount = '-Infinity
  if (brainCellCount <= 2 ** 1024 * -1) {
    // Event listener that activates when button is clicked
    button.addEventListener('click', () => {
      reset0();
      alert('Your brain cell count has been reset.')
    })
  }
  // this happens every 50 ms
  setInterval(() => {
    brainCellCount = (Math.abs(brainCellCount) ** 1.0055) * -1;
    iq = (Math.abs(brainCellCount) ** 0.09).toPrecision(3) * -1;
    document.getElementById("braincells").innerHTML = brainCellCount.toPrecision(3);
    document.getElementById("iq").innerHTML = iq.toPrecision(3);
    document.getElementById("notbc").innerHTML = brainCellCount.toPrecision(3) + " brain cells";
    document.getElementById("bcb").innerHTML = '-1';
    document.getElementById("iqb").innerHTML = '-1';
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
    document.getElementById("notbc").innerHTML = brainCellCount.toPrecision(3) + " brain cells";
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
      reset1();
    }
    document.getElementById("bcb").innerHTML = upgrade1mult.toPrecision(3);
    document.getElementById("iqb").innerHTML = previousIq.toPrecision(3);
  }, 1);
}

// reset function for brainCellCount = negative 'Infinity'
function reset0() {
  setup();
}

// reset function for brainCellCount = positive 'Infinity'
function reset1() {
  brainCellCount = Math.abs(Math.random() * 10 ** 12 - Math.random() * 10 ** 12);
  cellGrowth *= 5;
  upgrade1Cost **= 0.99;
  upgrade1mult **= 5;
  upgrade2Cost **= 0.99;
  previousIq **= 5;
}
/* this is the end for now
bye ...*/
