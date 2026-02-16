const homeToProducts = async () => {
  const goToProduct = await fetch(
    "https://fakestoreapi.com/products/categories",
  );
  const res = await goToProduct.json();
  const mainProduct = document.getElementById("product-btn");
  mainProduct.innerHTML = "";
  res.forEach((category) => {
    const button = document.createElement("button");

    button.classList =
      "px-6 py-3 border border-gray-200 text-[#4b5563] cursor-pointer rounded-full font-medium hover:border-[#5842ff] hover:text-[#5842ff] bg-white category-btn";

    button.innerText = category;
    button.onclick = () => {
      specificProductsDisplay(category);
    };

    mainProduct.appendChild(button);
  });
};

const productDisplay = async () => {
  const productsData = await fetch("https://fakestoreapi.com/products");
  const res = await productsData.json();

  const displayProducts = document.getElementById("all-products-display");
  displayProducts.innerHTML = "";

  res.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add(
      "card",
      "bg-white",
      "w-full",
      "shadow-sm",
      "hover:shadow-md",
      "transition-all",
      "border",
      "border-gray-200",
    );

    card.innerHTML = `
        <figure class="px-4 pt-4 bg-[#f3f7ff]">
          <img
            src="${product.image}" 
            alt="${product.title}"
            class="h-64 w-full object-contain"
          />
        </figure>

        <div class="card-body p-5">
          <div class="flex justify-between items-center mb-2">
            <span class="bg-[#e0e7ff] text-[#5842ff] text-xs font-semibold px-3 py-1 rounded-md">
              ${product.category}
            </span>
            <div class="flex items-center text-orange-400 gap-1">
              <i class="fa-solid fa-star text-xs"></i>
              <span class="text-xs text-gray-500 font-sans">${product.rating.rate} (${product.rating.count})</span>
            </div>
          </div>

          <h2 class="text-lg font-bold text-gray-800 line-clamp-1" title="${product.title}">
            ${product.title}
          </h2>
          <p class="text-xl font-extrabold text-gray-900 mt-2">$${product.price}</p>

          <div class="flex gap-3 mt-6">
            <button class="btn btn-outline border-gray-300 text-gray-600 hover:bg-gray-100 flex-1 gap-2">
              <i class="fa-regular fa-eye"></i> Details
            </button>
            <button class="btn bg-[#5842ff] hover:bg-[#4632d4] border-none text-white flex-1 gap-2">
              <i class="fa-solid fa-cart-shopping"></i> Add
            </button>
          </div>
        </div>
    `;
    displayProducts.appendChild(card);
  });
};

const specificProductsDisplay = async (category) => {
  const specificProduct = await fetch(
    `https://fakestoreapi.com/products/category/${category}`,
  );
  const res = await specificProduct.json();
  const displaySpecificProducts = document.getElementById(
    "all-products-display",
  );
  displaySpecificProducts.innerHTML = " ";
  res.forEach((product) => {
    // console.log(categories)
    const card = document.createElement("div");
    card.classList.add("card", "bg-white", "w-full", "shadow-sm", "border");
    card.innerHTML = `
          <figure class="px-4 pt-4 bg-[#f3f7ff]">
          <img
            src="${product.image}" 
            alt="${product.title}"
            class="h-64 w-full object-contain"
          />
        </figure>

        <div class="card-body p-5">
          <div class="flex justify-between items-center mb-2">
            <span class="bg-[#e0e7ff] text-[#5842ff] text-xs font-semibold px-3 py-1 rounded-md">
              ${product.category}
            </span>
            <div class="flex items-center text-orange-400 gap-1">
              <i class="fa-solid fa-star text-xs"></i>
              <span class="text-xs text-gray-500 font-sans">${product.rating.rate} (${product.rating.count})</span>
            </div>
          </div>

          <h2 class="text-lg font-bold text-gray-800 line-clamp-1 title="${product.title}" ">
            ${product.title}
          </h2>
          <p class="text-sm text-gray-500 mt-1 line-clamp-2">
            ${product.description}
        </p>
          <p class="text-xl font-extrabold text-gray-900 mt-2">$${product.price}</p>

          <div class="flex gap-3 mt-6">
            <button class="btn btn-outline border-gray-300 text-gray-600 hover:bg-gray-100 flex-1 gap-2">
              <i class="fa-regular fa-eye"></i> Details
            </button>
            <button class="btn bg-[#5842ff] hover:bg-[#4632d4] border-none text-white flex-1 gap-2">
              <i class="fa-solid fa-cart-shopping"></i> Add
            </button>
          </div>
        </div>
      `;
    displaySpecificProducts.appendChild(card);
  });
};

// productDisplay();
homeToProducts();
