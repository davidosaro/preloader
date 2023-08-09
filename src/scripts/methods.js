export function showElements(elementsArray){
  if (!elementsArray) return;

  //show every element in the array
  for (let i of elementsArray) {
    const el = document.querySelector(`.show-${i}`);
    el.style.display = 'block'; //prev display is none
  }
}

export const animatePercentage = (el, speed) => animateElement(el, 'text', 1, 100, speed)
export const animateProgress = (el, speed) => animateElement(el, 'width', 4, 400, speed)


// Add Here >> if adding a new element with a new property type  >>
function animateProperty(element, type, value) {
  switch (type) {
    case "text": 
      element.textContent = value;
      break;
    case "width": 
      element.style.width = value + 'px';
      break;
    default:
      element.textContent = value;
      break;
  }
}
// <<<<

function animateElement(element, type, increment, total, animationSpeed){
  //type indicates either text, width etc
  if (!element) return;
  // >>>>>
  var value = 0;
  const totalValue = total;
  const loading = setInterval(animation, animationSpeed);

  //animation
  function animation() {
    if (value >= totalValue) return clearInterval(loading);
    // >>>>>
    value = value + increment;
    animateProperty(element, type, value);
  }
}