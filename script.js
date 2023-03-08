const modal = document.querySelector('.modal');
const btnAbrirModal = document.querySelector('.open-button');
const btnFecharModal = document.querySelector('.close-button');
const overlay = document.querySelector('.overlay');

function alternarModal(){
  modal.classList.toggle('aberto')
  overlay.style.visibility="visible"
};


btnAbrirModal.addEventListener("click", () =>{
  alternarModal();
})

btnFecharModal.addEventListener("click", () =>{
  alternarModal();
  overlay.style.visibility="hidden"
})