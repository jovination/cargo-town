const items = document.querySelectorAll(".accordion button");

items.forEach((item) => item.addEventListener("click", toggleAccordion));

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (let item of items) {
    item.setAttribute("aria-expanded", false);
    // Reset all icons to fa-plus
    const icon = item.querySelector("i");
    if (icon) {
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    }
  }

  if (itemToggle === "false") {
    this.setAttribute("aria-expanded", true);
    // Change the icon of the clicked item to fa-minus
    const icon = this.querySelector("i");
    if (icon) {
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
    }
  }
}

