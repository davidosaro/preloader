import { 
  showElements,
  positionElement,
} from "./methods.js";

import {
  animatePercentage, 
  animateProgress,
} from "./animation.js"

// Elements declarations
const Elements = {
  percentage: document.querySelector('.percentage'),
  progress: document.querySelector('.progress'),
  positioner: document.querySelector('.positioner'),
  background: document.querySelector('.background'),
}

//loading in delay
const loadInDelay = 1000;
//loading out delay
const loadOutDelay = 500;

function showPreloader(modifications = {}) {
  const elements = modifications['show'];
  const position = modifications['position'] ?? 'center'
  const loadOutAnim = modifications['loadOut'] ?? 'fade'

  showElements(elements) //show elements
  positionElement(Elements.positioner, position) //position element

  //elements
  const animationSpeed = 10; //lower the number, higher the speed
  for ( let i of elements) {
    const element = Elements[i]
    if (!element) return;
    switch(i) {
      case 'percentage':
        animatePercentage(element, Elements.background, loadOutAnim, animationSpeed, loadOutDelay);
        break;
      case 'progress':
        animateProgress(element, Elements.background, loadOutAnim, animationSpeed, loadOutDelay);
        break;
    }
  }
}
// add color requirement funciton
export default function Preloader(options) {
  console.log("Preloader Started >>>>")
  setTimeout(()=> {
    showPreloader(options);
  }, loadInDelay)
}

// Preloader({
//   'show': ['percentage'],
//   'position': 'bottom-left',
//   'loadOut': 'fade'
// })

// showPreloader({
//   'show': [
//     'progress', 
//     'percentage',
//   ]
//    'position': 'bottom-left',
//    'loadOut': 'fade'
// });