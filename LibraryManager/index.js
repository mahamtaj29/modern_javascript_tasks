// Personal Library management system
let library = [
    {
      title: "Habits of Higly Effective People",
      author: "Stephen Covey",
      readStatus: false,
    },
    {
      title: "Mindset",
      author: "Carol Dweck",
      readStatus: false,
    },
    {
      title: "Think and Grow rich",
      author: "Napoleon Hill",
      readStatus: false,
    },
    {
      title: "Rich dad, Poor dad",
      author: "Robert T.Kiyosaki",
      readStatus: false,
    }
  ];
// 1- Function to add new books to personal library
// initializing new book that needs to be added
let newBook = {
  title: "Atomic Habits",
  author: "James Clear",
  readStatus: false,
};
// function to add new book to existing library
const addBook = (library, newBook) => {
  library.push(newBook);
}
addBook(library, newBook)
console.log("After adding a new book, library inlcudes: ",library);

// 2- Marking book as Read
let bookName = "Mindset"
let indexOfTitle = library.findIndex(item => item.title === bookName);
  if (indexOfTitle !== -1) {
    library[indexOfTitle].readStatus = true;
    console.log(`The status of book title (${bookName}) is changed, updated library is as follows: `,library);
  }  else{
    console.log("Book not found");
  }
// 3- Function to remove a book
let bookToBeRemoed = "Rich dad, Poor dad"
let removeBook = library.findIndex(item => item.title === bookToBeRemoed);
  if (removeBook !== -1) {
    library.splice(removeBook,1);
    console.log(`The book title (${bookToBeRemoed}) has been removed, updated library is as follows: `,library);
  }  else{
    console.log("Book Not found");
  }

//4- Function to fitler the contacts by their name
const listUnread = (unreadBooks) => {
  return unreadBooks.readStatus !== true;
};
const filteredBooks = library.filter(listUnread)

let mapLibrary = filteredBooks.map((filteredBooks) => {
  return filteredBooks.title;
});
console.log("unread books list using map function: ", mapLibrary);

//5- Find Books by author
let authorName = "Napoleon Hill";
const findBooksByAuthor = (findBooks) => {
  return findBooks.author === authorName;
};
const filterBooks = library.filter(findBooksByAuthor)
console.log("Filter books by author", filterBooks);

//6- Check if library includes a book by title
let searchTitle = "Mindset"
const bookExists = library.some(item => item.title === searchTitle)
if (bookExists){
  console.log(`The book (${searchTitle}) exit in library`);
}else {
  console.log(`The book (${searchTitle}) does not exit in library`);
}
