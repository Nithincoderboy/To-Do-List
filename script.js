document.getElementById('addBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            span.classList.add('completed');
        } else {
            span.classList.remove('completed');
        }
    });

    const span = document.createElement('span');
    span.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✕';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}
