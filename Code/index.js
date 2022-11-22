const form = document.querySelector("form");

//Function to use localStorage to save List
const storage = () => {
  window.localStorage.storageList = list.innerHTML;
};
//Function to get LocalStorage of the save List
const getStorageList = () => {
  if (window.localStorage.storageList) {
    list.innerHTML = window.localStorage.storageList;
  } else {
    list.innerHTML = `<li>ᗢ Cliquez sur un Todo pour le supprimer</li>`;
  }
};

//When the home page load, use Function getStorageList
window.addEventListener("load", getStorageList);

//When the form is submitted, add value of the List
form.addEventListener("submit", (e) => {
  e.preventDefault();

  list.innerHTML += `<li>ᗢ ${todo.value}</li>`;
  todo.value = "";
  storage();
});

//When the The is clicked, delete selected value
list.addEventListener("click", (e) => {
  e.target.remove();
  storage();
});
