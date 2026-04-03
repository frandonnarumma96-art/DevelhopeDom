async function fetchLotrCard() {
  const cardCode = "01073"; // Codice per Gandalf
  const url = `https://ringsdb.com/api/public/card/${cardCode}.json`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error("Errore nel recupero della carta");
    }

    const card = await response.json();

    // 1. Inseriamo il nome nel titolo
    document.getElementById('char-name').textContent = card.name;

    // 2. Costruiamo il link dell'immagine e la inseriamo nel DOM
    const imageContainer = document.getElementById('char-image');
    const imageUrl = `https://ringsdb.com${card.imagesrc}`;
    
    imageContainer.innerHTML = `<img src="${imageUrl}" alt="${card.name}">`;

  } catch (error) {
    console.error("Ops!", error);
    document.getElementById('char-name').textContent = "Errore nel caricamento";
  }
}

// Avviamo la funzione
fetchLotrCard();