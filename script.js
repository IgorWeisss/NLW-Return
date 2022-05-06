let nav = document.querySelectorAll('nav')[0]
let menu = document.querySelector('.menu')

onscroll = checkScroll

function checkScroll() {
  if (scrollY > 0) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
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