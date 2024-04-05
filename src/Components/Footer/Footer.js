import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="top-container">
        <div className="container">
          <img
            src="https://www.qwackedu.com/static/media/logo.2a487917892639ad5b74.png"
            alt=""
            className="logo"
          />
          <p>Lets practice grammar</p>
          <p>
            Read More<i className="fa-solid fa-arrow-right icon"></i>
          </p>
          <div className="icons-container">
            <i className="fa-brands fa-facebook-f"></i>{" "}
            <i className="fa-brands fa-twitter"></i>{" "}
            <i className="fa-brands fa-instagram"></i>{" "}
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
        <div classNameName="container container-2">
          <h4>Quick Links</h4>
          <p>About Us</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div classNameName="container container-3">
          <h4>Get In Touch</h4>
          <p>
            <i className="fa-regular fa-envelope icon"></i>contact@qwackedu
          </p>
          <p>
            <i className="fa-solid fa-location-dot icon"></i> SF - 204 Aayna
            Complex
            <br /> Nr. Zydus Hospital, Habatpur Road
            <br />
            Thaltej - Ahmedabad Gujarat - 380054
          </p>
        </div>
      </div>
      <div className="bottom-container">
        <hr />
        <p>Copyright © 2022 Q.W.A.C.K. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
