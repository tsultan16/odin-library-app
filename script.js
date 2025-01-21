const myLibrary = [];

function Book(title, author, read=false) {
  // the constructor...
  this.title = title;
  this.author= author;
  this.read = read;
  this.removed = false;
  this.html_card = null;

  this.getInfo = function () {
    return `${this.title} by ${this.author}, ${this.read ? "finished reading" : "not finished reading"}`;
  }; 

}

function addBookToLibrary(title, author) {
    // do stuff here
    let newBook = new Book(title, author);
    
    // create book card element, add to shelf
    const card = createBookCard(title, author, myLibrary.length);
    shelfGrid.appendChild(card);
    newBook.html_card = card;    
    myLibrary.push(newBook);
}

function createBookCard(title, author, array_index) {
    // create book card element, add to shelf
    const card = document.createElement("div");
    card.classList.add("book-card");

    const book_info = document.createElement("div");
    book_info.classList.add("book-info");
    
    const p_title = document.createElement("p");
    p_title.textContent = title;
    p_title.classList.add("book-title");

    const p_author = document.createElement("p");
    p_author.textContent = author;
    p_author.classList.add("book-author");

    book_info.appendChild(p_title);
    book_info.appendChild(p_author);
    
    const remove_book = document.createElement("div");
    remove_book.classList.add("remove-book");
    remove_btn = document.createElement("button");
    remove_btn.id = "remove-btn";
    remove_btn.textContent = "X";
    // add array index of book to remove buttons data attribute, will use this later to delete the book card
    remove_btn.dataset.index = String(array_index);
    
    remove_btn.addEventListener("click", (e) => {
        const target = e.target;
    
        index = parseInt(target.dataset.index);
        console.log(`Clicked remove button on book at array index ${index}`);    
        // get book object from array
        book_obj = myLibrary[index];
        book_obj.removed = true;
        // remove the book card from html 
        const card = book_obj.html_card;
        card.remove();

    });
    
    remove_book.appendChild(remove_btn);
    card.appendChild(book_info);
    card.appendChild(remove_book);

    return card;
}

function printAllBooks() {
    myLibrary.forEach(b => {
        console.log(b.getInfo(), "\n");        
    });
}   
    

 
const shelfGrid = document.querySelector(".shelf-container");
const dialog = document.querySelector("dialog");
const add_book_btn = document.querySelector("#add-btn");
const dialog_cancel_btn = document.querySelector("#cancel-btn"); 
const dialog_confirm_btn = document.querySelector("#confirm-btn"); 
const form_input_title = document.querySelector("#title");
const form_input_author = document.querySelector("#author");
const form_input_num_pages = document.querySelector("#num-pages");
const form_invalid_msg = document.querySelector("#invalid-msg");

// event listeners for dialog box 
add_book_btn.addEventListener("click", () => {
    dialog.showModal();
});

dialog_cancel_btn.addEventListener("click", () => {
    dialog.close();
});

dialog_confirm_btn.addEventListener("click", (event) => {
    event.preventDefault(); // We don't want to submit this fake form
    
    // get book details from form input
    const title = form_input_title.value;
    const author = form_input_author.value;   
    console.log("Form input: ", title, author);
 
    if (title === "" || author === "") {
        // show invalid input message
        form_invalid_msg.textContent = "Invalid input. All fields required!";
        form_invalid_msg.style.color = "red";
    } else {
        form_invalid_msg.textContent = "";
        // add book to library
        addBookToLibrary(title, author);
        form_input_title.value = "";
        form_input_author.value = ""; 
        dialog.close();
    }


});



addBookToLibrary("The Trial", "Franz Kafka", 312);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 589);
addBookToLibrary("Kafka on the Shore", "Haruki Murakami", 276);

printAllBooks();




