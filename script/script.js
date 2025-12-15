const navBar = document.querySelector('.nav-bar ul')
const toggleBar = document.querySelector('.hum__bar')

toggleBar.addEventListener('click', () => {
    navBar.classList.toggle('active')
})

document.querySelector('.for__my-project').addEventListener('click', () => {
    document.querySelector('#projects').scrollIntoView({ behavior : "smooth" } )
})

document.addEventListener('click', e => {
    if (e.target.matches('img')) {
        localStorage.setItem('imageView', e.target.src)

        window.location.href = 'image.html'
    }
})

 let form = document.querySelector('form')

  form.addEventListener('submit', async () => {
      let res = await fetch("https://formspree.io/f/xzzklkez", {
        method: "POST",
        body: new FormData(form),
        headers: {"Accept": "application/json"}
    })
     document.querySelector('textarea').value = res.ok ? "Sent!" : "Error";
  })

  // to get code click here
document.querySelector('.code_sign').addEventListener('click',function () {
      let code = document.querySelector('.code_here')
      code.classList.toggle('showhere')
    //   document.querySelector('.code_sign').innerHTML = '➡️'
})