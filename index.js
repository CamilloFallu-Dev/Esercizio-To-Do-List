const addProduct = () => {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value;
  // Crea un nuovo elemento lista (li)
  const taskItem = document.createElement("li");

  // Crea un checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Crea un bottone "X" per rimuovere il task
  const removeButton = document.createElement("button");
  removeButton.textContent = "X";
  removeButton.classList.add("remove-btn");
  removeButton.onclick = () => {
    taskItem.remove(); // Rimuove l'elemento li quando cliccato
  };

  // Aggiungi il checkbox, il testo del task e il bottone "X" all'elemento li
  taskItem.appendChild(checkbox);
  taskItem.appendChild(document.createTextNode(` ${taskText} `));
  taskItem.appendChild(removeButton);

  // Aggiungi il task alla lista (ul)
  const taskList = document.getElementById("taskList");
  taskList.appendChild(taskItem);

  // Pulisce il campo di input dopo aver aggiunto il task
  taskInput.value = "";
};
