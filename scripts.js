const filterButtons = document.querySelectorAll(".filter");
const products = document.querySelectorAll(".product-card");
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    products.forEach((product, index) => {
      const show = filter === "all" ||
        (filter === "sale" && product.dataset.type === "sale") ||
        (filter === "new" && product.dataset.type === "new") ||
        (filter === "rating" && product.dataset.type === "rating");
      product.hidden = !show;
    });
  });
});
document.querySelector("#newsletter-form").addEventListener("submit", event => {
  event.preventDefault();
  document.querySelector("#message").textContent = "Đăng ký nhận tin thành công!";
  event.target.reset();
});
