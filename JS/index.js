const btn = document.querySelector(".submit-btn");
const ratings = document.querySelectorAll(".rating");
const thankYouRating = document.querySelector("#rating");
const ratingCard = document.querySelector('.rating-card');
const thankYouCard = document.querySelector(".thank-you-card");

ratings.forEach((rating) => {
   rating.addEventListener('click', () => {
    btn.disabled = false;
   });  
});

// Button Functioning

btn.addEventListener('click', (e) => {
    e.preventDefault();

    let selectedRating = document.querySelector('input[name="rate"]:checked').value;
    thankYouRating.textContent = selectedRating;

    ratingCard.classList.add("hidden");
    thankYouCard.classList.remove("hidden");
});