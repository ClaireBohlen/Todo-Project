//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


//Functions

function addTodo(event){
    event.preventDefault();
   //create a todo div
   const todoDiv = document.createElement('div');
   todoDiv.classList.add('todo');
   //Create Li
   const newTodo = document.createElement('li');
   newTodo.innerText = todoInput.value;
   newTodo.classList.add('todo-item');
   todoDiv.appendChild(newTodo);
   //complete button check mark
   const completedButton = document.createElement('button');
   completedButton.innerHTML = '<i class="fas fa-check"></i>';
   completedButton.classList.add('complete-btn');
   todoDiv.appendChild(completedButton)
    //trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton)
    //append to list
    todoList.appendChild(todoDiv);
    //clear todo Input Value
    todoInput.value = '';

}

function deleteCheck(e){
    console.log(e.target);
    const item = e.target;
    if(item.classList[0] === 'trash-btn'){
        item.remove();
        console.log(item)
    }
    // const item = e.target;
    // if (item.classLisr[0]==='trash-btn'){
    //     item.remove;
    // }


}
