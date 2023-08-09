import { 
  showElements, 
  animatePercentage, 
  animateProgress
} from "./methods.js";

// Elements declarations
const Elements = {
  percentage: document.querySelector('.percentage'),
  progress: document.querySelector('.progress'),
}

function showPreloader(modifications = {}) {
  const elements = modifications['show'];
  showElements(elements) //show elements
  //elements
  const animationSpeed = 10;
  for ( let i of elements) {
    const element = Elements[i]
    if (!element) return;
    switch(i) {
      case 'percentage':
        animatePercentage(element, animationSpeed)
      case 'progress':
        animateProgress(element, animationSpeed)
    }
  }
}

setTimeout(()=> {
  showPreloader({
    'show': ['percentage']
  });
}, 1000)


// showPreloader({
//   'show': [
//     'progress', 
//     'percentage'
//   ]
// });