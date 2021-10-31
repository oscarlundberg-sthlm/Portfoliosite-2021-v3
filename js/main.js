// const coverUpWrapper = document.querySelector('.coverupWrapper');
const coverUpTopLeft = document.querySelector('.coverUpTopLeft');
const coverUpTopRight = document.querySelector('.coverUpTopRight');
const coverUpBottomRight = document.querySelector('.coverUpBottomRight');
const coverUpBottomLeft = document.querySelector('.coverUpBottomLeft');
const textContentWrapper = document.querySelector('.textContentWrapper');

const flyingObjectsDiv = document.querySelector('.flyingObjects');

let addClass = true;
let flyingObjId = 0;
let startIntervals = true;
let inter;
let reverseIt = true;

window.addEventListener('scroll', e => {
  let scrollTop = e.target.scrollingElement.scrollTop;
  
  if (scrollTop > 100) {
    if (addClass) {
      coverUpTopLeft.classList.add('moveUpLeft');
      coverUpTopRight.classList.add('moveUpRight');
      coverUpBottomRight.classList.add('moveDownRight');
      coverUpBottomLeft.classList.add('moveDownLeft');
      textContentWrapper.classList.add('moveForward');

      addClass = false;
    }

    if (startIntervals) {
      inter = setInterval(() => {
        makeFlyingObject(flyingObjId);
        flyingObjId++;
      }, 200);
      startIntervals = false;
    }

    reverseIt = true;
  } else 
  if (scrollTop < 100) {
    if (!addClass) {
      coverUpTopLeft.classList.remove('moveUpLeft');
      coverUpTopRight.classList.remove('moveUpRight');
      coverUpBottomRight.classList.remove('moveDownRight');
      coverUpBottomLeft.classList.remove('moveDownLeft');
      textContentWrapper.classList.remove('moveForward');

      addClass = true;
    }

    if (reverseIt) {
      document.querySelectorAll('.imFlying').forEach(v => {
        v.style.animation = "flyFlyAway 1s ease-out reverse";
      });
      reverseIt = false;
    }
    
    clearInterval(inter);
    startIntervals = true;
  }
})

function makeFlyingObject(id) {
  let flyingObj = document.createElement('div');
  flyingObj.id = 'flyingObj_' + id;
  flyingObj.classList.add('imFlying');
  flyingObj.classList.add('timeToFly');
  flyingObj.style.top = Math.round((Math.random() * 40) + 30) + '%';
  flyingObj.style.left = Math.round((Math.random() * 40) + 30) + '%';
  flyingObjectsDiv.insertAdjacentElement('afterbegin', flyingObj);
  setTimeout(() => {
    flyingObj = document.querySelector(`#flyingObj_${id}`);
    flyingObj.remove();
  }, 10000);
}

// const fullScreenWrapper = document.querySelector('#fullScreenWrapper');
// const halfHeight = window.innerHeight / 2;
// const halfWidth = window.innerWidth / 2;

// window.addEventListener('mousemove', e => {
//   mouseXReset = (e.clientX - halfWidth) / 10;
//   mouseYReset = (e.clientY - halfHeight) / 10;
//   fullScreenWrapper.style.perspectiveOrigin = `${halfWidth + mouseXReset}px ${halfHeight + mouseYReset}px`;
// })