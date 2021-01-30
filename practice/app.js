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
//Listening on parent el then checked if its completed or trash in the function
todoList.addEventListener('click', deleteCheck);


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
    completedButton.innerText = '$';
    completedButton.classList.add('complete-btn');
    //make this button a child el of todoDiv
    todoDiv.appendChild(completedButton);

    //Dynamically create trash button
    const trashButton = document.createElement('button');
    trashButton.innerText = 'X';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);


    //Making the todoDiv a child el of html todoList
    todoList.appendChild(todoDiv);

    //Clear the input value after the input has been added to the LI
    todoInput.value = '';

}


//Function that checks if completed or trash can was clicked 
function deleteCheck(e){
    console.log(e.target);//logs clicked el
    const item = e.target;

    //Running functionality based on its class and index position of that class
    if(item.classList[0] === 'trash-btn'){
        //Grabbing the parent so we can add a class to make the  whole el dissapear
        const todo = item.parentElement;
        todo.classList.add('fall');
        //ADD LOCAL STORAGE DELETE


    }
    //Checking the class and adding a CSS class for when it matches
    if(item.classList[0] === 'complete-btn'){
         //Grabbing the parent so we can add a class to make a line go though completed item
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }



}

//Dropdown Filter Todo Function

function filterTodo(e){
    //grabbing the list items through parent Todo List
    const todos = todoList.childNodes;
    //Looping though child els 
    todos.forEach(function(todo){
        //Running functionality based on each case
        switch(e.target.value){
            case "all":
                //Just displaying all the todos
                todo.style.display = "flex";
                //adding break so the function stops
                
        }
    })
}



