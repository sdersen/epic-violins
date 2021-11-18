const productsBoxes = document.querySelectorAll(".product-box");

productsBoxes.forEach((productBox) => {
  const button = productBox.querySelector(".read-more-btn");
  const card = productBox.querySelector(".card");
  const close = productBox.querySelector(".close");
  button.addEventListener("click", () => {
    card.classList.add("show-card");
    console.log("hej");
  });
  close.addEventListener("click", () => {
    card.classList.remove("show-card");
  });
  console.log(productBox);
  console.log(button);
});

console.log(productsBoxes);
