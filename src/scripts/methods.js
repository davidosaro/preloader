//show components
export function showElements(elementsArray){
  if (!elementsArray) return;

  //show every element in the array
  for (let i of elementsArray) {
    const el = document.querySelector(`.show-${i}`);
    el.style.display = 'block'; //prev display is none
  }
}
//position elements at top or bottom or center
export function positionElement(element, className) {
  if(!element) return;

  element.classList.add(className)
}

//background color method
//text color method
//font size method
