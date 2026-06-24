// Type declarations and global variables

type Author = {
  authorId: number;
  name: string;
  nationality: string;
};

type Book = {
  bookId: number;
  title: string;
  author: Author;
  genre: "fiction" | "non-fiction" | "science" | "history" | "biography";
  available: boolean;
  rating: number;
};

// Array of authors

const authors: Author[] = [
  {
    authorId: 1,
    name: "JK Rowling",
    nationality: "England",
  },
  {
    authorId: 2,
    name: "William Shakespeare",
    nationality: "England",
  },
  {
    authorId: 3,
    name: "Stephen King",
    nationality: "United States",
  },
];

// Array of books

const books: Book[] = [
  {
    bookId: 1,
    title: "Harry Potter and the Philosopher's Stone",
    author: authors[0]!,
    genre: "fiction",
    available: true,
    rating: 4,
  },
  {
    bookId: 2,
    title: "Harry Potter and the Chamber of Secrets",
    author: authors[0]!,
    genre: "fiction",
    available: false,
    rating: 4,
  },
  {
    bookId: 3,
    title: "Harry Potter and the Goblet of Fire",
    author: authors[0]!,
    genre: "fiction",
    available: true,
    rating: 5,
  },
  {
    bookId: 4,
    title: "Hamlet",
    author: authors[1]!,
    genre: "fiction",
    available: true,
    rating: 5,
  },
  {
    bookId: 5,
    title: "The Shining",
    author: authors[2]!,
    genre: "fiction",
    available: false,
    rating: 4,
  },
];

// Function to borrow book:

function borrowBook(bookId: number): Book | undefined {
  const selectedBook = books.find((book) => book.bookId === bookId);
  if (!selectedBook) {
    console.error(`Selected Book ID ${bookId} not found`);
    return;
  }
  if (selectedBook.available === false) {
    console.error("Book is already borrowed");
    return;
  } else {
    selectedBook.available = false;
  }
  return selectedBook;
}

borrowBook(1);

// Function to return book

function returnBook(bookId: number): Book | undefined {
  const selectedBook = books.find((book) => book.bookId === bookId);
  if (!selectedBook) {
    console.error(`Selected Book ID ${bookId} not found`);
    return;
  }
  if (selectedBook.available === false) {
    selectedBook.available = true;
    return selectedBook;
  } else
    console.error(
      "Our records already show that this book ID has been returned",
    );
  return;
}

returnBook(1);
returnBook(2);
returnBook(3);

// Function to return available books
function getAvailableBooks(): Book[] {
  return books.filter((availableBooks) => availableBooks.available === true);
}

console.log(getAvailableBooks());

// Function to get books by author

function getBooksByAuthor(authorId: number): Book[] {
  return books.filter((book) => book.author.authorId === authorId);
}

console.log("Books by JK Rowling", getBooksByAuthor(1));

// function to get top rated books

function getTopRatedBooks(minimumRating: number): Book[] {
  return books
    .filter((book) => book.rating >= minimumRating)
    .sort((a, b) => b.rating - a.rating);
}

console.log("TOP RATED BOOKS", getTopRatedBooks(5));
