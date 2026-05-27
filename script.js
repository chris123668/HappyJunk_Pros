const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const prevPhoto = document.getElementById("prevPhoto");
const nextPhoto = document.getElementById("nextPhoto");
const galleryDots = document.querySelectorAll(".dot");
const heroSlides = document.querySelectorAll(".hero-slide");
const themeToggle = document.getElementById("themeToggle");
const quoteForm = document.getElementById("quoteForm");
const successMessage = document.getElementById("successMessage");
const reviewButton = document.getElementById("reviewButton");
const reviewBox = document.getElementById("reviewBox");
const submitReview = document.getElementById("submitReview");
const reviewText = document.getElementById("reviewText");
const reviewThanks = document.getElementById("reviewThanks");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeToggle.innerText = "Light Mode";
  } else {
    themeToggle.innerText = "Dark Mode";
  }
});

let currentPhotoIndex = 0;

function updateHeroPhoto(index) {
  currentPhotoIndex = index;

  heroSlides.forEach(function (slide, slideIndex) {
    slide.classList.toggle("active", slideIndex === currentPhotoIndex);
  });

  galleryDots.forEach(function (dot, dotIndex) {
    dot.classList.toggle("active", dotIndex === currentPhotoIndex);
  });
}

function showNextPhoto() {
  const nextIndex = (currentPhotoIndex + 1) % heroSlides.length;
  updateHeroPhoto(nextIndex);
}

function showPreviousPhoto() {
  const previousIndex = (currentPhotoIndex - 1 + heroSlides.length) % heroSlides.length;
  updateHeroPhoto(previousIndex);
}

setInterval(showNextPhoto, 5000);

nextPhoto.addEventListener("click", showNextPhoto);
prevPhoto.addEventListener("click", showPreviousPhoto);

galleryDots.forEach(function (dot, index) {
  dot.addEventListener("click", function () {
    updateHeroPhoto(index);
  });
});

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

navLinks.addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    navLinks.classList.remove("active");
  }
});

quoteForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();
  const photo = document.getElementById("photo").files.length;

  if (!name || !phone || !service || !message) {
    alert("Please fill out all required fields.");
    return;
  }

  if (photo > 0) {
    successMessage.innerText = "Thank you. Your quote request and photo have been received.";
  } else {
    successMessage.innerText = "Thank you. Your quote request has been received.";
  }

  successMessage.style.display = "block";
  quoteForm.reset();
});

reviewButton.addEventListener("click", function () {
  reviewBox.style.display = "block";
});

submitReview.addEventListener("click", function () {
  if (reviewText.value.trim() === "") {
    alert("Please write a short review before submitting.");
    return;
  }

  reviewThanks.style.display = "block";
  reviewText.value = "";
});
