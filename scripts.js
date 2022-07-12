const input =document.querySelector('#text');
const addBtn = document.querySelector('#submit');
const error =document.querySelector('.error');
const FileList = document.querySelector('ul');
let todos = [];

const generateID =()=>{
    if (todos.length===0) {
        return 1;
    }else{
        return todos[todos.length - 1].id + 1;
    }
}

function generateItem(todo){
    return `<li><span>${todo.text}</span><button data-id="${todo.id}" class="close">X</button></li>`
}
const updateUI = () =>{
    FileList.innerHTML = '';
    console.log('todos: ', todos)
    todos.forEach(todo =>{
        FileList.innerHTML += generateItem(todo)
    })
}

const addTodo = e => {
    e.preventDefault();
    if (input.value !=='') {

        console.log('text: ',input.value);  
        const data ={
            id: generateID (),
            text: input.value,
                
        } 
        todos.push(data)
       updateUI();
    }else{
        error.textContent ='pleasse enter a valaid information'
        setTimeout(() =>{
            error.textContent ='';
        },2500)
    }
}

const deleteTodo =(id) =>{
    todos = todos.filter(data => data.id !==id);
    // update ui
FileList.innerHTML ='';
    todos.forEach(todo =>{
        FileList.innerHTML += generateItem(todo);
    });
}
//event listener
// add todo  list
addBtn.addEventListener('click',addTodo);

// delete todo list 
FileList.addEventListener('click', e => {
    console.log('e: ', e.target.getAttribute("data-id"))
    window.event = e;
    if(e.target.getAttribute('data-id') && e.target.classList.contains('close')) {
    const id = Number(e.target.getAttribute('data-id'))
    deleteTodo(id);

    }
});
