const coin = document.querySelector('#coin')
coin.addEventListener('click', () => flip())

const flip = () => {
  let flipResult = Math.random()
  coin.classList.remove('side-a')
  setTimeout(function () {
    if (flipResult <= 0.5) {
      coin.classList.add = 'heads'
    } else {
      coin.classList.add = 'tails'
    }
  }, 100)
}
