function addProduct() {
    const input = document.querySelector("input");
    const ul = document.querySelector("ul");
    const taskText= input.value;
}

const li = document.createElement('li');

  // 3. Creiamo la checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  // 4. Creiamo un elemento per il testo (per tenerlo separato dalla checkbox)
  const span = document.createElement('span');
  span.textContent = taskText;

  // 5. Assembliamo i pezzi: mettiamo checkbox e testo dentro il li
  li.appendChild(checkbox);
  li.appendChild(span);

  // 6. Aggiungiamo il nuovo li alla lista ul nella pagina
  ul.appendChild(li);

  // 7. Puliamo il campo di input per il prossimo task
  input.value = "";
