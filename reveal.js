let delay = {
  opacity: '0',
  distance: '20%',
  origin: 'left',
  delay: 300,
  reset: true
}

let left = {
  opacity: '0',
  distance: '20%',
  origin: 'left',
  reset: true
}

ScrollReveal().reveal(`
.hero h1,
.hero button,
.numbers,
.numbers h3,
.serviços h2,
.sobre h2,
.sobre .photo,
.contato button,
.contato .photo
`, left)

ScrollReveal().reveal(`
.numbers h5,
.card,
address
`, delay)