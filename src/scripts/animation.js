
export const animatePercentage = (el, bgEl, bgAnim, speed, loadOutDelay) => animateElement(el, bgEl, bgAnim, 'text', 1, 100, speed, loadOutDelay)
export const animateProgress = (el, bgEl, bgAnim, speed, loadOutDelay) => animateElement(el, bgEl, bgAnim, 'width', 4, 400, speed, loadOutDelay)


// Add Here >> if adding a new element with a new property type  >>
function animateProperty(element, type, value) {
  switch (type) {
    case "text":
      element.textContent = value + '%';
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

//Add after Effects >>>>
function loadOutAnimation(element, type) {
  element.classList.add(`background-${type}`)
}
//<<<<<

function animateElement(element, backgroundElement, backgroundAnim, type, increment, total, animationSpeed, loadOutDelay){
  //type indicates either text, width etc
  if (!element) return;
  // >>>>>
  var value = 0;
  const totalValue = total;
  const loading = setInterval(animation, animationSpeed);

  //animation
  function animation() {
    if (value >= totalValue) {
      setTimeout(() => {
        loadOutAnimation(backgroundElement, backgroundAnim)
      }, loadOutDelay);
      clearInterval(loading);
      return
    }
    // >>>>>
    value = value + increment;
    animateProperty(element, type, value);
  }
}