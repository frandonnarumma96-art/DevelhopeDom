// 1. Recuperiamo i valori dei campi di input tramite i loro ID
const firstNameValue = document.getElementById('firstName').value;
const lastNameValue = document.getElementById('lastName').value;
const ageValue = document.getElementById('age').value;

// 2. Creiamo l'oggetto person
const person = {
  firstName: firstNameValue,
  lastName: lastNameValue,
  age: parseInt(ageValue) // Convertiamo la stringa in numero per correttezza
};

// 3. Recuperiamo l'elemento form
const form = document.querySelector('form');

// 4. Trasformiamo l'oggetto in formato JSON (stringa)
const personJson = JSON.stringify(person);

// 5. Aggiungiamo l'attributo data-person al form
form.setAttribute('data-person', personJson);

// Log di controllo per verificare il risultato nell'Inspector del browser
console.log('Form con attributo aggiunto:', form);
console.log('Valore attributo data-person:', form.getAttribute('data-person'));