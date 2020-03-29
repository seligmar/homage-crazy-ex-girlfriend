const coin = document.querySelector('#coin')
const modal_button = document.querySelector('#modal_button')
const span = document.getElementsByClassName('close')[0]
const modalImg = document.getElementById('img01')
const captionText = document.querySelector('#caption')
const img = document.getElementById('myImg')
var modal = document.getElementById('myModal')

// coin.addEventListener('click', e => flip(e))
modal_button.addEventListener('click', e => modalImage(e))
span.addEventListener('click', e => closeSpan(e))

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
