// DOM-Elemente referenzieren
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("new-task");
const taskForm = document.getElementById("task-form");
const darkModeBtn = document.getElementById("toggle-darkmode");


// Funktionen hinzugefügt
const addTodo = () => {
    const taskText = todoInput.value.trim();

    if (taskText === "") {
        alert("Bitte geben Sie eine Aufgabe ein.");
        return;
    }

    //Listenelement erstellen
    const listItem = document.createElement("li");
    listItem.classList.add("todo-item");

    // Text-Span erstellen
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    listItem.appendChild(taskSpan);

    //Button-Container
    const buttonContainer = document.createElement("div");

    //"Aufgabe Erledigt"-Button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✅";
    completeBtn.addEventListener("click", () => completeTodo(listItem));
    buttonContainer.appendChild(completeBtn);

    //"Löschen"-Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.addEventListener("click", () => deleteTodo(listItem));
    buttonContainer.appendChild(deleteBtn);

    // Button-Container wird zur Liste hinzugefügt
    listItem.appendChild(buttonContainer);
    

    // LI zu UL
    todoList.appendChild(listItem);

    // Eingabefeld leeren wenn kein Wert
    todoInput.value = "";
};


// Aufgabe soll als erledigt markiert werden
const completeTodo = (item) => {
    item.classList.toggle("completed");
};


// Aufgabe löschen
const deleteTodo = (item) => {
    // Entfernt das Listenelement
    item.remove();
};



// Event Listener für das einrecihen der Form
taskForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Verhindert Neuladen der Seite
    addTodo();
});

// In den Dark Mode Umschalten
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});