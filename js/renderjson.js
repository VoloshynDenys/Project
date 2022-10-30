const productsList = document.querySelector("#products-list");

async function getProducts() {
  const response = await fetch("./js/data.json");
  const productsArray = await response.json();

  renderProducts(productsArray)
}
getProducts()



function renderProducts(array) {
	array.forEach(product => {
		const productHTML = `<li class="product-card">
    <img src="${product.imgSrc}" alt="4cheeses" />
    <div class="product-info">
      <p class="name">${product.dishname}</p>
      <div class="options">
          <span class="radius">${product.radius} см</span>,
          <span class="weight">${product.weight} г</span>
      </div>
      <p class="desc">
			${product.desc}
      </p>

      <div class="row__bottom">
      <p class="price"><span>${product.price}</span> грн</p>
      <div class="counter">
        <button class="minus">-</button>
        <p class="count">
					<span>1</span>
				</p>
        <button class="plus">+</button>
      </div>
      <button class="add-in-cart">+  добавить в корзину</button>
      </div>


    </div>
  </li>`;
		
		productsList.insertAdjacentHTML("beforeend", productHTML)
	});
}
