const previewButtons = document.querySelectorAll(".preview-button");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxTitle = document.getElementById("lightbox-title");
const downloadLink = document.getElementById("download-link");
const closeButton = document.getElementById("close-lightbox");

function openPreview(button) {
  const imagePath = button.dataset.image;
  const title = button.dataset.title;

  lightboxImage.src = imagePath;
  lightboxImage.alt = title;
  lightboxTitle.textContent = title;
  downloadLink.href = imagePath;
  downloadLink.download = imagePath.split("/").pop();

  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  closeButton.focus();
}

function closePreview() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  document.body.style.overflow = "";
}

previewButtons.forEach((button) => {
  button.addEventListener("click", () => openPreview(button));
});

closeButton.addEventListener("click", closePreview);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closePreview();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("open")) {
    closePreview();
  }
});
