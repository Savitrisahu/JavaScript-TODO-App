
    const input = document.getElementById("task");
    const addBtn = document.getElementById("submitbtn");
    const taskList = document.getElementById("taskvalues");
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    renderTasks();

    addBtn.addEventListener("click", () => {
      const taskText = input.value.trim();
      if (taskText === "") return;

      const newTask = { text: taskText, completed: false };
      tasks.push(newTask);
      input.value = "";
      saveTasks();
      renderTasks();
    });

    function renderTasks() {
      taskList.innerHTML = "";
      tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = task.completed ? "completed" : "";
        li.innerHTML = `
          <span>${task.text}</span>
          <div class="actions">
            <button onclick="toggleComplete(${index})">✔</button>
            <button onclick="deleteTask(${index})">❌</button>
          </div>
        `;
        taskList.appendChild(li);
      });
    }

    function toggleComplete(index) {
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
      renderTasks();
    }

    function deleteTask(index) {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    }

    function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
 