// IMPORTS
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/allBooks.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Navigation } from "../extraElements/Navigation";
import { Footer } from "../extraElements/Footer";
// IMPORTS

// MAIN EXPORT
export const BookSearch = () => {
  // SET BOOKS ARRAY
  const [booksArray, setBooksArray] = useState([]);
  // SET BOOKS ARRAY

  // GET FORM DATA
  const [category, setCategory] = useState("");

  const setBookCat = (event) => {
    setCategory(event.target.value);
  };
  // GET FORM DATA

  // FETCH DATA
  useEffect(() => {
    axios
      .get("https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books")
      .then((response) => {
        setBooksArray(response.data);
        console.log("books", response.data);
      });
  }, []);
  // FETCH DATA

  // FILTER DATA
  const filteredBooks = category
    ? booksArray.filter((book) => book.category === category)
    : booksArray;
  // FILTER DATA

  // RETURN
  return (
    <>
      {/* FORM */}
      <header>
          <Navigation />
        </header>
      <form>
        <label>
          <h3>Filtravimui pasirinkite kategoriją:</h3>
          <select value={category} onChange={setBookCat}>
            <option value="">Rinktis</option>
            <option value="Clasic">Clasic</option>
            <option value="Fiction">Fiction</option>
            <option value="Distopian">Distopian</option>
            <option value="Romance">Romance</option>
            <option value="Fantasy">Fantasy</option>
          </select>
        </label>
      </form>
      {/* FORM */}

      {/* MAP BOOKS */}
      <div className="book-cards-container">
        {filteredBooks.map((book) => (
          <div className="book-card-div" key={book.id}>
            <Link to={`/singledonor/${book.id}`}>
              <div>
                <h3>{book.title}</h3>
                <img src={book.cover} alt="BOOK_COVER" />
                <h4>{book.author}</h4>
              </div>
            </Link>
            <Button>
              {book.reserved === false ? "Gražinti" : "Išduoti skaitytojui"}
            </Button>
          </div>
        ))}
      </div>
      {/* MAP BOOKS */}
      <footer>
          <Footer />
        </footer>
    </>
  );
  // RETURN
};
