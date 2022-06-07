const animaScroll = () => {
  
  function select() {

    const section = document.querySelectorAll('.js-scroll')
       
    section.forEach((element) => {
      const hightElement = element.getBoundingClientRect().top
      const hightDocument = window.innerHeight * 0.9
      if (hightElement < hightDocument) {
        element.classList.add('ativo')
      } else if (element.classList.contains('ativo')){
        element.classList.remove('ativo')
      }
    })
  }
  select()
  window.addEventListener('touch', select)
  window.addEventListener('scroll', select)
}

export default animaScroll;