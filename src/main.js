const headerMenu = document.querySelector('.header_menu')
const burgerButton = document.querySelector('.burger_menu')
const menuLinks = document.querySelectorAll('.header_menu a')

function closeMenu() {
  headerMenu?.classList.remove('is-open')
  burgerButton?.setAttribute('aria-expanded', 'false')
  burgerButton?.setAttribute('aria-label', 'Open menu')
}

burgerButton?.addEventListener('click', () => {
  const isOpen = headerMenu?.classList.toggle('is-open') ?? false

  burgerButton.setAttribute('aria-expanded', String(isOpen))
  burgerButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu')
})

menuLinks.forEach((link) => {
  link.addEventListener('click', closeMenu)
})

const modalOverlay = document.querySelector('.modal_overlay')
const openModalButton = document.querySelector('.header_button')
const closeModalButton = document.querySelector('.btn_close_modal')

function openModal() {
  modalOverlay?.classList.add('open_modal_overlay')
  document.body.classList.add('modal-open')
}

function closeModal() {
  modalOverlay?.classList.remove('open_modal_overlay')
  document.body.classList.remove('modal-open')
}

openModalButton?.addEventListener('click', openModal)
closeModalButton?.addEventListener('click', closeModal)

modalOverlay?.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeModal()
  }
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu()
    closeModal()
  }
})
