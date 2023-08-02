// navigation menu
const menuBtn = document.querySelector('.menu-btn i')
const navigation = document.querySelector('.navigation')

function mudarIcon() {
  menuBtn.classList.toggle('active')
  navigation.classList.toggle('active')

  if (menuBtn.classList.contains('active')) {
      menuBtn.classList.remove('ph-list')
      menuBtn.classList.add('ph-x')
    } else {
      menuBtn.classList.remove('ph-x')
      menuBtn.classList.add('ph-list')
    }
}

menuBtn.addEventListener('click', mudarIcon)

// javascript for video slider navigation
const btns = document.querySelectorAll('.nav-btn')
const slides = document.querySelectorAll('.video-slide')

var sliderNav = function(manual) {
  btns.forEach((btn) => {
    btn.classList.remove('active')
  })

  slides.forEach((slide) => {
    slide.classList.remove('active')
  })

  btns[manual].classList.add('active')
  slides[manual].classList.add('active')
}

btns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    sliderNav(i)
  })
})