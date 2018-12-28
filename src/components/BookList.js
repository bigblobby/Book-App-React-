import React from "react";

class BookList extends React.Component {
  renderBook = book => {
    return (
      <tr key={book.isbn}>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.isbn}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.props.removeBook(book.isbn)}
          >
            X
          </button>
        </td>
      </tr>
    );
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">ISBN</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>{this.props.books.map(book => this.renderBook(book))}</tbody>
      </table>
    );
  }
}

export default BookList;
