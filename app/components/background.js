import bindAll from "lodash/function/bindall";
import {View} from "backbone";

function Rect(x, y, w, h, color, angle, radius, angularSpeed) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.color = color;
  this.angle = angle;
  this.radius = radius;
  this.angularSpeed = angularSpeed;
}

let requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
     window.webkitRequestAnimationFrame ||
     window.mozRequestAnimationFrame ||
     function(callback) {
        window.setTimeout(callback, 1000 / 60);
     };
})();

let BackgroundView = View.extend({
  el: document.getElementById('bg'),

  initialize: function(options){
    if( !options.app ){
      throw new Error('requires app instance');
    }
    this.app = options.app;

    bindAll(this, 'scene', 'nextTick');

    this.canvas = this.el;
    this.ctx = this.canvas.getContext('2d');

    this.setDimensions();
    this.setDefaultValues();

    this.cells = [];
    this.buildCells();

    this.particles = [];
    this.buildParticles();

    this.scene();

    this.tick = 0;
    this.previousTick = 0;
    this.nextTick();

    window.addEventListener('resize', () => {
      this.setDimensions();
      this.cells = [];
      this.buildCells();
    });

  },

  buildCells() {
    let w = this.CELL_SIZE;
    let h = this.CELL_SIZE;

    let width = this.width / w;
    let height = this.height / h;

    for(let i = 0; i < width; i++ ){
      for(let j = 0; j < height; j++ ){
        let color = this.getColorForCell(i, j);
        let x = i * w;
        let y = j * h;

        this.cells.push(
          new Rect(x, y, w, h, color, 0, 0, 0)
        );
      }
    }
  },

  buildParticles() {
    let x = this.width / 2;
    let y = this.height / 2;

    for(var i = 0; i < this.PARTICLE_COUNT; i++) {
      let w = Math.random() * 60;
      let h = w;

      let r = Math.random() * 255;
      let g = Math.random() * 255;
      let b = 255;

      let color = `rgba(${~~r},${~~g},${~~b},0.8)`;
      let angle = Math.random() * 2 * Math.PI;
      let radius = Math.random() * (this.width + this.height) / 3 + 20;
      let angularSpeed = 0.2 * Math.random() *  Math.PI / radius;

      this.particles.push(
        new Rect(x, y, w, h, color, angle, radius, angularSpeed)
      );
    }
  },

  getColorForCell(x, y, randomize=true) {
    let colorOffset = randomize ? Math.random() * this.OFFSET: 0;

    let red = (this.X_COLOR_VELOCITY * x) + colorOffset;
    let green = (this.Y_COLOR_VELOCITY * y) - colorOffset;
    let blue = Math.abs(this.X_COLOR_VELOCITY * this.Y_COLOR_VELOCITY - colorOffset);
    return `rgb(${~~red}, ${~~green}, ${~~blue})`;
  },

  setDefaultValues: function(){
    this.PARTICLE_COUNT = 666;
    this.SPEED = 1200;
    this.X_COLOR = 255;
    this.Y_COLOR = 255;
    this.OFFSET = 10;
    this.CELL_SIZE = 60
    this.X_COLOR_VELOCITY = this.X_COLOR / (this.width / this.CELL_SIZE);
    this.Y_COLOR_VELOCITY = this.Y_COLOR / (this.height / this.CELL_SIZE);
  },

  nextTick() {
    this.tick += 1;
    setTimeout(this.nextTick, this.SPEED);
  },

  scene: function(){
    this.animateBackground();
    requestAnimFrame(this.scene);
  },

  setDimensions: function(){
    this.height = window.outerHeight;
    this.width = window.outerWidth;
    if( this.canvas ){
      this.canvas.height = this.height;
      this.canvas.width = this.width;
    }
  },

  setBg() {
    this.ctx.fillStyle = "rgb(20,25,30)";
    this.ctx.fillRect(0, 0, this.width, this.height);
  },

  animateBackground: function(){
    this.setBg();

    for (let i = 0; i < this.cells.length; i++) {
      let cell = this.cells[i];

      // Draw current position
      this.ctx.fillStyle = cell.color;
      this.ctx.fillRect(cell.x, cell.y, cell.w, cell.h);

      if (this.tick !== this.previousTick) {
        // Set next color variation
        cell.color = this.getColorForCell(cell.x / this.CELL_SIZE, cell.y / this.CELL_SIZE);
      }
    }

    if (this.tick !== this.previousTick) {
      this.previousTick = this.tick;
    }

    for(let i = 0; i < this.particles.length; i++) {
      let particle = this.particles[i];

      // Draw current position
      this.ctx.fillStyle = particle.color;
      this.ctx.fillRect(particle.x, particle.y, particle.w, particle.h)

      // Setup next position
      particle.x = this.width / 2 + Math.sin(particle.angle) * particle.radius;
      particle.y = this.height / 2 + Math.cos(particle.angle) * particle.radius;
      particle.angle += particle.angularSpeed;
      particle.color = this.getColorForCell(particle.x / this.CELL_SIZE, particle.y / this.CELL_SIZE, false)
    }
  }

});

export default BackgroundView;
