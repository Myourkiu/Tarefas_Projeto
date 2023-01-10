function addTask() {
    const taskTitle = document.querySelector('#task-title').value

    if(taskTitle){
        const template = document.querySelector('.template')

        const newTask = template.cloneNode(true)

        newTask.querySelector('.task-title').textContent = taskTitle
        newTask.classList.remove('template')
        newTask.classList.remove('hide')

        const list = document.querySelector('#tasks-list')
        list.appendChild(newTask)

        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function () {
            completeTask(this)
        })

        const removeBtn = newTask.querySelector('.remove-btn').addEventListener('click', function () {
            removeTask(this)
        })

        document.querySelector('#task-title').value = ''
    }
}

function removeTask(task) {
    task.parentNode.remove(true)
}

function completeTask(task) {
    const taskComplete = task.parentNode
    taskComplete.classList.toggle('done')
}


const addBtn = document.querySelector('#add-btn')

addBtn.addEventListener('click', function (event) {

    event.preventDefault()

    addTask()
})