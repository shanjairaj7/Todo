var todoInput = document.querySelector('.inputContainer input');
var addTodo = document.querySelector('.addTodo');
var todosParent = document.querySelector('.todos');
var navContainer = document.querySelector('.inputContainer');

addTodo.addEventListener('click',todoFunction);

function todoFunction(){
  var inputValue = todoInput.value;
  if(inputValue.length ==0){
    alert("Enter a value");
  }
  
  var todo = document.createElement('div');
  todo.setAttribute('class','todo');
  todosParent.appendChild(todo);

  var title = document.createElement('h4');
  title.innerHTML = inputValue;
  todo.appendChild(title);

  var removeTodo = document.createElement('button');
  removeTodo.setAttribute('class','removeTodo');
  removeTodo.innerHTML = "Remove";
  todo.appendChild(removeTodo);

  todoInput.value = "";

  var editTodo = document.createElement('button');
  editTodo.setAttribute('class','editTodo');
  editTodo.innerHTML = "Edit";
  todo.appendChild(editTodo);

  removeTodo.addEventListener('click', function(e){
    var target = e.target.parentNode;

    target.remove();
  })

  editTodo.addEventListener('click', function(b){
    var targetText = b.target.parentNode.childNodes[0].innerHTML;
    console.log(targetText)

    var updateTodo = document.createElement('button');
    updateTodo.setAttribute('class','updateTodo');
    updateTodo.innerHTML = "Update";
    navContainer.appendChild(updateTodo);

    addTodo.style.display = 'none';

    todoInput.value = targetText;
    updateTodo.addEventListener('click',function(){
      updatedTodoTitle = b.target.parentNode.childNodes[0];
      updatedTodoTitle.innerHTML = todoInput.value;
      console.log(updatedTodoTitle)

      todoInput.value = "";

      updateTodo.style.display = 'none';
      addTodo.style.display = 'block';
    })
  })

}