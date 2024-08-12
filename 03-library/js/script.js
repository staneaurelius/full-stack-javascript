function createBook(title, author, pages, read, description) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.description = description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.";
    this.read = read;
};

function generateReadChecklist() {
    // Generate bookmark svg
    const checklist = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    checklist.setAttribute('width', '16px');
    checklist.setAttribute('height', '16px');
    checklist.setAttribute('viewBox', '0 0 24 24');

    // Generate Path
    const checklistPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    checklistPath.setAttribute('d', 'M23 12L20.6 9.2L20.9 5.5L17.3 4.7L15.4 1.5L12 3L8.6 1.5L6.7 4.7L3.1 5.5L3.4 9.2L1 12L3.4 14.8L3.1 18.5L6.7 19.3L8.6 22.5L12 21L15.4 22.5L17.3 19.3L20.9 18.5L20.6 14.8L23 12M18.7 16.9L16 17.5L14.6 19.9L12 18.8L9.4 19.9L8 17.5L5.3 16.9L5.5 14.1L3.7 12L5.5 9.9L5.3 7.1L8 6.5L9.4 4.1L12 5.2L14.6 4.1L16 6.5L18.7 7.1L18.5 9.9L20.3 12L18.5 14.1L18.7 16.9M16.6 7.6L18 9L10 17L6 13L7.4 11.6L10 14.2L16.6 7.6Z');
    checklistPath.setAttribute('fill', 'currentColor');

    checklist.appendChild(checklistPath);
    return checklist;
};

function generateBookmarkButton() {
    const bookmarkButton = document.createElement('button');
    bookmarkButton.setAttribute('type', 'button');
    bookmarkButton.classList.add('bookmark-btn');

    // Generate bookmark svg
    const bookmarkSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    bookmarkSvg.setAttribute('width', '16px');
    bookmarkSvg.setAttribute('height', '16px');
    bookmarkSvg.setAttribute('viewBox', '0 0 24 24');

    // Generate Path
    const bookmarkPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    bookmarkPath.setAttribute('d', 'M9.47 9.65L8.06 11.07L11 14L16.19 8.82L14.78 7.4L11 11.18M17 3H7C5.9 3 5 3.9 5 5L5 21L12 18L19 21V5C19 3.9 18.1 3 17 3M17 18L12 15.82L7 18V5H17Z');
    bookmarkPath.setAttribute('fill', 'currentColor');

    bookmarkSvg.appendChild(bookmarkPath);
    bookmarkButton.appendChild(bookmarkSvg);
    return bookmarkButton;
};

function generateDeleteButton() {
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('type', 'button');
    deleteButton.classList.add('delete-btn');

    // Generate bookmark svg
    deleteSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    deleteSvg.setAttribute('width', '16px');
    deleteSvg.setAttribute('height', '16px');
    deleteSvg.setAttribute('viewBox', '0 0 24 24');

    // Generate Path
    deleteSvgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    deleteSvgPath.setAttribute('d', 'M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z');
    deleteSvgPath.setAttribute('fill', 'currentColor');

    deleteSvg.appendChild(deleteSvgPath);
    deleteButton.appendChild(deleteSvg);
    return deleteButton;
}

function generateBookNode(book) {
    // Create all necessary elements of the book card on HTML
    const bookContainer = document.createElement('div'),
        bookCrease = document.createElement('div'),
        readChecklist = generateReadChecklist(),
        readStatus = document.createElement('div'),
        bookTitle = document.createElement('h2'),
        bookInfo = document.createElement('div'),
        bookDesc = document.createElement('p'),
        bookAuthor = document.createElement('p'),
        bookmarkContainer = document.createElement('div'),
        bookmarkButton = generateBookmarkButton(),
        deleteButton = generateDeleteButton(),
        bookPages = document.createElement('p');

    // Add necessary classes on the element
    bookContainer.classList.add('book');
    bookCrease.classList.add('book-crease');
    readStatus.classList.add('read-status');
    bookInfo.classList.add('book-info');
    bookDesc.classList.add('description');
    bookAuthor.classList.add('author');
    bookmarkContainer.classList.add('bookmark');
    if (!book.read) {
        readStatus.classList.add('invisible');
    };

    // Add content into the created elements
    readStatus.textContent = 'Read';
    bookTitle.textContent = book.title;
    bookDesc.textContent = `"${book.description}"`;
    bookAuthor.textContent = `— ${book.author} —`;
    bookPages.textContent = `${book.pages} pages`;

    // Reconstruct book
    readStatus.appendChild(readChecklist);

    [bookPages, bookmarkButton, deleteButton].forEach((bookmarkElement) => {
        bookmarkContainer.appendChild(bookmarkElement);
    });

    [bookDesc, bookAuthor, bookmarkContainer].forEach((infoElement) => {
        bookInfo.appendChild(infoElement);
    });

    [bookCrease, readStatus, bookTitle, bookInfo].forEach((bookElement) => {
        bookContainer.appendChild(bookElement);
    });

    return bookContainer;
};

function addBookToLibrary(libraryNode, book) {
    const bookNode = generateBookNode(book);
    libraryNode.appendChild(bookNode);
};


// Create 5 default books and add to HTML library container using loop
let bookCollection = [
    new createBook('Romance of the Three Kingdoms', 'Luo Guanzhong', 672, true, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, officiis.'),
    new createBook('The Art of War', 'Sun Tzu', 68, false, 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, eos?'),
    new createBook('Dao De Jing', 'Laozi', 37, false, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, dicta.'),
    new createBook('The 48 Laws of Power', 'Robert Greene', 452, true, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, natus.'),
    new createBook('The Subtle Art of Not Giving a F*ck', 'Mark Manson', 272, false, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, magnam!')
];

const library = document.querySelector('.library');
bookCollection.forEach((book) => {
    addBookToLibrary(library, book);
});


// Add listener to button that would open to dialog for adding new book
const addBookButton = document.querySelector('#add-book'),
    dialogWindow = document.querySelector('dialog'),
    closeDialogButton = document.querySelector('#close');

addBookButton.addEventListener('click', () => {
    dialogWindow.showModal();
});

closeDialogButton.addEventListener('click', () => {
    dialogWindow.close();
});


// Add listener to bookmark button to toggle read status
function addReadStatusButton() {
    const bookmarkButtons = document.querySelectorAll('.bookmark-btn');
    bookmarkButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const bookInfoContainer = e.target.closest('.book-info');
            const bookReadContainer = bookInfoContainer.parentNode.querySelector('.read-status');
            bookReadContainer.classList.toggle('invisible');
        });
    });
};
addReadStatusButton();


// Add listener to delete buttons for deleting books
function addDeleteButtons() {
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const bookInfoContainer = e.target.closest('.book-info');
            const removedBook = bookInfoContainer.parentNode;
            const removedBookTitle = removedBook.querySelector('h2').textContent;
            removedBook.remove();

            bookCollection = bookCollection.filter((book) => {
                return book.title !== removedBookTitle;
            });
            console.log(`Deleted book ${removedBookTitle}`);
        });
    });
};
addDeleteButtons();


// Add book via modal
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const title = document.querySelector('#book-title').value;
    const description = document.querySelector('#book-description').value;
    const author = document.querySelector('#book-author').value;
    const pages = document.querySelector('#page-count').value;
    const read = document.querySelector('#read').checked;

    // Create new book, add to collection, and display on page
    const newBook = new createBook(title, author, pages, read, description);
    bookCollection.push(newBook);
    addBookToLibrary(library, newBook);
    addReadStatusButton();
    addDeleteButtons();

    console.log(`Added new book ${title}`);
    dialogWindow.close();
});