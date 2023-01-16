const btn = document.querySelector(".submit-btn");
const ratings = document.querySelectorAll(".rating");
const thankYouRating = document.querySelector("#rating");
const ratingCard = document.querySelector('.rating-card');
const thankYouCard = document.querySelector(".thank-you-card");

// RATING SELECTION
ratings.forEach((rating) => {
   rating.addEventListener('click', (e) => {
    e.preventDefault();
    ratings.forEach((rating) => {
    rating.classList.remove("selected-rating");
    });
    rating.classList.add("selected-rating");

    btn.disabled = false;
   });  
});

// Button Functioning

btn.addEventListener('click', (e) => {
    e.preventDefault();
    let selectedRating = document.querySelector('.selected-rating');
    let ratingValue = selectedRating.getAttribute('data-value');
    ratingCard.classList.add("hidden");
    thankYouRating.innerHTML = ratingValue;
    thankYouCard.classList.remove("hidden");
});
