// IMPORTS
import { Navigation } from "../extraElements/Navigation";
import { Footer } from "../extraElements/Footer";
import "../styles/registrationPage.css";
import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// IMPORTS

// MAIN EXPORT
export const Reviews = () => {
  // MODAL SETTINGS
  const [showModal, setShowModal] = useState(false);

  // SET MODAL
  const modalButtonClick = (setState) => {
    setShowModal(setState);
  };
  // MODAL SETTINGS

  // FORM DATA
  const [form, setForm] = useState({
    user: "",
    title: "",
    review: "",
  });
  // FORM DATA

  // HANDLE FORM
  const handlerForm = (event) => {
    setForm((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const [serverResponse, setServerResponse] = useState({});
  const [error, setError] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books",
        form
      );
      setServerResponse(response.data);
      console.log(serverResponse);
      modalButtonClick(true);
    } catch (error) {
      setError("Failed to submit the form. Please try again later.");
      console.error("Form submission error:", error);
    }
  };
  // HANDLE FORM

  // RETURN
  return (
    <>
      {/* HEADER */}
      <main>
        <header>
          <Navigation />
        </header>
        <h1 style={{ textAlign: "center" }}>TECHIN knygynas</h1>

        {/* MAIN BODY */}
        {/* fORM */}
        <article>
          <form onSubmit={handleFormSubmit} className="registration-form-local">
            <label>
              <p>User:*</p>
              <input
                required
                type="text"
                name="user"
                value={form.user}
                onChange={handlerForm}
              />
            </label>
            <br />
            <label>
              <p>Title:*</p>
              <input
                required
                type="text"
                name="title"
                value={form.title}
                onChange={handlerForm}
              />
            </label>
            <br />

            <label>
              <p>Review:*</p>
              <textarea
                required
                name="review"
                value={form.review}
                onChange={handlerForm}
                style={{width: "30ch", height: "20ch"}}
              />
            </label>

            <br />

            <button type="submit">Pateikti</button>
          </form>
        </article>
        {/* FORM */}
        {/* MAIN BODY */}

        {/* FOOTER */}
        <footer>
          <Footer />
        </footer>
        {/* FOOTER */}
      </main>

      {/* TESTING LINE */}
      <h1>
        {form.id} {form.title} {form.author}
        {form.bloodGroup} {form.category}
      </h1>

      {/* MODAL */}
      {showModal && (
        <Modal show={showModal} onHide={() => modalButtonClick(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Registracijos patvirtinimas</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Dėkojame Atsiliepimas apie knygą {form.title} priimtas</p>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={() => modalButtonClick(false)}>uždaryti</Button>
          </Modal.Footer>
        </Modal>
      )}
      {/* MODAL */}

      {/* ERROR MESSAGE */}
      {error && <p>{error}</p>}
    </>
  );
  // RETURN
};
