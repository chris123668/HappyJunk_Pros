const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const prevPhoto = document.getElementById("prevPhoto");
const nextPhoto = document.getElementById("nextPhoto");
const galleryDots = document.querySelectorAll(".dot");
const heroSlides = document.querySelectorAll(".hero-slide");
const themeToggle = document.getElementById("themeToggle");
const reviewButton = document.getElementById("reviewButton");
const workGalleryImage = document.getElementById("workGalleryImage");
const workGalleryPrev = document.getElementById("workGalleryPrev");
const workGalleryNext = document.getElementById("workGalleryNext");
const workGalleryThumbs = document.querySelectorAll(".work-thumb");

// Replace this URL with your real Google Maps review link.
// Google Business Profile > Ask for reviews > copy review link.
const GOOGLE_REVIEW_URL = "https://www.google.com/maps/place/Happy+Junk+Pros+LLC/@35.8925862,-79.3621087,97482m/data=!3m1!1e3!4m16!1m9!3m8!1s0x89acefd9f5167459:0x29271bd14fcaae32!2sHappy+Junk+Pros+LLC!8m2!3d35.8930385!4d-79.0317753!9m1!1b1!16s%2Fg%2F11m9qvqjsz!3m5!1s0x89acefd9f5167459:0x29271bd14fcaae32!8m2!3d35.8930385!4d-79.0317753!16s%2Fg%2F11m9qvqjsz?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D";

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  themeToggle.innerText = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
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

reviewButton.addEventListener("click", function () {
  window.open(GOOGLE_REVIEW_URL, "_blank", "noopener,noreferrer");
});

const workGalleryImages = Array.from(workGalleryThumbs).map(function (thumb) {
  return thumb.dataset.image;
});

let currentWorkImageIndex = 0;

function updateWorkGallery(index) {
  currentWorkImageIndex = index;
  workGalleryImage.src = workGalleryImages[currentWorkImageIndex];

  workGalleryThumbs.forEach(function (thumb, thumbIndex) {
    thumb.classList.toggle("active", thumbIndex === currentWorkImageIndex);
  });
}

function showNextWorkImage() {
  const nextIndex = (currentWorkImageIndex + 1) % workGalleryImages.length;
  updateWorkGallery(nextIndex);
}

function showPreviousWorkImage() {
  const previousIndex = (currentWorkImageIndex - 1 + workGalleryImages.length) % workGalleryImages.length;
  updateWorkGallery(previousIndex);
}

workGalleryNext.addEventListener("click", showNextWorkImage);
workGalleryPrev.addEventListener("click", showPreviousWorkImage);

workGalleryThumbs.forEach(function (thumb, index) {
  thumb.addEventListener("click", function () {
    updateWorkGallery(index);
  });
});
