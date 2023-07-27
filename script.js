function load(modifications = {}) {
  //elements
  const percentElement = document.querySelector('.percentage');
  const progressElement = document.querySelector('.progress');

  //hide elements
  const hideParams = modifications['hide']; //Array
  if (hideParams) {
    for (i of hideParams) {
      hideElement(document.querySelector(`.${i}`))
    }
  }
  // hideElement(percent)

  //progress variables
  var percentage = 0;
  var progress = 0;
  const animationSpeed = 10

  //progress animation
  const loading = setInterval(animate, animationSpeed)
  
  //animation
  function animate() {
    if (percentage >= 100) clearInterval(loading);
    else {
      progress += 4; //percentage is added 4 since the width is 400
      percentage ++;
      if (progressElement) progressElement.style.width = progress + 'px';
      if (percentElement) percentElement.textContent = percentage + '%';
    }
  }
}

function hideElement(el, bool = true) {
  console.log(el)
  el.style.display = bool ? 'none' : ''
}

load({
  'hide': ['percentage']
});