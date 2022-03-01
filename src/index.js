document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form')
  const tasks = document.querySelector('#tasks')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleToDo(e.target.newTask.value);
  })
})
function removeToDo (e){
  e.target.parentNode.remove()
}

function handleToDo(todo){
  let list = document.createElement('li')
  let btn = document.createElement('button')
  btn.textContent = 'X'
  btn.addEventListener('click', removeToDo)
  list.textContent = `${todo} `
  tasks.append(todo , btn)
}
