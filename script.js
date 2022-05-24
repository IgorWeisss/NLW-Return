let nav = document.querySelectorAll('nav')[0]
let menu = document.querySelector('.menu')
let backToTop = document.querySelector('.backToTop')
let colorPicker = document.querySelector('#colorPicker')
let root = document.querySelector(':root')
let themeTag = document.querySelector('#themeTag')
let hueButton = document.querySelector('.hueButton')
let slideContainer = document.querySelector('.slidecontainer')

onload = () => {
  let brandColor = getMainColor()
  themeTag.setAttribute('content', brandColor)
  handleScroll()
}

onscroll = handleScroll

function handleScroll() {
  addScrollClassOnNav()
  showBackToTopButton()

  let sections = document.querySelectorAll('section')

  for (let section of sections) {
    addHoverClassToLinks(section)
  }
}

function addScrollClassOnNav() {
  if (scrollY > 0) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
}

function showBackToTopButton() {
  if (scrollY > 200) {
    backToTop.classList.remove('hidden')
  } else {
    backToTop.classList.add('hidden')
  }
}

function addHoverClassToLinks(section) {

  const targetLine = scrollY + innerHeight / 2

  let sectionTop = section.offsetTop
  let sectionBottom = section.offsetHeight + sectionTop
  let sectionId = section.getAttribute('Id')

  if (targetLine > sectionTop && targetLine < sectionBottom) {
    document.querySelector(`#a${sectionId}`).classList.add('hover')
  } else {
    document.querySelector(`#a${sectionId}`).classList.remove('hover')
  }
}

function hideMenu() {
  hueButton.classList.remove('clicked')
  slideContainer.classList.add('hidden')
  adjustTransitions(false)
  menu.classList.add('menuHide')
  nav.classList.remove('expanded')
  handleScroll()
  onscroll = handleScroll
}

function showMenu() {
  menu.classList.remove('menuHide')
  nav.classList.add('scroll', 'expanded')
  onscroll = ''
}

function getMainColor() {
  let computedStyle = getComputedStyle(root)
  return computedStyle.getPropertyValue('--brand-green')
}

function showColorPicker() {
  if (hueButton.classList.contains('clicked')) {
    hueButton.classList.remove('clicked')
    slideContainer.classList.add('hidden')
    adjustTransitions(false)
  } else {
    hueButton.classList.add('clicked')
    slideContainer.classList.remove('hidden')
    adjustTransitions(true)
  }
}

function adjustTransitions(state) {
  if (state) {
    menu.classList.add('noTransition')
    nav.classList.add('noTransition')
  } else {
    menu.classList.remove('noTransition')
    nav.classList.remove('noTransition')
  }
}

colorPicker.oninput = function () {
  root.style.setProperty('--hue', colorPicker.value)
  let brandColor = getMainColor()
  themeTag.setAttribute('content', brandColor)
}
