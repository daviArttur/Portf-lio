const typing = () => {

  function init() {
    const strings = document.querySelectorAll('.technology__containerTechnology p')
  
    strings.forEach((value) => {
      const string = value.innerText.split('')
      const total = string.length;
      value.innerText = ''

      let start = 0
      const timer = setInterval(() => {
        start++
        value.innerText += string[start - 1]
        if(start >= total) {
          value.classList.add('end')
          clearInterval(timer)
        }
      }, 350)
    })
  }
  
 function handleMutation(mutation) {
  console.log(mutation)
  if (mutation[0].target.classList.contains('ativo')) {
    observer.disconnect()
    init();
  }
}

const obeserveTarget = document.querySelector('.technology__container')
const observer = new MutationObserver(handleMutation)
observer.observe(obeserveTarget, {attributes: true});
}



export default typing