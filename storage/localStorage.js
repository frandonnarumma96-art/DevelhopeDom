// 1. Selezioniamo tutti gli elementi necessari
const titleName = document.querySelector('.title-name');
const emailInput = document.querySelector('.email');
const firstNameInput = document.querySelector('.firstname');
const lastNameInput = document.querySelector('.lastname');
const saveBtn = document.querySelector('.btn');

// --- FUNZIONE PER CARICARE I DATI AL RELOAD ---
function loadStorageData() {
    // Cerchiamo l'oggetto salvato (chiamiamolo 'userForm')
    const savedData = localStorage.getItem('userForm');

    if (savedData) {
        // Se esistono dati, trasformiamo la stringa JSON di nuovo in oggetto
        const data = JSON.parse(savedData);
        
        // Ripopoliamo lo span del titolo
        titleName.textContent = data.firstname;
        
        // (Opzionale ma consigliato) Ripopoliamo anche i campi di input
        emailInput.value = data.email;
        firstNameInput.value = data.firstname;
        lastNameInput.value = data.lastname;
    }
}

// Chiamiamo la funzione subito per controllare se ci sono dati al caricamento
loadStorageData();

// --- LOGICA DI SALVATAGGIO AL CLICK ---
saveBtn.addEventListener('click', () => {
    // 1. Creiamo un oggetto con i valori attuali degli input
    const formData = {
        email: emailInput.value,
        firstname: firstNameInput.value,
        lastname: lastNameInput.value
    };

    // 2. Aggiorniamo lo span nel titolo con il nome appena inserito
    titleName.textContent = formData.firstname;

    // 3. Salviamo l'oggetto nel Local Storage
    // Ricorda: Local Storage accetta solo stringhe, quindi usiamo JSON.stringify
    localStorage.setItem('userForm', JSON.stringify(formData));
    
    console.log("Dati salvati correttamente!");
});