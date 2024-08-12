function createBook(title, author, pages, read, description) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.description = description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.";
    this.read = read;
};

function generateBookNode(book) {
    // Create all necessary elements of the book card on HTML
    const bookContainer = document.createElement('div'),
        bookCrease = document.createElement('div'),
        readStatus = document.createElement('div'),
        bookTitle = document.createElement('h2'),
        bookInfo = document.createElement('div'),
        bookDesc = document.createElement('p'),
        bookAuthor = document.createElement('p'),
        bookPages = document.createElement('p');

    // Add necessary classes on the element
    bookContainer.classList.add('book');
    bookCrease.classList.add('book-crease');
    readStatus.classList.add('read-status');
    bookInfo.classList.add('book-info');
    bookDesc.classList.add('description');
    bookAuthor.classList.add('author')
    if (!book.read) {
        readStatus.classList.add('invisible');
    };

    // Add content into the created elements
    readStatus.textContent = 'Read';
    bookTitle.textContent = book.title;
    bookDesc.textContent = `"${book.description}"`;
    bookAuthor.textContent = `— ${book.author} —`;
    bookPages.textContent = book.pages;

    // Reconstruct book
    [bookDesc, bookAuthor, bookPages].forEach((infoElement) => {
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
const bookCollection = [
    new createBook('Romance of the Three Kingdoms', 'Luo Guanzhong', 672, true, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, officiis.'),
    new createBook('The Art of War', 'Sun Tzu', 68, false, 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, eos?'),
    new createBook('Dao De Jing', 'Laozi', 37, false, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, dicta.'),
    new createBook('The 48 Laws of Power', 'Robert Greene', 452, true, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, natus.'),
    new createBook('The Subtle Art of Not Giving a F*ck', 'Mark Manson', 272, false, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, magnam!')
];

const library = document.querySelector('.library');
bookCollection.forEach((book) => {
    console.log(`adding ${book.title} to library`);
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