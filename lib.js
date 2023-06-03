var books = [
  { title: "Wings of Fire", author: "APJ Abdul Kalam", subject: "India's journey to self-reliance in technology", publishDate: "1999-10-15" },
  { title: "The Whispering Shadows", author: "Emily Anderson", subject: "Mystery", publishDate: "2022-03-15" },
  { title: "The Forgotten Pages", author: "Benjamin Matthews", subject: "Historical Fiction", publishDate: "2023-07-04" },
  { title: "Echoes of Destiny", author: "Victoria Hartman", subject: "Fantasy", publishDate: "2021-11-21" },
  { title: "The Art of Connection", author: "Daniel Cooper", subject: "Self-Help", publishDate: "2022-09-08" },
  { title: "Shattered Dreams", author: "Olivia Campbell", subject: "Drama", publishDate: "2023-05-12" },
  { title: "The Science of Happiness", author: "Michael Thompson", subject: "Psychology", publishDate: "2021-10-03" },
  { title: "Under a Scarlet Sky", author: "Isabella Rossi", subject: "Historical fiction", publishDate: "2022-06-07" },
  { title: "Beyond the Horizon", author: "Matthew Hughes", subject: "Science fiction", publishDate: "2023-12-19" },
  { title: "The Hidden Truth", author: "Rachel Parker", subject: "Thriller", publishDate: "2022-08-16" },
  { title: "The Power of Now", author: "Christopher Evans", subject: "Personal Development", publishDate: "2022-02-02" },
  { title: "The Enigma Code", author: "Sarah Walker", subject: "Mystery", publishDate: "2023-04-25" },
  { title: "A Journey Through Time", author: "Benjamin Grant", subject: "History", publishDate: "2022-09-10" },
  { title: "The Lost City", author: "Jessica Turner", subject: "Adventure", publishDate: "2023-07-19" },
  { title: "The Art of War", author: "Sun Tzu", subject: "Military Strategy", publishDate: "2022-09-01" },
  { title: "The Mindful Way", author: "Sophia Adams", subject: "Mindfulness", publishDate: "2022-03-09" },
  { title: "The Last Stand", author: "James Robertson", subject: "Historical fiction", publishDate: "2023-11-02" },
  { title: "The Alchemist", author: "Paulo Coelho", subject: "Fiction", publishDate: "1988-03-01" },
  { title: "The Spark of Imagination", author: "Oliver Anderson", subject: "Children Literature", publishDate: "2023-01-14" },
  { title: "The Silent Witness", author: "Emily Baker", subject: "Crime fiction", publishDate: "2022-10-05" },
  { title: "The Power of Habit", author: "Charles Duhigg", subject: "Psychology", publishDate: "2012-02-28" }
];

function renderBooks(books) {
  var tmp = document.getElementById("count");
  tmp.innerHTML = "COUNT: " + books.length;

  var table = document.getElementById("books-table");
  table.innerHTML = "";


  var headerRow = document.createElement("tr");
  var headers = ["Title", "Author", "Subject", "Publish Date"];
  for (var i = 0; i < headers.length; i++) {
    var th = document.createElement("th");
    th.textContent = headers[i];
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  for (var i = 0; i < books.length; i++) {
    var book = books[i];

    var row = document.createElement("tr");
    var titleCell = document.createElement("td");
    var authorCell = document.createElement("td");
    var subjectCell = document.createElement("td");
    var publishDateCell = document.createElement("td");

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    subjectCell.textContent = book.subject;
    publishDateCell.textContent = book.publishDate;

    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(subjectCell);
    row.appendChild(publishDateCell);

    table.appendChild(row);
  }
}

function applyFilters() {
  var title = document.getElementById("title").value.trim().toLowerCase();
  var author = document.getElementById("author").value.trim().toLowerCase();
  var subject = document.getElementById("subject").value.trim().toLowerCase();
  var publishDate = document.getElementById("publish-date").value;

  var filteredBooks = books.filter(function (book) {
    return (title === "" || book.title.toLowerCase().includes(title))
      && (author === "" || book.author.toLowerCase().includes(author))
      && (subject === "" || book.subject.toLowerCase().includes(subject))
      && (publishDate === "" || book.publishDate === publishDate);
  });

  renderBooks(filteredBooks);
}

renderBooks(books);