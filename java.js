document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  const btn = document.getElementById('button');
  btn.value = 'Enviando...';

  const serviceID = 'default_service'; // o el ID real que uses
  const templateID = 'template_rw6fb23'; // tu ID de plantilla real en EmailJS

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Correo enviado con éxito.');
    }, (err) => {
      btn.value = 'Enviar';
      alert('Error al enviar: ' + JSON.stringify(err));
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu");
  const navLinks = document.querySelector(".nav-links");

  menuButton.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      menuButton.classList.toggle("open");
  });
});

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

