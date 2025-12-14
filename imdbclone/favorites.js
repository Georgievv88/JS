let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

function renderFavorites() {
  const list = document.getElementById("favorites-list");
  list.innerHTML = "";

  if (favorites.length === 0) {
    list.innerHTML = "<p>No favorites yet.</p>";
    return;
  }

  favorites.forEach((id) => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((show) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
          <img src="${show.image ? show.image.medium : ""}">
          <h3>${show.name}</h3>
          <span class="fav-btn">★</span>
        `;

        card.querySelector("img, h3").onclick = () => {
          window.location.href = `show.html?id=${show.id}`;
        };

        card.querySelector(".fav-btn").onclick = (e) => {
          e.stopPropagation();
          favorites = favorites.filter((f) => f !== show.id);
          localStorage.setItem("favorites", JSON.stringify(favorites));
          renderFavorites();
        };

        list.appendChild(card);
      });
  });
}

renderFavorites();
