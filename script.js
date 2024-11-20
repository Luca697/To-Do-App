// Elemente aus dem DOM holen
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Event Listener für den "Add Task"-Button
addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Bitte eine Aufgabe eingeben!');
    return;
  }

  // Neue Aufgabe erstellen
  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');
  taskItem.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div>
      <button class="complete-task">✓</button>
      <button class="delete-task">🗑️</button>
    </div>
  `;

  // Complete-Button Funktionalität
  taskItem.querySelector('.complete-task').addEventListener('click', () => {
    taskItem.classList.toggle('completed');
    const taskText = taskItem.querySelector('.task-text');
    
    // Animation für das Häkchen
    if (taskItem.classList.contains('completed')) {
      taskText.style.color = 'green';
      taskText.style.textDecoration = 'line-through';
    } else {
      taskText.style.color = '';
      taskText.style.textDecoration = '';
    }
  });

  // Delete-Button Funktionalität
  taskItem.querySelector('.delete-task').addEventListener('click', () => {
    taskItem.classList.add('deleting');
    setTimeout(() => {
      taskItem.remove();
    }, 500); // Verzögert das Entfernen, damit die Animation abgeschlossen wird
  });

  // Aufgabe zur Liste hinzufügen
  taskList.appendChild(taskItem);

  // Eingabefeld leeren
  taskInput.value = '';
});
