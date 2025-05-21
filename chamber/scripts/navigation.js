const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const nav= document.querySelectorAll(".navigation li a");

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
nav.forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");
        hamButton.classList.remove("open");
    });
}); 

  
  navLinks.forEach(link => {
      link.addEventListener("click", function(event) {
          event.preventDefault();
          filterTemples(this.textContent);
      });
  });