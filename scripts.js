const input =document.querySelector('#text');
const addBtn = document.querySelector('#submit');
const error =document.querySelector('.error');
const ul = document.querySelector('ul');
const user = document.querySelector(".user")
let todos = [];
const data = {id:'',text:''}
const madeId = ()=> new Date().getTime()

function generateTodo(todo) {
    return ` <li><span>${todo.text}</span><button class="close" data-id ="${todo.id}" >x</button></li>`
}

const render=()=>{
    ul.textContent='';
    todos.forEach(todo=>ul.innerHTML += generateTodo(todo)
    )
}

const addtoDo=e=>{ 
    e.preventDefault();
    if(input.value!==''){
        const datum = { id :madeId(),text:input.value, }
        todos.push(datum);
        input.focus(); 
        render()
        input.value='';  
    }else{
        error.textContent = 'Please enter a valid task'
        setTimeout(() => {
            error.textContent='';
        }, 2500);
    }
   }

addBtn.addEventListener('click',addtoDo);
//allowing the enter key to add todo
input.addEventListener("keypress", (e)=> {
    if (e.key === "Enter") {
      addtoDo();
    }
  });
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



    // Implementing the fetch api

    fetch("https://randomuser.me/api/?results=10")
    .then(res => res.json())
    .then(data => {
        let picture = (data.results[0].picture)
        updateUI(picture)
    } )
    .catch(err => console.log(err))
    // updating the UI with the result from the fetch API
    const updateUI = (data)=>{
        let div =`Your profile image is : <img src="${data.large}">`
        user.innerHTML = div
    }
    