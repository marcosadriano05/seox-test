const buttonOrder = document.querySelectorAll('[data-open-order]')
const orders = document.querySelectorAll('[data-order]')


buttonOrder.forEach((button, index) => {
  button.addEventListener('click', e => {
    orders[index].classList.toggle('open')
    console.log(orders[index].dataset.order)
  })
})