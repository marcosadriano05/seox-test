const buttonOrder = document.querySelectorAll('[data-open-order]')
const orders = document.querySelectorAll('[data-order]')
console.log(orders[0].dataset.order)

buttonOrder.forEach((button, index) => {
  button.addEventListener('click', e => {
    orders[index].classList.toggle('open')
  })
})