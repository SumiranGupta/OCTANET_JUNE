let todoList = [];
displayItems();

function addTodo(){
  let inputElement = document.querySelector('#input');
  let inputDate = document.querySelector('#todo-date');
  let todoItem = inputElement.value;   // to get the value of the input
  let todoDate = inputDate.value;
  console.log(todoItem);
  todoList.push({item: todoItem, dueDate: todoDate}); 
  inputElement.value = '';
  inputDate.value = '';
  displayItems();
}

function displayItems() { //to dispaly all the elements whatever is added to the list (from the beginning)
  let containerElements = document.querySelector('.todo-container');
  let newHtml = '';
  for (let i=0;i<todoList.length;i++){
    let {item,dueDate} = todoList[i];
  newHtml += `
  <span>${item}</span>
  <span>${dueDate}</span>
  <button class="btn-delete" onclick="todoList.splice(${i}, 1);
  displayItems();">Delete</button>
  `;
  }
  containerElements.innerHTML = newHtml;
}