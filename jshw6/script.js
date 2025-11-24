fetch("https://gutendex.com/books/")
  .then((res) => res.json())
  .then((data) => {
    const books = data.results;

    sortBooks(books);

    renderTable(books);

    const addBtn = document.getElementById("add-book-btn");
    addBtn.addEventListener("click", () => {
      const titleInput = document.getElementById("title-input");
      const authorInput = document.getElementById("author-input");
      const yearInput = document.getElementById("year-input");

      const title = titleInput.value.trim();
      const author = authorInput.value.trim();
      const year = parseInt(yearInput.value.trim());

      if (title && author && !isNaN(year)) {
        const newBook = {
          title: title,
          authors: [
            {
              name: author,
              birth_year: year,
            },
          ],
        };

        books.push(newBook);
        sortBooks(books);
        renderTable(books);

        titleInput.value = "";
        authorInput.value = "";
        yearInput.value = "";
      } else {
        alert("Please fill in all fields correctly.");
      }
    });

    const searchBtn = document.getElementById("search-btn");
    searchBtn.addEventListener("click", () => {
      const searchInput = document.getElementById("search-year-input");
      const searchYear = searchInput.value.trim();

      if (searchYear) {
        const filteredBooks = books.filter((book) => {
          const birthYear =
            book.authors.length > 0 ? book.authors[0].birth_year : "";
          return String(birthYear).includes(searchYear);
        });
        renderTable(filteredBooks);
      } else {
        renderTable(books);
      }
    });
  });

function sortBooks(books) {
  books.sort((a, b) => {
    const birthYearA =
      a.authors.length > 0 ? a.authors[0].birth_year : Infinity;
    const birthYearB =
      b.authors.length > 0 ? b.authors[0].birth_year : Infinity;
    return (birthYearA || Infinity) - (birthYearB || Infinity);
  });
}

function renderTable(books) {
  const container = document.querySelector(".books-container");
  container.innerHTML = "";

  const table = document.createElement("table");
  table.innerHTML = `
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Birth Year</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  `;

  const tbody = table.querySelector("tbody");

  books.forEach((book) => {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = book.title;
    row.appendChild(titleCell);

    const authorCell = document.createElement("td");
    const authorName =
      book.authors.length > 0 ? book.authors[0].name : "Unknown";
    authorCell.textContent = authorName;
    row.appendChild(authorCell);

    const yearCell = document.createElement("td");
    const birthYear =
      book.authors.length > 0 ? book.authors[0].birth_year : "N/A";
    yearCell.textContent = birthYear;
    row.appendChild(yearCell);

    const actionCell = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => {
      const index = books.indexOf(book);
      if (index > -1) {
        books.splice(index, 1);
      }
      renderTable(books);
    };
    actionCell.appendChild(deleteBtn);
    row.appendChild(actionCell);

    tbody.appendChild(row);
  });

  container.appendChild(table);
}
