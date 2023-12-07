document.addEventListener("DOMContentLoaded", function () {
    showSection('home');
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.flashcard');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';
}

let el = document.querySelector(".input-wrap .input");
let widthMachine = document.querySelector(".input-wrap .width-machine");
el.addEventListener("keyup", () => {
  widthMachine.innerHTML = el.value;
});