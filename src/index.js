import * as Model from "./model.js"

const productsContainer = document.querySelector("#productsContainer")

const renderProducts = async function() {
    const products = await Model.getData("products")
    products.forEach(product => {    
        const html = `
        <div class="card" style="width: 22rem">
        <img src="${product.productImage}" class="card-img-top h-50" alt="...">
        <div class="card-body">
        <h5 class="card-title">${product.productName}</h5>
        <p class="card-text">${product.producPrice}</p>
        <p class="card-text">${product.productDescription}</p>
        <a href="#" class="btn btn-primary"><i class="bi bi-car"></i>Add to order</a>
        </div>
        </div>
        `
        productsContainer.innerHTML += html
    });
}

window.addEventListener("DOMContentLoaded", renderProducts)


productsContainer.addEventListener("click", function(e){
    e.preventDefault()
    if(e.target.classList.contains("btn")){
        console.log(e.target);
        
    }

})