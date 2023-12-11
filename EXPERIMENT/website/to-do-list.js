function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const todoContainer = document.getElementById('todo-container');

        // Create a new todo item
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        // Create a checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('custom-checkbox');

        // Create todo text
        const todoText = document.createElement('label');
        todoText.classList.add('todo-text');
        todoText.textContent = taskText;

        // Append checkbox and text to todo item
        todoItem.appendChild(checkbox);
        todoItem.appendChild(todoText);

        // Append todo item to the container
        todoContainer.appendChild(todoItem);

        // Clear the input field
        taskInput.value = '';
    }
}