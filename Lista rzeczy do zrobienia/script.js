document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="task-delete">X</button>
            `;
            taskList.appendChild(taskItem);
            newTaskInput.value = '';

            const deleteButton = taskItem.querySelector('.task-delete');
            deleteButton.addEventListener('click', () => {
                taskItem.remove();
            });

            taskItem.addEventListener('click', () => {
                taskItem.classList.toggle('completed');
            });
        }
    });
});
