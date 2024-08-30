import "../css/normalize.css";
import "../css/style.css";

const dropdownHandler = (function () {
  const dropdownBtn = document.querySelector(".dropdown"),
    dropdownContainer = document.querySelector('.dropdown-items'),
    dropdownItems = document.querySelectorAll('li');

  dropdownBtn.addEventListener("click", (e) => {
    dropdownContainer.classList.toggle('hidden');
  });

  dropdownItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        dropdownBtn.textContent = e.target.textContent;
        dropdownContainer.classList.toggle('hidden');
    });
  });
})();