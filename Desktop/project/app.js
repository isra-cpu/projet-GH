// Ajouter un livre (Liste + Populaires)
document.getElementById("addBookForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;

  // 1) Ajouter à la liste
  const li = document.createElement("li");
  li.textContent = 'Titre: ${title} — Auteur: ${author}';
  document.getElementById("books").appendChild(li);

  // 2) Ajouter aux populaires
  const card = document.createElement("div");
  card.className = "book-card";
  card.innerHTML = '<h3>${title}</h3><p>${author}</p>';
  document.getElementById("popularBooks").appendChild(card);

  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
});

// Recherche (affiche résultats فقط)
document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const filter = document.getElementById("searchInput").value.toLowerCase();
  const books = document.querySelectorAll("#books li");
  const resultsList = document.getElementById("searchResults");

  resultsList.innerHTML = "";

  let found = false;

  books.forEach(book => {
    if (book.textContent.toLowerCase().includes(filter)) {
      const li = document.createElement("li");
      li.textContent = book.textContent;
      resultsList.appendChild(li);
      found = true;
    }
  });

  if (!found) {
    const li = document.createElement("li");
    li.textContent = "Aucun livre trouvé !";
    resultsList.appendChild(li);
  }

  document.getElementById("searchInput").value = "";
});