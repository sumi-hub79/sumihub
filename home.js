const taskList = document.getElementById("taskList");
let tasks = [];

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = `${task.subject}：${task.title}`;
    taskList.appendChild(li);
  });
}