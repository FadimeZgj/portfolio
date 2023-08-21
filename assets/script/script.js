/* TYPING */
// Get the elements for name and job titles
const nameElement = document.querySelector('.home__title--name');
const jobElement = document.querySelector('.home__title--job');

// Function to create typing effect
function typeEffect(element, text, speed) {
    const textArray = text.split('');
    let tempText = '';
    textArray.forEach((char, index) => {
        setTimeout(() => {
            tempText += char;
            element.textContent = tempText;
        }, speed * index);
    });
}

// Call the typing function for name and job titles
const nameText = nameElement.textContent;
const jobText = jobElement.textContent;

nameElement.textContent = '';
jobElement.textContent = '';

typeEffect(nameElement, nameText, 100); // Adjust speed (100ms) to control typing speed
setTimeout(() => typeEffect(jobElement, jobText, 100), nameText.length * 100 + 300); // Add delay before starting the job title typing

//////////////////////////////////////////////////////////////

/* SCROLL ARROW */

document.addEventListener("DOMContentLoaded", function() {
    const scrollArrow = document.querySelector("#scrollArrow");
    const nextSection = document.querySelector(".profil");
  
    scrollArrow.addEventListener("click", function() {
      nextSection.scrollIntoView({ behavior: "smooth" });
    });
  });
  
//////////////////////////////////////////////////////////////

