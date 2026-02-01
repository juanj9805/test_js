import * as Api from "./services/api.js";

const productsContainer = document.querySelector("#productsContainer");

const renderProducts = async function () {
  const products = await Api.getData("products");
  products.forEach((product) => {
    // Performance issue
    // Re-parses the DOM on every iteration
    // Is inefficient
    // Can cause layout thrashing

    // Better solution
    //     let html = "";
    // products.forEach(product => {
    //   html += `...`;
    // });
    // productsContainer.innerHTML = html;

    const html = `
        <div class="card" style="width: 22rem">
        <img src="${product.productImage}" class="card-img-top h-50" alt="...">
        <div class="card-body">
        <h5 class="card-title">${product.productName}</h5>
        <p class="card-text">${product.productPrice}</p>
        <p class="card-text">${product.productDescription}</p>
        <button
          type="button"
          class="btn btn-primary"
          data-id="${product.id}">
          Add to order
        </button>
        </div>
        </div>
        `;
    productsContainer.innerHTML += html;
  });
};

window.addEventListener("DOMContentLoaded", renderProducts);
productsContainer.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("btn")) {
  }
});

// To be more specific we pass from window to just the product container
productsContainer.addEventListener("click", async function (e) {
  e.preventDefault();
  if (e.target.classList.contains("btn-primary")) {
    const id = e.target.dataset.id;
    // Here we know what is the id and just pass it as an argument on the below function
    addProductShoppingCart(id);
  }
});

const addProductShoppingCart = async function (id) {
  // We replace the global id and just pass it as an argument on this function
  const cart = document.querySelector("#shoppingCart");
  const { productImage, productCategory, productName, productPrice } =
    await Api.getDataById("products", id);

  // 1. Get existing orders
  const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
  console.log(storedOrders);

  // 2. Add new product
  storedOrders.push({
    productId: id,
    category: productCategory,
    name: productName,
    price: productPrice,
  });

  // 3. Save back to localStorage
  localStorage.setItem("orders", JSON.stringify(storedOrders));

  const html = `
  <li
  class="list-group-item d-flex justify-content-between align-items-center"
        >
        <div class="d-flex">
        <img
        src="${productImage}"
        style="width: 40px"
        alt=""
        />
        <p>${productName}</p>
        </div>
        <div>
        <p>${productPrice}</p>
        </div>
        </li>`;
  cart.insertAdjacentHTML("beforeend", html);
};
