document.addEventListener("DOMContentLoaded",()=>{ 
    loadTasks();
    document.getElementById("taskIP").addEventListener("keypress", function (event) {
        if (event.key === "Enter") { 
            event.preventDefault(); 
            addTask(); 
        }
    });
});

function showToast(message, type = "success") {
    const toastElement = document.getElementById("toast");
    const toastMessage = document.getElementById("toastMessage");
    toastMessage.innerText = message;
    
    toastElement.className = `toast align-items-center text-white bg-${type} border-0 show`;
    
    setTimeout(() => {
        toastElement.classList.remove("show");
    }, 3000);
}

function addTask() {
    let taskInput = document.getElementById("taskIP");
    let taskText = taskInput.value.trim();
    if (taskText === "") {
        showToast("Please add a task.", "danger");
        return;
    }
   



    const taskObj = { text: taskText, completed: false };
    saveTaskToStorage(taskObj);
    createTaskElement(taskObj);

    taskInput.value = "";
    showToast("Task added successfully!");
}

function createTaskElement(taskObj, animate = true) {
    const list = document.getElementById("taskList");

    const li = document.createElement("li");
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("me-2");
    checkbox.checked = taskObj.completed;
    checkbox.onchange = () => {
        span.classList.toggle("completed", checkbox.checked);
        updateTaskStatus(span.innerText, checkbox.checked);
        sortTasks();
    };

    const span = document.createElement("span");
    span.innerText = taskObj.text;
    if (taskObj.completed) {
        span.classList.add("completed");
    }

    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-danger", "btn-lg", "mx-3");
    btn.innerHTML = '<i class="bi bi-trash-fill"></i>';
    btn.onmouseover = () => {
        span.style.color = "red";
    };

    btn.onmouseout = () => {
        span.style.color = ""; 
    };
    btn.onclick = () => {
        li.classList.add("fade-out");
        setTimeout(() => {
            li.remove();
            removeTaskFromStorage(taskObj.text);
            showToast("Task removed!", "warning");
        }, 300);
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btn);
    list.appendChild(li);

    if (animate) {
        setTimeout(() => li.classList.add("show"), 10);
    }

    sortTasks();
}

function saveTaskToStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => createTaskElement(task, false));
    document.querySelectorAll("li").forEach(li => li.classList.add("show"));
}

function removeTaskFromStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task.text !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateTaskStatus(taskText, completed) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.map(task => (task.text === taskText ? { ...task, completed } : task));
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function sortTasks() {
    let tasks = Array.from(document.querySelectorAll("#taskList li"));
    tasks.sort((a, b) => {
        let aCompleted = a.querySelector("input").checked;
        let bCompleted = b.querySelector("input").checked;
        return aCompleted - bCompleted;
    });
    tasks.forEach(task => document.getElementById("taskList").appendChild(task));
}
