const addProduct = () => {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value;
  // Crea un nuovo elemento lista (li)
  const taskItem = document.createElement("li");

  // Crea una checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Crea un bottone "X" per rimuovere il task
  const removeButton = document.createElement("button");
  removeButton.textContent = "X";
  removeButton.classList.add("remove-btn");
  removeButton.onclick = () => {
    taskItem.remove(); // Rimuove l'elemento li quando cliccato
  };

  // Aggiunge il checkbox, il testo del task e il bottone "X" all'elemento li
  taskItem.appendChild(checkbox);

  //crea un nodo che contiene del testo
  taskItem.appendChild(document.createTextNode(` ${taskText} `));
  //aggiunge il rimuovi bottone
  taskItem.appendChild(removeButton);

  // Aggiunge il task alla lista (ul)
  const taskList = document.getElementById("taskList");
  taskList.appendChild(taskItem);

  // Pulisce il campo di input dopo aver aggiunto il task
  taskInput.value = "";
};
