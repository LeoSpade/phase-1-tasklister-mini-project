// button, id, eventListener

// CONSTANT VARIABLES

const wholeTaskWindow = document.querySelector("#create-task-form")
// whole submission field

const declaredTasksWindow = document.querySelector("#tasks")
// output of tasks

const messageInputWindow = document.querySelector("new-task-description")
// input field

const createNewTaskButton = document.querySelector("#submit-button")
// submit button

const messageInput = wholeTaskWindow.querySelector("input")
// text inputted into field


const messageToDelete = document.querySelectorAll('.tasks')

// const arrayInputs = [0, "array", true]


// CALLBACK FUNCTIONS

function handleNewTask(event) {
  event.preventDefault()
  const newMessageInput = messageInput.value
  
  const newListedMessage = document.createElement('li')
  newListedMessage.textContent = newMessageInput
  
  declaredTasksWindow.append(newListedMessage)

  // const deleteButtonin = document.querySelectorAll('#task')
  const deleteTaskButton = document.createElement("button")
  deleteTaskButton.textContent = "x"

  declaredTasksWindow.append(deleteTaskButton)

  wholeTaskWindow.reset()
  
  deleteTaskButton.addEventListener("click", handleDeleteTask)
  // const arrayOfTasks = Array.from(declaredTasksWindow.children)


  function listArray() {
    return Array.from(newListedMessage.children)
  }
 //  newMessageInput "p" .createElement

    function handleDeleteTask(event) {
      newListedMessage.style.display = 'none'
      deleteTaskButton.style.display = "none"
      // return listArray.pop()
    }
}

  // const messageToDelete = lastMessage
  // declaredTasksWindow.removeChild('p')
  // const parent = document.querySelector("#tasks")
  // const child = newListedMessage
  // parent.removeChild(child)


// EVENT LISTENERS 

wholeTaskWindow.addEventListener("submit", handleNewTask)
