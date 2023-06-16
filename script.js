const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

//MODAL OPEN FUNCTION
function openModal() {
  console.log("Modal is Open");
  modal.classList.add("active");     //JAVASCRIPT ME CSS ADD KRI
  overlay.classList.add("overlayactive");
}

//MODAL CLOSE FUNCTION
function closeModal() {
  console.log("Modal is Close");
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
}