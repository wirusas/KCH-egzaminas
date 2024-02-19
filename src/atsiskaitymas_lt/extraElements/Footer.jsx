// IMPORTS
import "../styles/footerStyles.css";
import facebook from "../img/facebook.jpg";
import linked from "../img/linked.png";
import tviter from "../img/tviter.png";
// IMPORTS

// MAIN EXPORT
export const Footer = () => {
  
  return (
    <>
      <div className="main-footer-div-local">
        <div className="contact-info">
          <code>Susisiekite su mumis</code>
          <p> +370 222 666 333 </p>
          <a href="#@" id="contacts-local">email@mes.lt  </a>
        </div>

        <div className="social-icons-local">
          <a href="https://www.facebook.com/" target="blank">
            <img src={facebook} alt="" />
          </a>

          <a href="https://www.linkedin.com/" target="blank">
            <img src={linked} alt="" />
          </a>

          <a href="https://twitter.com/" target="blank">
            <img src={tviter} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};
