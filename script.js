let nav = document.querySelectorAll('nav')[0]

onscroll = ()=> {
  if (scrollY > 0) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
}