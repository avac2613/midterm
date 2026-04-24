document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('nav a[data-page]')
  const sections = document.querySelectorAll('section')

  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault()

      const targetPage = this.getAttribute('data-page')

      navLinks.forEach((l) => l.classList.remove('active'))
      this.classList.add('active')

      sections.forEach((section) => {
        section.classList.remove('active')
        if (section.id === targetPage) {
          section.classList.add('active')
        }
      })

      document.querySelector(targetPage).scrollIntoView({
        behavior: 'smooth',
      })
    })
  })

  function handleResize() {
    const navUl = document.querySelector('nav ul')
    if (window.innerWidth < 768) {
      navUl.style.flexDirection = 'column'
    } else {
      navUl.style.flexDirection = 'row'
    }
  }
  window.addEventListener('resize', handleResize)
  handleResize()
})
