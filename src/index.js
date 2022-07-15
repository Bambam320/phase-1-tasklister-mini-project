const style = document.createElement('style')
document.head.appendChild(style)
style.textContent = ".buttonStyle {padding: 5px; font-size: 15px; margin: 5px;}"

const styleOne = document.createElement('style')
document.head.appendChild(styleOne)
styleOne.textContent = ".submission { letter-spacing: 2px; font-weight: bold; font-size: 18px}"

const colors = document.body
colors.style.background = 'linear-gradient(#23731c, #0bae34, #80471c, #4a3728)'

const myTodoColor = document.getElementById('list')
myTodoColor.style.backgroundColor = '#028a0f'

const form = document.querySelector('form')
document.addEventListener("DOMContentLoaded", (e) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    //console.log(e)
    const firstId = document.getElementById('new-task-description')
    toDoSubmission(firstId.value)

    form.reset()
  })
});

function toDoSubmission(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  p.textContent = `${todo} ---`
  p.setAttribute('id', todo)
  p.style.backgroundColor = document.getElementById('todo')
  p.className = 'submission'
  btn.textContent = 'X'
  p.append(btn)
  btn.className = 'buttonStyle'
  btn.addEventListener('click', performDelete)
  const tasks = document.getElementById('tasks')
  tasks.appendChild(p)
  tasks.className = 'buttonStyle'
}

//form.addEventListener('mouseleave', () => form.reset())

function performDelete(e){
  if (e.composedPath()[1].textContent === e.composedPath()[1].id + ' ---X') {
  e.composedPath()[1].remove() }
  else {console.log('hahahah you suck')}
}

const optionList = document.createElement('select')
const option1 = document.createElement('option')
option1.value = 'High Priority'
option1.textContent = 'High Priority'
option1.style.backgroundColor = '#f60c0c'
const option2 = document.createElement('option')
option2.value = 'Normal Priority'
option2.textContent = 'Normal Priority'
option2.style.backgroundColor = '#eff60c'
const option3 = document.createElement('option')
option3.value = 'Low Priority'
option3.textContent = 'Low Priority'
option3.style.backgroundColor = '#44f60c'
const option4 = document.createElement('option')
option4.value = 'blank'
option4.textContent = '    '
form.append(optionList)
optionList.append(option4)
optionList.append(option3)
optionList.append(option2)
optionList.append(option1)
