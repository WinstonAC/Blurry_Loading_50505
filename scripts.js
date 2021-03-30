// Goal: We want the precentage change to go from 0-100
// Goal: We want the image to blur as the numebr on the screen increases

const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;
let int = setInterval(blurring, 30);

// the funciton below is incrementing the value by 1
//  we want it to load every 30s goign from 0 -100 so we need to create a loop - If statement
// added interperlation to show the precentage chagne.
// we want the code to start opaque and fade as the code continues. we need to map a range of numbers to another range of numbers (loadtext)
// reference https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  // note the (1,0) is the opacity runing from visible to invisible
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  console.log(load);
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
