let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

window.onload = () => fetchShows();

function fetchShows() {
  fetch("https://api.tvmaze.com/shows")
    .then((res) => res.json())
    .then((data) => renderShows(data))
    .catch((err) => console.error(err));
}

function searchShows() {
  const query = document.getElementById("searchInput").value.trim();
  if (!query) return fetchShows();

  fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    .then((res) => res.json())
    .then((data) => {
      const shows = [];
      data.forEach((item) => {
        shows.push(item.show);
      });
      renderShows(shows);
    })
    .catch((err) => console.error(err));
}

function renderShows(shows) {
  const results = document.getElementById("results");
  results.innerHTML = "";

  shows.forEach((show) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${
        show.image ? show.image.medium : "https://via.placeholder.com/210x295"
      }">
      <h3>${show.name}</h3>
      <span class="fav-btn">${favorites.includes(show.id) ? "★" : "☆"}</span>
    `;

    card.querySelector("img, h3").onclick = () => {
      window.location.href = `show.html?id=${show.id}`;
    };

    card.querySelector(".fav-btn").onclick = (e) => {
      e.stopPropagation();
      toggleFavorite(show.id, e.target);
    };

    results.appendChild(card);
  });
}

function toggleFavorite(id, btn) {
  id = Number(id);
  if (favorites.includes(id)) {
    favorites = favorites.filter((f) => f !== id);
    btn.textContent = "☆";
  } else {
    favorites.push(id);
    btn.textContent = "★";
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
}
