const modalWindow = document.querySelector('#modalWrapper')
const tryButton = document.querySelector('#tryButton')
const closeBtn = document.querySelector('#closeBtn')

tryButton.addEventListener('click', () => {
  modalWindow.style.display = 'flex'
})

closeBtn.addEventListener('click', () => {
  modalWindow.style.display = 'none'
})

modalWindow.addEventListener('click', (e) => {
  if (e.target === modalWindow) {
    modalWindow.style.display = 'none'
  }
})