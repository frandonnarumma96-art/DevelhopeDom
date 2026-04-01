// Selezioniamo l'elemento di riferimento (la lista ul)
const ul = document.querySelector('ul');

// 1. L'elemento padre di ul
console.log(ul.parentElement); 


const secondoLi = ul.children[1];

// 2. Il secondo elemento figlio di ul
console.log(secondoLi);

// 3. L'elemento fratello successivo del secondo li
console.log(secondoLi.nextElementSibling);

// 4. L'elemento fratello precedente del secondo li
console.log(secondoLi.previousElementSibling);