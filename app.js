//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event Listeners

todoButton.addEventListener('click', addTodo);


//Functions

function addTodo(event){
    event.preventDefault();
   //create a todo div
   const todoDiv = document.createElement('div');
   todoDiv.classList.add('todo');
   //Create Li
   const newTodo = document.createElement('li');
   newTodo.innerText = 'hey';
   newTodo.classList.add('todo-item');
   todoDive.appendChild(newTodo);
   //complete button check mark
   const completedButton = document.createElement('button');
   completedButton.innerText = '<i class="fas fa-check"></i>';
   completedButton.classList.add('complete-btn');
   todoDiv.appendChild(completedButton)
    //trash button
    const trashButton = document.createElement('button');
    trashdButton.innerText = '<i class="fas fa-trash"></i>';
    trashdButton.classList.add('trash-btn');
    todoDiv.appendChild(trashdButton)

}

