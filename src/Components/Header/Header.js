import "./Header.css";

const Header = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <div>
          <img
            src="https://www.qwackedu.com/static/media/logo.2a487917892639ad5b74.png"
            alt=""
            className="h-logo"
          />
          <ul>
            <li>Home</li>
            <li>Worksheets</li>
            <li>Vocabulary</li>
            <li>Quiz</li>
            <li>Competition</li>
            <li>About Us</li>
          </ul>
        </div>
        <button className="login-btn">
          <i className="fa-solid fa-arrow-right-to-bracket"></i>Login
        </button>
      </nav>

      <div className="mobile-nav">
        <img
          src="https://www.qwackedu.com/static/media/logo.2a487917892639ad5b74.png"
          alt=""
        />
        <div>
          <button className="login-btn">
            <i className="fa-solid fa-arrow-right-to-bracket"></i>Login
          </button>{" "}
          <button
            class="cross-btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>

      <div
        class="offcanvas offcanvas-start sidebar"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header off-canvas">
          <button
            type="button"
            id="closeBtn"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <img
            src="https://www.qwackedu.com/static/media/logo.2a487917892639ad5b74.png"
            alt=""
            className="sidebar-logo"
          />
          <div className="sidebar-item">Home</div>
          <div className="sidebar-item">Worksheets </div>
          <div className="sidebar-item">Vocabulary </div>
          <div className="sidebar-item">Quiz</div>
          <div className="sidebar-item">Competition </div>
          <div className="sidebar-item">About Us </div>
          <div className="icons-container">
            <i className="fa-brands fa-facebook-f sidebar-icon"></i>
            <i className="fa-brands fa-instagram sidebar-icon"></i>
          </div>
          <p>
            <i className="fa-regular fa-envelope mail-icon sidebar-icon"></i>
            support@qwackeducation.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
