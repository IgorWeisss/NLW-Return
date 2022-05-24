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
  addHoverClassToLinks()
}

onscroll = () => {
  addScrollClassOnNav()
  showBackToTopButton()
  addHoverClassToLinks()
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

function addHoverClassToLinks() {
  const sections = [
    'Início',
    'Serviços',
    'Sobre',
    'Contato'
  ]

  const sectionsOffsetValues = [
    Início.offsetTop,
    Serviços.offsetTop,
    Sobre.offsetTop,
    Contato.offsetTop
  ]

  const targetLine = scrollY + (innerHeight / 2)

  sectionsOffsetValues.forEach(section => {
    let i = sectionsOffsetValues.indexOf(section)
    let value
    let nextValue

    if (i<sectionsOffsetValues.length-1) {
      value = section
      nextValue = sectionsOffsetValues[i+1]
    } else {
      value = section
      nextValue = 9999999
    }

    let el = document.querySelector(`#a${sections[i]}`)

    if (targetLine > value && targetLine < nextValue) {
      el.classList.add('hover')
    } else {
      el.classList.remove('hover')
    }

  })
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