//Dom Variables
///////////////
//Todo Input
const todoInput = document.querySelector('.todo-input');

//Input Button
const todoButton = document.querySelector('.todo-button');
//UL
const todoList = document.querySelector('.todo-list');

//Filter Dropdown
const filterOption = document.querySelector('.filter-todos');



//Event Listeners
/////////////////
//Listening for click event on submit button & add the todo
todoButton.addEventListener('click', addTodo);


//Todo List Delete & Completed Buttons
//Dropdown Selector


//Functions

//Gets the input and adds to the list
function addTodo(event){
    event.preventDefault(); //Page load

    //Dynamicallly create the todo list
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Create the list inside the todoDiv
    const newTodo = document.createElement('li');
    //The text for the li is = to the user input 
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    //make the todo a child el of todoDiv
    todoDiv.appendChild(newTodo);

    //ADD LOCAL STORAGE HERE LATER

    //Dynamically create completed button
    const completedButton = document.createElement('button');
    completedButton.innerText = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    //make this button a child el of todoDiv
    todoDiv.appendChild(completedButton);





}

//



