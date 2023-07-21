document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var searchQuery = document.getElementById("search-input").value.toLowerCase();
    var bookResults = document.getElementById("book-results");
    var books = bookResults.getElementsByTagName("li");
  
    for (var i = 0; i < books.length; i++) {
      var bookTitle = books[i].getElementsByTagName("h3")[0].textContent.toLowerCase();
      var bookAuthor = books[i].getElementsByTagName("p")[0].textContent.toLowerCase();
  
      if (bookTitle.includes(searchQuery) || bookAuthor.includes(searchQuery)) {
        books[i].style.display = "block"; // Show matching books
      } else {
        books[i].style.display = "none"; // Hide non-matching books
      }
    }
  });
  
    const sidebar = document.querySelector('.sidebar');

    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        sidebar.style.transform = 'translateX(0)';
      } else {
        sidebar.style.transform = 'translateX(200px)';
      }
    });