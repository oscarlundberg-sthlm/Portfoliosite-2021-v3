const metas = document.getElementsByTagName('meta');

const startScreen = document.querySelector('.startScreen');
const startGameBtn = document.querySelector('.startGameBtn');

const objectiveDiv = document.querySelector('.objective');
const gatheredIntelDiv = document.querySelector('.gatheredIntel');

let addClass = true;
let flyingObjId = 0;
let startIntervals = true;
let reverseIt = true;
let inter;
const ufoArr = ['flyingOscar', 'flyingFlag', 'flyingEmail', 'flyingName', 'flyingSkillset'];
let ufoNumber = 0;

startGameBtn.addEventListener('click', e => {
  e.preventDefault();

  inter = setInterval(() => {
    makeFlyingObject(flyingObjId, ufoNumber);
    flyingObjId++;
    ufoNumber = ufoNumber === ufoArr.length - 1 ? 0 : ufoNumber + 1;
  }, 200);

  startScreen.remove();

  metas["theme-color"].content =
  metas["msapplication-navbutton-color"].content =
  metas["apple-mobile-web-app-status-bar-style"].content = '#000000';

  objectiveDiv.style.animation = 'slideDownObjective 1s forwards';
  gatheredIntelDiv.style.animation = 'slideUpIntel 1s forwards 1.3s';
})

const flyingObjectsDiv = document.querySelector('.flyingObjects');



function makeFlyingObject(id, ufoNb) {
  let flyingObj = document.createElement('div');
  flyingObj.id = 'flyingObj_' + id;
  flyingObj.classList.add(ufoArr[ufoNb]);
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

let checkMarkUrl = 'url(../img/checkmark.svg)';
flyingObjectsDiv.addEventListener('click', e => {
  switch (e.target.classList[0]) {
    case 'flyingOscar':
      let picture = document.querySelector('.intelProfilePic');
      setTimeout(() => {
        picture.style.filter = 'brightness(1)';
        picture.style.setProperty('--checkmarkUrl', checkMarkUrl);
      }, 1000)
      e.target.style.filter = 'opacity(0)';

      makeBig(e.target.classList[0]);
      break;
  
    case 'flyingFlag':
      let from = document.querySelector('#intelFrom');
      setTimeout(() => {
        from.innerText = 'swe 🇸🇪';
        from.style.setProperty('--checkmarkUrl', checkMarkUrl);
      }, 1000)
      e.target.style.filter = 'opacity(0)';

      makeBig(e.target.classList[0]);
      break;
      
      case 'flyingEmail':
      let email = document.querySelector('#intelEmail');
      setTimeout(() => {
        email.innerText = 'oscarlundberg@hotmail.com';
        email.style.setProperty('--checkmarkUrl', checkMarkUrl);
      }, 1000)
      e.target.style.filter = 'opacity(0)';

      makeBig(e.target.classList[0]);
      break;

      case 'flyingName':
      let name = document.querySelector('#intelName');
      setTimeout(() => {
        name.innerText = 'oscar lundberg';
        name.style.setProperty('--checkmarkUrl', checkMarkUrl);
      }, 1000)
      e.target.style.filter = 'opacity(0)';

      makeBig(e.target.classList[0]);
      break;

      case 'flyingSkillset':
      let skillset = document.querySelector('#intelSkillset');
      setTimeout(() => {
        skillset.innerText = 'frontend developer';
        skillset.style.setProperty('--checkmarkUrl', checkMarkUrl);
      }, 1000)
      e.target.style.filter = 'opacity(0)';

      makeBig(e.target.classList[0]);
      break;
    default:
      break;
  }
});

function makeBig(bgImageClass) {
  let scoreBigDiv = document.createElement('div');
  scoreBigDiv.classList.add(bgImageClass);
  scoreBigDiv.classList.add('imFlying');
  scoreBigDiv.style.width = '20vw';
  scoreBigDiv.style.height = '20vh';
  scoreBigDiv.style.opacity = 1;
  scoreBigDiv.style.top = '50vh';
  scoreBigDiv.style.left = '50vw';
  scoreBigDiv.style.transform = 'translate(-50%, -50%)';
  scoreBigDiv.classList.add('scoreBigAni');

  document.body.insertAdjacentElement('beforeend', scoreBigDiv);
  setTimeout(() => {
    scoreBigDiv.remove();
  }, 1000);
}








// const coverUpWrapper = document.querySelector('.coverupWrapper');
// const coverUpTopLeft = document.querySelector('.coverUpTopLeft');
// const coverUpTopRight = document.querySelector('.coverUpTopRight');
// const coverUpBottomRight = document.querySelector('.coverUpBottomRight');
// const coverUpBottomLeft = document.querySelector('.coverUpBottomLeft');
// const textContentWrapper = document.querySelector('.textContentWrapper');

// const haloCoverDiv = document.querySelector('.haloCover');



// const space3d = document.querySelector('#space3d');
// const halfHeight = window.innerHeight / 2;
// const halfWidth = window.innerWidth / 2;

// window.addEventListener('mousemove', e => {
//   mouseXReset = (e.clientX - halfWidth) / 10;
//   mouseYReset = (e.clientY - halfHeight) / 10;
//   space3d.style.perspectiveOrigin = `${halfWidth - mouseXReset}px ${halfHeight - mouseYReset}px`;
// })



// window.addEventListener('scroll', e => {
//   let scrollTop = e.target.scrollingElement.scrollTop;
  
//   if (scrollTop > 100) {
//     if (addClass) {
//       // coverUpTopLeft.classList.add('moveUpLeft');
//       // coverUpTopRight.classList.add('moveUpRight');
//       // coverUpBottomRight.classList.add('moveDownRight');
//       // coverUpBottomLeft.classList.add('moveDownLeft');
//       // textContentWrapper.classList.add('moveForward');
//       // haloCoverDiv.classList.add('bringOutTheHalo');

//       addClass = false;
//     }

//     if (startIntervals) {
//       inter = setInterval(() => {
//         makeFlyingObject(flyingObjId);
//         flyingObjId++;
//       }, 200);
//       startIntervals = false;
//     }

//     reverseIt = true;
//   } else 
//   if (scrollTop < 100) {
//     if (!addClass) {
//       // coverUpTopLeft.classList.remove('moveUpLeft');
//       // coverUpTopRight.classList.remove('moveUpRight');
//       // coverUpBottomRight.classList.remove('moveDownRight');
//       // coverUpBottomLeft.classList.remove('moveDownLeft');
//       // textContentWrapper.classList.remove('moveForward');
//       // haloCoverDiv.classList.remove('bringOutTheHalo');

//       addClass = true;
//     }

//     if (reverseIt) {
//       document.querySelectorAll('.imFlying').forEach(v => {
//         v.style.animation = "flyFlyAway 1s ease-out reverse";
//       });
//       reverseIt = false;
//     }
    
//     clearInterval(inter);
//     startIntervals = true;
//   }
// })