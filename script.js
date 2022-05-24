let nav = document.querySelectorAll('nav')[0]
let menu = document.querySelector('.menu')
let backToTop = document.querySelector('.backToTop')
let colorPicker = document.querySelector('#colorPicker')
let root = document.querySelector(':root')
let themeTag = document.querySelector('#themeTag')
let hueButton = document.querySelector('.hueButton')
let slideContainer = document.querySelector('.slidecontainer')

let sectionsScrollValues = [
  0,
  1525.8182373046875,
  2922.9091796875,
  4505.45458984375,
]

let sections = [
  'Início',
  'Serviços',
  'Sobre',
  'Contato'
]

onload = () => {
  let brandColor = getMainColor()
  themeTag.setAttribute('content', brandColor)
  addHoverClassToLinks(sectionsScrollValues, sections)
}

onscroll = handleScroll

function handleScroll() {
  addScrollClassOnNav()
  showBackToTopButton()
  addHoverClassToLinks(sectionsScrollValues, sections)
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

function addHoverClassToLinks(scrollValues, sections) {
  scrollValues.forEach(value => {
    let i = scrollValues.indexOf(value)
    let nextValue

    if (i==scrollValues.length - 1) {
      nextValue = 99999999
    } else {
      nextValue = scrollValues[i+1]
    }

    if (scrollY >= value && scrollY < nextValue) {
      document.querySelector(`#a${sections[i]}`).classList.add('hover')
    } else {
      document.querySelector(`#a${sections[i]}`).classList.remove('hover')
    }
  });
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