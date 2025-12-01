let objects = [];
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    objects = data;
    renderObjects();
  });
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const newObject = {
    id: document.getElementById("id").value,
    title: document.getElementById("title").value,
    price: document.getElementById("price").value,
    category: document.getElementById("category").value,
    image: document.getElementById("image").value,
    rating: { rate: document.getElementById("rating").value },
    description: document.getElementById("description").value,
  };
  objects.push(newObject);
  clearForm();
  renderObjects();
});

function renderObjects() {
  const tableBody = document.getElementById("tBody");
  tableBody.innerHTML = "";
  objects.forEach((obj) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${obj.id}</td>
        <td>${obj.title}</td>
        <td>${obj.price}</td>
        <td>${obj.category}</td>
        <td>${obj.image}</td>
        <td>${obj.rating}</td>
        <td>${obj.description}</td>
        <td>
        <button onclick="editObject('${obj.id}')">Edit</button>
        <button onclick="deleteObject('${obj.id}')">Delete</button>
      </td>
    `;
    tableBody.appendChild(tr);
  });
}
function deleteObject(id) {
  objects = objects.filter((obj) => obj.id != id);
  renderObjects();
}
function clearForm() {
  document.getElementById("id").value = "";
  document.getElementById("title").value = "";
  document.getElementById("price").value = "";
  document.getElementById("category").value = "";
  document.getElementById("image").value = "";
  document.getElementById("rating").value = "";
  document.getElementById("description").value = "";
}
