
function Clock(canvasEle) {
  this.canvas = canvasEle
  this.ctx = canvasEle.getContext("2d");
  this.time = new Date();
}

Clock.prototype = {
  constructor: Clock,

  init: function() {
    this.initAxios();
    this.drawClock();
    this.startAnimation();
  },

  startAnimation: function() {
    var this_ = this;
    setInterval(function(){
      this_.clearScreen();
      this_.time = new Date();
      this_.drawClock();
    }, 1000)
  },

  drawClock: function() {
    this.drawTable();
    this.drawCenter();
    this.drawMH();
    this.drawNum();
    this.drawHourPointer();
    this.drawMinPointer();
    this.drawSecPointer();
  },

  clearScreen: function() {
    this.ctx.clearRect(-250, -250, 500, 500)
  },

  initAxios: function() {
    this.ctx.translate(152, 152)
  },

  drawTable: function() {
    this.ctx.beginPath();
    this.ctx.arc(0, 0, 150, 0, Math.PI * 2)
    this.ctx.fillStyle = "#eee"
    this.ctx.strokeStyle = "#333"
    this.ctx.lineWidth = 1;
    this.ctx.fill()
    this.ctx.stroke()
  },

  drawCenter: function() {
    this.ctx.beginPath();
    this.ctx.arc(0, 0, 10, 0, Math.PI * 2)
    this.ctx.fillStyle = "#f00"
    this.ctx.fill()
  },

  drawMH: function() {
    for(var i = 0; i < 60; i++) {
      // this.ctx.save();
      this.ctx.beginPath();
      this.ctx.rotate(Math.PI / 30);
      // this.ctx.rotate(Math.PI / 30 * i);
      this.ctx.moveTo(0, 150);
      if(i % 5 === 4){
        this.ctx.lineTo(0, 140);
        this.ctx.strokeStyle = "#f00"
        this.ctx.lineWidth = 3;
      }
      else{
        this.ctx.lineTo(0, 145);
        this.ctx.strokeStyle = "#000"
        this.ctx.lineWidth = 2;
      }
      this.ctx.stroke();
      // this.ctx.restore();
    }
  },

  drawNum: function() {
    for(var i = 1; i <= 12; i++) {
      var x = Math.sin(Math.PI / 6 * i) * 130;
      var y = - Math.cos(Math.PI / 6 * i) * 130;
      this.ctx.beginPath();
      this.ctx.font = "16px Arial"
      this.ctx.textAlign = "center"
      this.ctx.textBaseline = "middle"
      this.ctx.fillStyle = "#333"
      this.ctx.fillText(i, x, y)
    }
  },

  drawHourPointer: function() {
    var hours = (this.time.getHours() + this.time.getMinutes() / 60) % 12
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.rotate(hours * Math.PI / 6);
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(0, -80);
    this.ctx.stroke();
    this.ctx.restore();
  },

  drawMinPointer: function() {
    var minutes = this.time.getMinutes()
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.rotate(minutes * Math.PI / 30);
    this.ctx.moveTo(0, -10);
    this.ctx.lineTo(0, -100);
    this.ctx.strokeStyle = "#000"
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
    this.ctx.restore();
  },

  drawSecPointer: function() {
    var seconds = this.time.getSeconds()
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.rotate(seconds * Math.PI / 30);
    this.ctx.moveTo(0, -10);
    this.ctx.lineTo(0, -120);
    this.ctx.strokeStyle = "#000"
    this.ctx.lineWidth = 1;
    this.ctx.stroke();
    this.ctx.restore();
  }
}

export default Clock;