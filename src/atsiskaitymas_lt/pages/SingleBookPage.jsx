// IMPORTS
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/allBooks.css";
import { Link, useParams } from "react-router-dom";
// IMPORTS

// MAIN EXPORT
export const SingleBookPage = () => {

    const { id } = useParams();
  // SET BOOKS ARRAY
  const [booksArray, setBooksArray] = useState([]);
  // SET BOOKS ARRAY

  // FETCH DATA
  useEffect(() => {
    axios
      .get(`https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books/${id}`)
      .then((response) => {
        setBooksArray(response.data);
        console.log("books", response.data);
      });
  }, []);
  // FETCH DATA

  console.log("books", booksArray);

  // RETURN
  return (
    <>
      <div className="book-list">
        <h5>Turimos knygos:</h5>

        {/* MAP BOOKS */}
        <div className="book-cards-container">
          {booksArray.map((book) => (
            <div
              key={book}
              className="book-card-div"
              author={book.author}
              cover={book.cover}
              title={book.title}
            >
              <h3>{book.title}</h3>
              <img src={book.cover} alt="BOOK_COVER" />
              <h4> {book.author} </h4>
            </div>
          ))}
        </div>
        {/* MAP BOOKS */}
      </div>
    </>
  );
  // RETURN
};
