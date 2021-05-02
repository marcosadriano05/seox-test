const orderButtons = document.querySelectorAll('[data-open-order]')
const orders = document.querySelectorAll('[data-order]')
const shippingButtons = document.querySelectorAll('[data-shipping]')

orderButtons.forEach((button, index) => {
  button.addEventListener('click', e => {
    orders[index].classList.toggle('open')
  })
})

shippingButtons.forEach((button, index) => {
  button.addEventListener('focus', e => {
    orders[index].classList.add('open')
  })
})