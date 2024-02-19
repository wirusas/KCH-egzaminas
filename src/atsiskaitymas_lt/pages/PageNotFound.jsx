// IMPORTSimport "../styles/pageNotFound.css";
import notFound from "../img/notFound.gif";
import { useNavigate } from "react-router-dom";
// IMPORTS

// MAIN EXPORT
export const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="main-container-not-found">
        <h2>Apgailestaujame puslapis nerastas</h2>
        <img src={notFound} alt="SMILE" />
        <br />
        <button onClick={() => navigate("/mainpage")}>Grįžti namo</button>
      </div>
    </>
  );
};
