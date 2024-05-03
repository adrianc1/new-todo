const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = Boolean;
};

function addBookToLibrary(book) {
    const tableBody = document.getElementById('table-body');
    myLibrary.push(book);

    tableBody.innerHTML += `
                <tr> 
                  <td class='book-title'>${book.title}</td>
                  <td class='book-author'>${book.author}</td>
                  <td class='book-pages'>${book.pages}</td>
                  <td class='book-isRead'>${book.isRead}</td>
                  
                </tr>` 
};


const initializeForm = (() => {
    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const bookTitle = document.getElementById('title');
        const author = document.getElementById('author');
        const pages = document.getElementById('pages');
        const isRead = document.getElementById('');

        // creat new book instance
        let newBook = new Book(bookTitle.value, author.value, pages.value, true);
        
        // add book to library
        addBookToLibrary(newBook);

        // Close the dialog
        const dialog = document.getElementById('dialog');
        dialog.close();

        // Clear input fields
        bookTitle.value = '';
        author.value = '';
        pages.value = '';
        isRead.value = ''; // Assuming you want to clear this input as well
    });

    return () => {
        const dialog = document.getElementById('dialog');
        dialog.showModal(); 
    };
})();

const init = (() =>  {
    const addBookBtn = document.getElementById('add-book');
    addBookBtn.addEventListener('click', initializeForm);  
})();