const input =document.querySelector('#text');
const addBtn = document.querySelector('#submit');
const error =document.querySelector('.error');
const ul = document.querySelector('ul');
let todos = [];
const data = {id:'',text:''}
const madeId= ()=> new Date().getTime()

function generateTodo(todo) {
    return ` <li><span>${todo.text}</span><button class="close" data-id ="${todo.id}"  class="delete">x</button></li>`
}

const render=()=>{
    ul.textContent='';
    todos.forEach(todo=>ul.innerHTML += generateTodo(todo)
    )
}

const addtoDo=e=>{
       e.preventDefault();
       const datum = { id :madeId(),text:input.value, } 
       todos.push(datum);
       input.focus(); 
       render()
       input.value='';  
   }

addBtn.addEventListener('click',addtoDo);
//delete Todo
const deletMe = (id)=>{
    todos = todos.filter(data => data.id !==id)
    render();
    }

ul.addEventListener('click',e=>{
        e.preventDefault();
        if(e.target.getAttribute('data-id') && e.target.classList.contains('close')){
         var id = Number(e.target.getAttribute('data-id'))
         deletMe(id); 
     }
    })
    