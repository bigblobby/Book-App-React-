import React from "react";

class BookForm extends React.Component {
  titleRef = React.createRef();
  authorRef = React.createRef();
  isbnRef = React.createRef();

  handleSubmit = e => {
    // Prevent page refesh
    e.preventDefault();

    // Check if all fields have been filled in
    if (
      this.titleRef.current.value === "" ||
      this.authorRef.current.value === "" ||
      this.isbnRef.current.value === ""
    ) {
      this.props.showAlert("Please fill out all fields", "danger");
      return;
    }
    // Create new book
    const book = {
      title: this.titleRef.current.value,
      author: this.authorRef.current.value,
      isbn: parseInt(this.isbnRef.current.value)
    };

    // Add book to App's state
    this.props.addBook(book);

    // Show add book alert
    // this.props.showAlert("Book Added!", "success");

    // Reset the form
    e.currentTarget.reset();
  };

  render() {
    return (
      <form id="book-form" className="mb-5" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            className="form-control"
            type="text"
            ref={this.titleRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            id="author"
            type="text"
            className="form-control"
            ref={this.authorRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="isbn">ISBN:</label>
          <input
            id="isbn"
            className="form-control"
            type="number"
            ref={this.isbnRef}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Add Book <i className="fas fa-plus ml-2" />
        </button>
      </form>
    );
  }
}

export default BookForm;
