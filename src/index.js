document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form')
  const tasks = document.querySelector('#tasks')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleToDo(e.target.newTask.value);
  })
})

function getWorkspaces(){
  fetch("http://localhost:3000/workspaces")
  .then(r => r.json())
  .then(data => {
    console.log("Data")
    console.log(data) // all workspaces
    // console.log(data.taskLister[1].tasks)
    for (let workspace in data){ // workspace obj
      console.log("Workspace")
      console.log(data[workspace])
      for (let list in workspace){ // workspace lists
        console.log(workspace + " list")
        console.log(data[workspace][list])
        // for (let task in list){
        //   console.log("task")
        //   console.log(data[workspace][list])
        // }
      }
    }
  })
}

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
