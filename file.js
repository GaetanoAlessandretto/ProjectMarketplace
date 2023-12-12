// Selezione degli elementi del DOM
let myform = document.querySelector("form"); // Selezione del form nel documento
let pUsername = document.getElementById("pUsername"); // Selezione dell'elemento con ID "pUsername"
let paddCourse = document.getElementById("addCourse"); // Selezione dell'elemento con ID "addCourse"
// Creazione di nuovi elementi nel DOM
let addCourse = document.createElement("button"); // Creazione di un elemento button
let filterByCategories = document.createElement("button"); // Creazione di un elemento button
let textUsername = document.createElement("h2"); // Creazione di un elemento h2
let navbar = document.getElementById("navbar"); // Selezione dell'elemento con ID "navbar"
let Categories = document.getElementById("filterByCategories"); // Selezione dell'elemento con ID "filterByCategories"
navbar.style.display = "none"; // Impostazione dello stile di "navbar" a "none" per nasconderlo inizialmente
let Logout = document.getElementById("Logout"); // Selezione dell'elemento con ID "Logout"
let logoutSpan = document.createElement("button"); // Creazione di un elemento button
logoutSpan.className = "btn btn-warning"; // Aggiunta di classi CSS all'elemento "logoutSpan"
logoutSpan.innerText = "Logout"; // Impostazione del testo dell'elemento "logoutSpan" come "Logout"
Logout.appendChild(logoutSpan); // Aggiunta dell'elemento "logoutSpan" all'elemento con ID "Logout"
Logout.onclick = logoutFunction; // Assegnazione di un gestore di eventi all'elemento "Logout" che richiama la funzione "logoutFunction" quando viene cliccato

console.log(logoutSpan); // Stampa l'elemento "logoutSpan" nella console

// Aggiunta di un gestore di eventi al form quando viene sottomesso
myform.addEventListener("submit", (e) => {
  let username = document.getElementById("Username");
  let password = document.getElementById("Password");
  // Verifica se i campi di username e password sono vuoti
  if (username.value == "" || password.value == "") {
    alert("Inserisci Username e password");
  } else {
    e.preventDefault(); // Previeni il comportamento predefinito del form
    // Nascondi il form e mostra la navbar
    myform.style.display = "none";
    navbar.style.display = "block";
    // Nascondi il form e aggiungi bottoni per inserire un corso e filtrare per categorie
    addCourse.className = "btn btn-warning";
    addCourse.innerText = "Inserisci un corso";
    filterByCategories.className = "btn btn-warning";
    filterByCategories.innerText = "Filtra per categorie";
    paddCourse.appendChild(addCourse); // Aggiunta del bottone "addCourse" all'elemento con ID "addCourse"
    Categories.appendChild(filterByCategories); // Aggiunta del bottone "filterByCategories" all'elemento con ID "filterByCategories"
    pUsername.innerHTML = username.value; // Impostazione del valore dell'username nell'elemento "pUsername"
  }
});

// Funzione di logout
function logoutFunction() {
  myform.style.display = "block"; // Mostra nuovamente il form
  navbar.style.display = "none"; // Nasconde la navbar
  let card = document.getElementById("card1"); // Selezione dell'elemento con ID "card1"
  card.style.display = "none"; // Nasconde l'elemento "card1"
  let username = (document.getElementById("Username").value = ""); // Reset dell'input dell'username
  let password = (document.getElementById("Password").value = ""); // Reset dell'input della password
}
