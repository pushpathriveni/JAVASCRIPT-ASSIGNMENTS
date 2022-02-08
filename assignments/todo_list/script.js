<html>
     <head>
         <title>Todo List</title>
     </head>
     <body>
         <div>
             <input type='text' name='todo_input'>
             <button type='submit'>Show Pending / Completed</button>
             <select id='dropdown'>
                 <option value="list">List</option>
                 <option id="completed" value="completed">Completed</option>
                 <option id="pending" value="pending">Pending</option>
             </select>
             <div class='todos'></div>
         </div>
     </body>
     <script src='./script.js'></script>
 </html>
let todos = [];
 var addToDoButton = document.querySelector('button');
 var todo = document.querySelector('.todos')
 let drop = document.querySelector("#dropdown");
 // var i = 0;
 // var inputfield = document.querySelector('input');
 addToDoButton.addEventListener("click", work);
 async function main() {
     try {
         const response = await fetch('https://jsonplaceholder.typicode.com/todos');
         const json = await response.json();
         todos = json.slice(0, 10);
         console.log(todos);
         todos.forEach((todom,index)=>{
             const newTodo = document.createElement('p');
             newTodo.setAttribute('key', index);
             newTodo.innerHTML = todom.title
             todo.appendChild(newTodo);
         })
     }catch(e) {
         console.log(e);
     }
 }
 function work(){
     if(drop.value ==="list"){
         main()
     }else if(drop.value === "completed"){
         completed()
     }else if(drop.value === "pending"){
         pending()
     }
 }
 function completed(){
     todo.innerHTML = ""
     todos.filter(todom => todom.completed).forEach((todom,index)=>{
         const newTodo = document.createElement('p')
         newTodo.setAttribute('key',index)
         newTodo.innerHTML = todom.title
         todo.appendChild(newTodo);
     })
 }
 function pending(){
     todo.innerHTML = ""
     todos.filter(todom => !todom.completed).forEach((todom,index)=>{
         const newTodo = document.createElement('p')
         newTodo.setAttribute('key',index)
         newTodo.innerHTML = todom.title
         todo.appendChild(newTodo);
     })
 }
 main()