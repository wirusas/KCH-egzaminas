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
export const RegistrationPage = () => {
  // MODAL SETTINGS
  const [showModal, setShowModal] = useState(false);

  // SET MODAL
  const modalButtonClick = (setState) => {
    setShowModal(setState);
  };
  // MODAL SETTINGS

  // FORM DATA
  const [form, setForm] = useState({
    id: "",
    title: "",
    author: "",
    category: "",
    price: "",
    cover: "",
    reserved: "",
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
        <h1 style={{ textAlign: "center" }}>
          TECHIN knygynas
        </h1>

        {/* MAIN BODY */}
        {/* fORM */}
        <article>
          <form onSubmit={handleFormSubmit} className="registration-form-local">
            <label>
              <p>Id:*</p>
              <input
                required
                type="text"
                name="id"
                value={form.id}
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
              <p>author:*</p>
              <input
                required
                type="text"
                name="author"
                value={form.author}
                onChange={handlerForm}
              />
            </label>

            <div>
              <label>
                <p>Kategorija:</p>
                <select
                  name="category"
                  value={form.category}
                  onChange={handlerForm}
                >
                  <option value="">Pasirinkti</option>
                  <option value="Clasic">Clasic</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Distopian">Distopian</option>
                  <option value="Romance">Romance</option>
                  <option value="Fantasy">Fantasy</option>
                </select>
              </label>
            </div>
            <br />
            <label>
              <p>Price:*</p>
              <input
                required
                type="number"
                name="price"
                value={form.price}
                onChange={handlerForm}
              />
            </label>
            <br />
            <label>
              <p>Cover:*</p>
              <input
                required
                type="url"
                name="cover"
                value={form.cover}
                onChange={handlerForm}
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
            <p>Dėkojame Jūsų knyga {form.title} įtraukta</p>
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
