let products = JSON.parse(localStorage.getItem("products")) || [];
let editIndex = null;

const form = document.getElementById("form");
const tBody = document.getElementById("tBody");

if (products.length === 0) {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      products = data.map((p) => ({
        id: p.id,
        title: p.title,
        price: p.price,
        category: p.category,
        image: p.image,
        rate: p.rating?.rate || 0,
        description: p.description,
      }));
      localStorage.setItem("products", JSON.stringify(products));
      renderTable();
    })
    .catch((err) => console.error("Failed to fetch products:", err));
} else {
  renderTable();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const product = {
    id: document.getElementById("id").value,
    title: document.getElementById("title").value,
    price: document.getElementById("price").value,
    category: document.getElementById("category").value,
    image: document.getElementById("image").value,
    rate: document.getElementById("rate").value,
    description: document.getElementById("description").value,
  };

  if (editIndex === null) {
    products.push(product);
  } else {
    products[editIndex] = product;
    editIndex = null;
    document.getElementById("submitBtn").textContent = "Add Product";
  }

  localStorage.setItem("products", JSON.stringify(products));
  form.reset();
  renderTable();
});

function renderTable() {
  tBody.innerHTML = "";

  products.forEach((p, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${p.id}</td>
      <td>${p.title}</td>
      <td>${p.price}</td>
      <td>${p.category}</td>
      <td><img src="${p.image}" width="50"></td>
      <td>${p.rate}</td>
      <td>
        <button type="button" onclick="editProduct(${index})">Edit</button>
        <button type="button" onclick="deleteProduct(${index})">Delete</button>
      </td>
    `;

    tBody.appendChild(row);
  });
}

function editProduct(index) {
  const p = products[index];

  document.getElementById("id").value = p.id;
  document.getElementById("title").value = p.title;
  document.getElementById("price").value = p.price;
  document.getElementById("category").value = p.category;
  document.getElementById("image").value = p.image;
  document.getElementById("rate").value = p.rate;
  document.getElementById("description").value = p.description;

  editIndex = index;
  document.getElementById("submitBtn").textContent = "Save Changes";
}

function deleteProduct(index) {
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  renderTable();
}
