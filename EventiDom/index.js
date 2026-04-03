const button = document.querySelector('.btn');
const body = document.body;

// 2. Aggiungiamo l'ascoltatore di eventi per il click
button.addEventListener('click', () => {
  // 3. "Toggliamo" la classe .theme sul body
  body.classList.toggle('theme');
})