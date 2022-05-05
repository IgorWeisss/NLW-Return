let nav = document.querySelectorAll('nav')[0]
let menu = document.querySelector('.menu')
let menuBtn = document.querySelector('#menuBtn')

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
  checkScroll()
}

function showMenu() {
  if(menu.classList.contains('menuHide')) {
    menu.classList.remove('menuHide')
    nav.classList.add('scroll')
  } else {
    hideMenu()
  }
}