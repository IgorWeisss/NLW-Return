let nav = document.querySelectorAll('nav')[0]
let menu = document.querySelector('.menu')
let backToTop = document.querySelector('.backToTop')
let colorPicker = document.querySelector('#colorPicker')
let root = document.querySelector(':root')
let themeTag = document.querySelector('#themeTag')

onscroll = checkScroll

function checkScroll() {
  if (scrollY > 0) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }

  showBackToTopButton()
}

function showBackToTopButton() {
  if (scrollY > 200) {
    backToTop.classList.remove('hidden')
  } else {
    backToTop.classList.add('hidden')
  }
}

function hideMenu() {
  menu.classList.add('menuHide')
  nav.classList.remove('expanded')
  checkScroll()
  onscroll = checkScroll
}

function showMenu() {
    menu.classList.remove('menuHide')
    nav.classList.add('scroll', 'expanded')
    onscroll = ''
}

colorPicker.oninput = function () {
  root.style.setProperty('--hue', colorPicker.value)
  themeTag.style.content='var(--brand-green)'
}