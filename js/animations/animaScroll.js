const animaScroll = () => {
  
  function select() {

    const section = document.querySelectorAll('.js-scroll')
    const hightDocument = document.body.clientHeight * 0.2;
   
    section.forEach((element) => {
      const hightElement = element.getBoundingClientRect().top
      if (hightElement < hightDocument) {
        element.classList.add('ativo')
      } else if (element.classList.contains('ativo')){
        element.classList.remove('ativo')
      }
    })
  }
  select()
  window.addEventListener('scroll', select)
}

export default animaScroll;