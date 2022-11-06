// windows.localStorage.maboite = "je stock les données"
// let mesDonnees = windows.localStorage.maboite

const form = document.querySelector("form");

const storage = () => {
    window.localStorage.storageList = list.innerHTML;
  }

  const getStorageList = () => {
    if (window.localStorage.storageList) {
      list.innerHTML = window.localStorage.storageList;
    } else {
      list.innerHTML = `<li>ᗢ Cliquez sur un Todo pour le supprimer</li>`;
    }
  }

  window.addEventListener("load", getStorageList);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  list.innerHTML += `<li>ᗢ ${todo.value}</li>`;
  todo.value = "";
  storage();
});

list.addEventListener("click", (e) => {
  e.target.remove();
  storage();
});
