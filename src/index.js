// src/index.js

const form = document.getElementById('create-task-form');
const taskInput = document.getElementById('new-task-description');
const tasksList = document.getElementById('tasks');


form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    const taskDescription = taskInput.value.trim();
    
    
    if (taskDescription) {
        
        const taskItem = createTaskElement(taskDescription);
        
        
        tasksList.appendChild(taskItem);
        
  
        taskInput.value = '';
    }
});


function createTaskElement(description) {
    
    const li = document.createElement('li');
    li.textContent = description;
    
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.className = 'delete-btn';
    
  
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
    
    li.appendChild(deleteBtn);
    
    return li;
}