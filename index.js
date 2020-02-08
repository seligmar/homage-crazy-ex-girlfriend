const coin = document.querySelector('#coin')
coin.onClick( () => flip())

function flip = () => {
  var flipResult = Math.random()
}

jQuery(document).ready(function ($) {
  $('#coin').on('click', function () {
   
    $('#coin').removeClass()
    setTimeout(function () {
      if (flipResult <= 0.5) {
        $('#coin').addClass('heads')
        console.log('it is head')
      } else {
        $('#coin').addClass('tails')
        console.log('it is tails')
      }
    }, 100)
  })
})
