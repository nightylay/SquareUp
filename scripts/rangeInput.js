const range1 = document.querySelector('#tailmetr1')
const range2 = document.querySelector('#tailmetr2')

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#output1').textContent = formatValue(range1.value) + ' $'
  document.querySelector('#output2').textContent = formatValue(range2.value) + ' $'
})

function handleInputRange() {
  range1.addEventListener('input', handleInputRange1)
  range2.addEventListener('input', handleInputRange2)
}

function handleInputRange1(event) {
  const value2 = parseInt(event.target.parentNode.parentNode.style.getPropertyValue('--value-2'))
  const currentValue = parseInt(event.target.value)

  if (currentValue >= value2) {
    event.target.value = value2
  }

  if (event.target.value === '120 00') {
    event.target.style.zIndex = '100'
  } else {
    event.target.style.zIndex = '0'
  }

  event.target.parentNode.parentNode.style.setProperty(
    '--value-1',
    event.target.value
  )
  event.target.nextElementSibling.textContent = formatValue(event.target.value) + ' $'
}

function handleInputRange2(event) {
  const value1 = parseInt(event.target.parentNode.parentNode.style.getPropertyValue('--value-1'))
  const currentValue = parseInt(event.target.value)

  if (currentValue <= value1) {
    event.target.value = value1
  }

  if (event.target.value === '500') {
    event.target.style.zIndex = '100'
  } else {
    event.target.style.zIndex = '0'
  }

  event.target.parentNode.parentNode.style.setProperty(
    "--value-2",
    event.target.value
  )
  event.target.nextElementSibling.textContent = formatValue(event.target.value) + ' $'
}

function formatValue(value) {
  return parseInt(value).toLocaleString('ru-RU')
}

export { handleInputRange } 
