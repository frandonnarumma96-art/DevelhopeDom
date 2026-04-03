// 1. Selezioniamo gli elementi
const titleName = document.querySelector('.title-name');
const emailInput = document.querySelector('.email');
const firstNameInput = document.querySelector('.firstname');
const lastNameInput = document.querySelector('.lastname');
const saveBtn = document.querySelector('.btn');

// --- RECUPERO DATI AL CARICAMENTO ---
function init() {
    const savedData = sessionStorage.getItem('userSessionData');
    
    if (savedData) {
        const data = JSON.parse(savedData);
        // Aggiorniamo lo span e gli input
        titleName.textContent = data.firstname;
        emailInput.value = data.email;
        firstNameInput.value = data.firstname;
        lastNameInput.value = data.lastname;
    }
}

init();

// --- SALVATAGGIO DATI ---
saveBtn.addEventListener('click', () => {
    // Creiamo l'oggetto con i valori attuali
    const user = {
        email: emailInput.value,
        firstname: firstNameInput.value,
        lastname: lastNameInput.value
    };

    // Aggiorniamo il titolo in tempo reale
    titleName.textContent = user.firstname;

    // Salviamo nel Session Storage (trasformato in stringa JSON)
    sessionStorage.setItem('userSessionData', JSON.stringify(user));
    
    console.log("Dati salvati nella sessione corrente!");
});