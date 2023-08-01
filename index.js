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
