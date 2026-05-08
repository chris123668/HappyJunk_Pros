const quoteForm = document.getElementById("quoteForm");
const successMessage = document.getElementById("successMessage");
const reviewButton = document.getElementById("reviewButton");
const reviewBox = document.getElementById("reviewBox");
const submitReview = document.getElementById("submitReview");
const reviewText = document.getElementById("reviewText");
const reviewThanks = document.getElementById("reviewThanks");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

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
  const photo = document.getElementById("photo").files.length;
  const message = document.getElementById("message").value.trim();

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
