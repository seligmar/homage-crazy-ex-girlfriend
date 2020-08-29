const coin = document.querySelector('#coin')
const modal_button = document.querySelector('#modal_button')
const span = document.getElementsByClassName('close')[0]
const modalImg = document.getElementById('img01')
const captionText = document.querySelector('#caption')
const img = document.getElementById('myImg')
const modal = document.getElementById('myModal')

// coin.addEventListener('click', e => flip(e))
modal_button.addEventListener('click', e => modalImage(e))
span.addEventListener('click', e => closeSpan(e))

var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
}

// the 'official' Konami Code sequence
var konamiCode = [
  'up',
  'up',
  'down',
  'down',
  'left',
  'right',
  'left',
  'right',
  'b',
  'a'
]

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0

// add keydown event listener
document.addEventListener('keydown', function (e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode]
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition]

  // compare the key with the required key
  if (key === requiredKey) {
    // move to the next key in the konami code sequence
    konamiCodePosition++

    // if the last key is reached, activate cheats
    if (konamiCodePosition === konamiCode.length) {
      activateCheats()
      konamiCodePosition = 0
    }
  } else {
    konamiCodePosition = 0
  }
})

function activateCheats () {
  var riddler = window.open(
    'https://media2.giphy.com/media/3ohs4eyRQyQ7TYu9lm/giphy.gif'
    //'https://1.bp.blogspot.com/-umQrN2eEM-I/XIO2YtqqfsI/AAAAAAAAA-s/Xl3Vt12ZjwER5q0LVarRV4m7Hzzh2IOpQCLcBGAs/s640/Mughal-e-Azim%2Bfor%2Bkonami.gif'
  )
}
// const flip = e => {
//   e.preventDefault()
//   if (e.target.classList.value === 'side-a') {
//     coin.innerHTML = `
//       <img
//       class="side-b"
//       src="https://i.pinimg.com/originals/38/2c/55/382c55d97cdef0b260d7412a401df1a7.gif"
//     />`
//   } else {
//     coin.innerHTML = `
//     <img
//     class="side-a"
//     src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1539290857/181012-fallon-crazy-ex-girlfriend-rachel-bloom-hero_sj988h"
//     />`
//   }
// }

const modalImage = e => {
  e.preventDefault()
  modal.style.display = 'block'
  modalImg.src =
    'https://i.pinimg.com/originals/38/2c/55/382c55d97cdef0b260d7412a401df1a7.gif'
  // captionText.innerText = '100% would hit that'
}

const closeSpan = e => {
  e.preventDefault()
  modal.style.display = 'none'
}
