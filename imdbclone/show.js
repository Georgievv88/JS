const id = new URLSearchParams(window.location.search).get("id");

function loadShow() {
  fetch(`https://api.tvmaze.com/shows/${id}`)
    .then((res) => res.json())
    .then((show) => {
      const container = document.getElementById("show-container");
      container.innerHTML = `
        <img src="${show.image ? show.image.original : ""}">
        <div class="show-info">
          <h1>${show.name}</h1>
          <div class="details">
            <span>Status: ${show.status}</span>
            <span>Genres: ${show.genres.join(", ")}</span>
            <span>Rating: ${show.rating.average || "N/A"}</span>
          </div>
        </div>
      `;

      document.getElementById("show-summary").innerHTML =
        show.summary || "No description available.";
    });
}

function loadEpisodes() {
  fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
    .then((res) => res.json())
    .then((episodes) => {
      const epSection = document.getElementById("episodes");
      epSection.innerHTML = "";
      episodes.forEach((ep) => {
        epSection.innerHTML += `
          <div class="episode">
            <strong>${ep.name}</strong> (S${ep.season} · E${ep.number})
          </div>
        `;
      });
    });
}

function loadCast() {
  fetch(`https://api.tvmaze.com/shows/${id}/cast`)
    .then((res) => res.json())
    .then((list) => {
      const castDiv = document.getElementById("cast");
      castDiv.innerHTML = "";
      list.forEach((item) => {
        castDiv.innerHTML += `
          <div class="cast-member">
            <img src="${
              item.person.image
                ? item.person.image.medium
                : "https://via.placeholder.com/100"
            }">
            <strong>${item.person.name}</strong>
            <span>${item.character.name}</span>
          </div>
        `;
      });
    });
}

loadShow();
loadEpisodes();
loadCast();
