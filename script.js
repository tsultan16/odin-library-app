const myLibrary = [];

function Book(title, author, num_pages, read=false) {
  // the constructor...
  this.title = title;
  this.author= author;
  this.num_pages = num_pages;
  this.read = read;
  this.html_card = null;

  this.getInfo = function () {
    return `${this.title} by ${this.author}, ${this.num_pages} pages, ${this.read ? "finished reading" : "not finished reading"}`;
  }; 

}

function addBookToLibrary(title, author, num_pages) {
    // do stuff here
    let newBook = new Book(title, author, num_pages);
    
    // create book card element, add to shelf
    card = document.createElement("div");
    card.classList.add("book-card");
    
    p_title = document.createElement("p");
    p_title.textContent = title;
    p_title.classList.add("book-title");
    
    p_author = document.createElement("p");
    p_author.textContent = author;
    p_author.classList.add("book-author");
    
    card.appendChild(p_title);
    card.appendChild(p_author);
    shelfGrid.appendChild(card);
    newBook.html_card = card;    
    
    myLibrary.push(newBook);
}

function printAllBooks() {
    myLibrary.forEach(b => {
        console.log(b.getInfo(), "\n");        
    });
}   
    

 
const shelfGrid = document.querySelector(".shelf-container")
const dialog = document.querySelector("dialog");
const add_book_btn = document.querySelector(".add-btn");
const dialog_close_btn = document.querySelector(".dialog-close-btn");  

// event listeners for dialog box 
add_book_btn.addEventListener("click", () => {
    dialog.showModal();
});

dialog_close_btn.addEventListener("click", () => {
    dialog.close();
});


addBookToLibrary("The Trial", "Franz Kafka", 312);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 589);
addBookToLibrary("Kafka on the Shore", "Haruki Murakami", 276);

printAllBooks();





