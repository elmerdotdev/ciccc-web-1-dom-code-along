const logo = document.querySelector('.logo')
const title = document.querySelector('.title')
const intro = document.querySelector('.intro')
const container = document.querySelector('.container')
const toggleBtn = document.querySelector('#btn-mode')
const sections = document.querySelectorAll('section')
const btnPlay = document.querySelector('.btn-play')
const introParagraph = document.querySelector('.intro__paragraph')
const menuItems = document.querySelectorAll('menu > li')
const modalLink = document.querySelector('#modal-link')
const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modal-content')
const modalCloseBtn = document.querySelector('.modal-close')
const emailInput = document.querySelector('#emailInput')
const fullnameInput = document.querySelector('#fullnameInput')
const form = document.querySelector('.form')
const btnAdd = document.querySelector('.btn-add')

form.addEventListener('submit', (event) => {
  event.preventDefault() // disable form redirect
  console.log(fullnameInput.value)
  console.log(emailInput.value)
  form.reset()
})

sections.forEach(section => {
  section.classList.add('im-a-section')
})

toggleBtn.addEventListener('click', () => {
  console.log('Button clicked!')
  container.classList.toggle('dark')
})

btnPlay.addEventListener('click', () => {
  const headings = document.querySelectorAll('h2') // selects all h2 elements
  headings.forEach(heading => {
    const span = heading.querySelector('span')
    if (span) {
      heading.querySelector('span').classList.add('spin')
    }
  })
})

modalLink.addEventListener('click', () => {
  modal.classList.add('is-visible')
  setTimeout(() => {
    modalContent.classList.add('content-visible')
  }, 500)
})

modalCloseBtn.addEventListener('click', (e) => {
  e.stopPropagation()
  // modal.classList.remove('is-visible')
  // modalContent.classList.remove('content-visible')
  console.log('You clicked on the close button')
})



const newList = document.createElement('ul')
const li = document.createElement('li')
li.textContent = "List Item 1"
newList.append(li)
container.prepend(newList)


fullnameInput.addEventListener('keyup', (e) => {
  console.log(e.key)
  if (e.key === "a") {
    alert('You pressed a!')
  } else if (e.key === "Enter") {
    alert('You pressed Enter!')
  }
})

title.addEventListener('dblclick', (e) => {
  form.style.display = 'none'
})

function add(a, b) {
  const sum = Number(a) + Number(b)
  return sum
}

btnAdd.addEventListener('click', (e) => {
  console.log(e.target)
  const num1 = document.querySelector('#num1')
  const num2 = document.querySelector('#num2')
  const result = add(num1.value, num2.value)
  document.querySelector('.result').textContent = result
  num1.value = "" // reset num1 value
  num2.value = "" // reset num2 value
})

document.querySelector('.contact h2').addEventListener('mouseover', () => {
  document.querySelector('.contact').style.backgroundColor = 'yellow'
})

document.querySelector('.contact h2').addEventListener('mouseout', () => {
  document.querySelector('.contact').style.backgroundColor = 'transparent'
})

modalContent.addEventListener('click', () => {
  console.log('hey')
})