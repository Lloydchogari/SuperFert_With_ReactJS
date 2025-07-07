import React from 'react'
import './PageTwo.css'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Slogo from '../imgs/Slogo.png'
import fSg from '../imgs/fSg.png'
import pic from '../imgs/pic.jpg'

const PageTwo = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Scroll to section by ID
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/*First Section*/}
      <div className="hero">
        <header>
          <div id="Home">
            <div className="logo">
              <img src={Slogo} alt="logo" width={186} />
            </div>
            <button
              className={`hamburger-icon${menuOpen ? " open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              <span />
              <span />
              <span />
            </button>
            <nav className={`nav-links${menuOpen ? " mobile-menu-open" : ""}`}>
              <ul>
                <li>
                  <NavLink
                    to="/PageOne"
                    end
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/PageThree"
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                    onClick={() => setMenuOpen(false)}
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                    onClick={() => setMenuOpen(false)}
                  >
                    Crops & Fertilizers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                    onClick={() => setMenuOpen(false)}
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/PageTwo"
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                    onClick={() => setMenuOpen(false)}
                  >
                    News & Events
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="glassmorphism">
          <div className="content">
            <div className="text1">
              <h2>News & Events.</h2>
              <div className="btn">
                <button onClick={() => scrollToSection("News")}>
                  More Info <span>&darr;</span>
                </button>
              </div>
            </div>

            <div className="text2">
              <h5>Next Events | <span>Roadshow // 27 May 2023</span></h5>
              <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Laborum neque quisquam <br />molestiae.
                <br /><br /><span>01</span>/ 04</p>
            </div>
          </div>
        </div>
      </div>

      {/*Second Component*/}
      <div className="News" id="News">
        <h2>Latest News</h2>
        <hr />
        <div className="theimages">
          {/* Repeat image/news cards */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="image1" key={i}>
              <div className="frames">
                <div className="images-container">
                  <img src={pic} alt="bag" width={80} />
                </div>
                <div className="text-container">
                  <h4>SuperFert is exhibiting at the <br /> ADMA Agricultural Show.</h4>
                  <p>SuperFert is exhibiting at the ADMA <br /> Agricultural Show, Thornpark Polo <br /> Grounds on the Mazowe Road, Come <br /> and have a...</p>
                  <button>More info <span>&rarr;</span></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*Footer*/}
      <div className="footer">
        {Array.from({ length: 4 }).map((_, i) => (
          <div className="Links" key={i}>
            <h3>Quick Links</h3>
            <ul>
              <a href="">Home</a>
              <a href="">Who We Are</a>
              <a href="">Where to Buy</a>
              <a href="">Bindura Processing Plant</a>
              <a href="">Tools & Services</a>
              <a href="">News & Events</a>
              <a href="">Contact Us</a>
            </ul>
          </div>
        ))}
      </div>

      <div className="lastImg">
        <img src={fSg} alt="" width={90} />
      </div>
    </>
  )
}

export default PageTwo;
