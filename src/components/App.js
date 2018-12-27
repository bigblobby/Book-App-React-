import React from "react";
import BookForm from "./BookForm";
import BookList from "./BookList";

class App extends React.Component {
  constructor() {
    super();

    // Set initial state
    this.state = {
      books: [],
      alertMessage: null
    };
  }

  // This function fires on component mount (page load in this case)
  componentDidMount() {
    // 1. Check if there are any books in localstorage
    const localStorageBooks = localStorage.getItem("books");
    // 2. If so, set the books on state
    if (localStorageBooks) {
      this.setState({ books: JSON.parse(localStorageBooks) });
    }
  }

  // This function fires when the state/component is updated
  componentDidUpdate() {
    localStorage.setItem("books", JSON.stringify(this.state.books));
  }

  addBook = book => {
    // 1. Get a copy of books in state
    const books = [...this.state.books];
    // 2. Add the new book
    books.push(book);
    // 3. Set the new state with the new book added
    this.setState({ books });
    // 4. Show alert when book is added
    this.showAlert("Book Added!", "success");
  };

  removeBook = bookisbn => {
    // 1. Get a copy of books in state
    const books = [...this.state.books];
    // 2. Loop over the books and find the correct one to delete
    books.forEach((book, index) => {
      if (bookisbn === book.isbn) {
        books.splice(index, 1);
      }
    });
    // 3. Update the state because we removed a book
    this.setState({ books });
    // 4. Show alert when book is removed
    this.showAlert("Book Removed!", "danger");
  };

  showAlert = (message, type) => {
    // If showAlert has been called do this
    if (message) {
      this.setState({
        alertMessage: <div className={`alert alert-${type}`}>{message}</div>
      });
      // Remove the alert notification after 3 seconds and update state
      setTimeout(() => {
        this.setState({ alertMessage: null });
      }, 3000);
    }
  };

  render() {
    return (
      <div className="container">
        <header className="header">
          <h1>Book List</h1>
          {this.state.alertMessage}
        </header>
        <BookForm addBook={this.addBook} showAlert={this.showAlert} />
        {/* ONLY DISPLAY TABLE IF THERE ARE BOOKS */}
        {this.state.books.length > 0 && (
          <BookList books={this.state.books} removeBook={this.removeBook} />
        )}
      </div>
    );
  }
}

export default App;
