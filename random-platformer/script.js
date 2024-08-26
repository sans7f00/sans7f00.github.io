// variables setup
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
let canvas.width = window.innerWidth;
let canvas.height = window.innerHeight;
player = new Player();

ctx.fillStyle('#404040');
ctx.fillRect(0, 0, canvas.width, canvas.height);
window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

class Player {
  constructor() {
    // nothing here.
  }
}
