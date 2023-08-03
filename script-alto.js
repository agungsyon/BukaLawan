
let data = [
  {
    id: 1,
    title: "Sejarah Nasional Indonesia",
    price: 100_000,
    stock: 7,
    description: "Mengenal tentang Sejarah Nasional pada perang dahulu",
    img: "./data-img/sejarah-nasional-indonesia.jpg",
  },
  {
    id: 2,
    title: "Mencapai Indonesia Merdeka",
    price: 130_000,
    stock: 6,
    description: "Sejarah lama ketika sebelum kemerdekaan",
    img: "./data-img/mencapai-indonesia-merdeka.jpg",
  },
  {
    id: 3,
    title: "Mohammad Hatta",
    price: 98_000,
    stock: 10,
    description: "Kumpulan cerita non fiksi mohammad hatta",
    img: "./data-img/mohammad-hatta.jpg",
  },
  {
    id: 4,
    title: "Sekitar Perang Kemerdekaan",
    price: 120_000,
    stock: 4,
    description: "Sejarah selepas perang kemerdekaan Indonesia",
    img: "./data-img/sekitar-perang-kemerdekaan.jpg",
  },
  {
    id: 5,
    title: "Untung Surapati",
    price: 99_000,
    stock: 21,
    description: "Pengorbanan dari Perjuangan Untung Surapati",
    img: "./data-img/untung-surapati.jpg",
  },
  {
    id: 6,
    title: "Perang Dunia I",
    price: 130_000,
    stock: 25,
    description: "Sejarah perang Dunia I 1914-1918",
    img: "./data-img/sejarah-perang-dunia1.jpg",
  },
  {
    id: 7,
    title: "Perang Dunia II",
    price: 130_000,
    stock: 27,
    description: "Sejarah perang Dunia II 1939-1945",
    img: "./data-img/sejarah-perang-dunia2.jpg",
  },
  {
    id: 8,
    title: "Jendral Sudirman",
    price: 130_000,
    stock: 7,
    description: "Kisah tentang bapak tentara Indonesia",
    img: "./data-img/jendral-sudirman.jpg",
  },
  {
    id: 9,
    title: "Gus Dur",
    price: 150_000,
    stock: 3,
    description: "Buku non fiksi Gusdur",
    img: "./data-img/gusdur.png",
  },
  {
    id: 10,
    title: "Hari Pahlawan Nasional",
    price: 90_000,
    stock: 8,
    description: "Cerita fiksi pahlawan Nasional",
    img: "./data-img/hari-pahlawan-nasional.webp",
  },
  {
    id: 11,
    title: "Jeritan Bangsa",
    price: 80_000,
    stock: 6,
    description: "Jeritan bangsa untuk keadilan",
    img: "./data-img/jeritan-rakyat-papua.jpg",
  },
  {
    id: 12,
    title: "K.H. Ahmad Dahlan",
    price: 100_000,
    stock: 9,
    description: "Buku biografi non fiksi Ahmad Dahlan",
    img: "./data-img/kh-ahmad-dahlan.jpg",
  },
  {
    id: 13,
    title: "IPS Cerdas Cermat",
    price: 60_000,
    stock: 21,
    description: "Buku sejarah untuk belajar sikecil",
    img: "./data-img/ips-cerdas-cermat.jpg",
  },
];

let keranjang = [];
const el = document.getElementById("booklist");

let cards = ""

for (const book of data) {
  let { id, title, price, stock, description, img } = book;

  const card = `
  <div class="col mb-5 ">
  <div class="card h-100 ">
      <!-- Product image-->
      <img class="card-img-top card-img-bukalawan" src="${img}" alt="..." width="350" height="350"/>
      <!-- Product details-->

      <div class="card-body p-4 ">
          <div class="text-center">
              <!-- Product name-->
              <h5 class="fw-bolder">${title}</h5>
              <p>${description}</p>
              <!-- Product price-->
              IDR.<B>${price}</B>
              <br>
              Stock : ${stock}
          </div>
      </div>
      <!-- Product actions-->
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div class="text-center"><a onclick="beli(${id})" class="btn btn-outline-dark mt-auto" href="#">Beli Buku</a></div>
      </div>
  </div>
  </div>`;
cards += card;
}

function calculateTotalPrice() {
  let total = 0;
  keranjang.forEach((item) => {
    total += item.price;
  });
  return total;
}

function removeFromCart(id) {
  const index = keranjang.findIndex((item) => item.id === id);
  if (index !== -1) {
      keranjang.splice(index, 1);
      updateCart();
  }
}

function closeCart() {
  const cartModal = document.getElementById("cartModal");
  cartModal.style.display = "none";
}

function checkout() {
  if (keranjang.length === 0) {
      alert("Your cart is empty. Please add items to the cart before checking out.");
      return;
  }
  const total = calculateTotalPrice();
  alert(`Checkout Successful!\nTotal Price: IDR. ${total}`);
  keranjang = [];
  updateCart();
}

el.innerHTML = cards;

function beli(id) {
  let counting = document.getElementById("counting");
  let cart = Number(counting.innerText);

  cart++;
  counting.innerText = cart.toString();

  const product = data.find((x) => x.id == id);
  keranjang.push(product);
  console.log(keranjang);
}

// Function to display the cart items in a modal
function showCart() {
    const cartModal = document.getElementById("cartModal");
    const cartContent = document.getElementById("cartContent");
    const totalPriceElement = document.getElementById("totalPrice");

    // Clear the previous cart items
    cartContent.innerHTML = "";

    // Calculate the total price of items in the cart
    let totalPrice = 0;
    keranjang.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <img src="${item.img}" alt="${item.title}" width="50" height="50" />
            <div class="cart-item-details">
                <span class="cart-item-title">${item.title}</span>
                <span class="cart-item-price">IDR. ${item.price}</span>
                <button class="btn btn-danger" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
        cartContent.appendChild(cartItem);
        totalPrice += item.price;
    });

    // Update the total price in the modal
    totalPriceElement.innerText = totalPrice;

    // Show cart modal
    cartModal.style.display = "block";
}



// Show cart button
const cartButton = document.querySelector(".btn.btn-outline-dark");
cartButton.addEventListener("click", showCart);

// Checkout button
const checkoutButton = document.getElementById("checkoutButton");
checkoutButton.addEventListener("click", checkout);