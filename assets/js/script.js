let size = document.querySelectorAll('.select-labels')
size.forEach(btn => {
  btn.addEventListener('click', () => {
    size.forEach(btn => {
      btn.classList.remove('selected')
    })
    btn.classList.add('selected')
  })
})