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
// cart
let keranjang = [];

const el = document.getElementById("booklist");
const bodypayment = document.getElementById("bodypayment");
const countTotal = document.getElementById("countTotal");
let counting = document.getElementById("counting");

let cards = "";
let paymets = "";

// jalan di awal
loopBuku();
function loopBuku() {
  el.innerHTML = "";
  cards = "";
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

  el.innerHTML = cards;
}

function beli(id) {
  let cart = Number(counting.innerText);

  cart++;

  counting.innerText = cart.toString();

  const product = data.find((x) => x.id == id);
  keranjang.push(product);
  product.stock--;

  loopBuku();
  addToModal();
  countTotal.innerHTML = calculateTotalPrice();
}

function addToModal() {
  bodypayment.innerHTML = "";
  paymets = "";
  for (const item of keranjang) {
    let { id, title, price, stock, description, img } = item;
    const payment = `<div class="card rounded-3 mb-4">
                        <div class="card-body p-4">
                          <div
                            class="row d-flex justify-content-between align-items-center">
                            <div class="col-md-2 col-lg-2 col-xl-2">
                              <img
                                src="${img}"
                                class="img-fluid rounded-3"
                                alt="${title}" />
                            </div>
                            <div class="col-md-3 col-lg-3 col-xl-3">
                              <p class="lead fw-normal mb-2">${title}</p>
                            </div>
                            <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                              <button
                                class="btn btn-link px-2"
                                onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                <i class="fas fa-minus"></i>
                              </button>
  
                              <button
                                class="btn btn-link px-2"
                                onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                <i class="fas fa-plus"></i>
                              </button>
                            </div>
                            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h5 class="mb-0">${price}</h5>
                            </div>
                            <div class="text-end">
                              <button onclick="removeFromCart(${id})" type="button"
                              class="btn btn-warning btn-block btn-lg">hapus<button>
                            </div>
                          </div>
                        </div>`;
    paymets += payment;
  }
  bodypayment.innerHTML = paymets;
}

// qty
// <input
//   id="form1"
//   min="0"
//   name="quantity"
//   value="2"
//   type="number"
//   class="form-control form-control-sm"
// />;

// function baru

// untuk total harga buku di cart
function calculateTotalPrice() {
  let total = 0;
  keranjang.forEach((item) => {
    total += item.price;
  });
  return total;
}

// hapus buku di cart
function removeFromCart(id) {
  let cart = Number(counting.innerText);
  const index = keranjang.findIndex((item) => item.id === id);
  if (index !== -1) {
    keranjang.splice(index, 1);
  }

  cart--;

  counting.innerText = cart.toString();
  countTotal.innerHTML = calculateTotalPrice();
  addToModal();
}

// success
function checkout() {
  if (keranjang.length === 0) {
    alert(
      "Your cart is empty. Please add items to the cart before checking out.",
    );
    return;
  }

  alert(`Checkout Successful!\nTotal Price: IDR. ${calculateTotalPrice()}`);
  keranjang = [];
  updateCart();
}
