import React, { useState } from 'react'
import './PageOne.css'
import { NavLink } from 'react-router-dom';
import seedco2 from '../imgs/seedco2.png';
import sTr from '../imgs/sTr.png';
import national from '../imgs/national.png';
import fsg2 from '../imgs/fsg2.png';
import Farmer from '../imgs/Farmer.jpg';
import Slogo from '../imgs/Slogo.png';
import copy from '../imgs/copy.png';
import bag from '../imgs/bag.png';


const PageOne = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/*FIRST SECTION*/}
      <div className="homepage">
        <header>
          <div id="Home">
            <div className="logo">
              <img src={Slogo} alt="" width={186} />

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



            {/*Hero Component*/}
            <div className="herosection">
                <h1>The Formula <br /> for Success, <br /> naturally. </h1>
                <p>Lorem ipsum dolor, sit amet consectetur <br />adipisicing elit. Necessitatibus quis ipsa recusandae <br /> perferendis?</p>
                    <div className="buttons">
                        <div className="btn1"><button>Contact Us</button></div>
                        <div className="btn2"><button>Products <span>&rarr;</span></button></div>
                        <div className="btn3">
                          <button onClick={() => {
                            const scrollAmount = window.innerHeight;
                            const maxScroll = document.body.scrollHeight - window.innerHeight;
                            const currentScroll = window.scrollY;

                            if (currentScroll < maxScroll) {
                              window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
                            }
                          }}>
                            SCROLL <br /> <span>&darr;</span>
                          </button>
                        </div>
                    </div>
            </div>
      </div>

      {/*SECOND COMPONENT*/}
      <div className="secondSection">
        <h2>Fertilisers. Seed. Grain.</h2>
        <p>SuperFet Fertilizeris powered by the FSG Company and is a proud patner of </p>
            <div className="patners">
                <img src={seedco2} alt="" width={130}/>
                <img src={sTr} alt="" width={130} />
                <img src={national} alt="" width={140} />
                <img src={fsg2} alt="" width={130} />
                <img src={seedco2} alt="" width={130} />
            </div>
      </div>

      {/*THIRD COMPONENT*/}
      <div className="bigImage">
        <div className="texts">
                <h2>Made on Zimbabwean soil, <br />for Africa's soil.</h2>
          <p>SuperFert fertilizer is manufactured in Zimbabwe, <br /> and proudly serves to enrich the soils of Africa.</p>
        </div>
      </div>

      {/*FOURTH COMPONENT*/}
      <div className="us">
        <div className="description">
           <h2>Who We Are.</h2>
           <p>We operate nationwide with experienced third <br /> party distributors of agricultural inputs. Our internal transport and logistics division provides consistently reliable stock levels 
            to large commercial and corporate farming enterprises nationwide, as well as retail outlets ensuring our retail partners are able to provide easily accessible and competitivley  priced 
            fertilizers to all rural and small scale farmers.</p>

            <button>Read More</button>

        </div>
        <div className="imageFarmer">
          <img src={Farmer} alt="" width={400} />

        </div>
      </div>

       {/*FIFTH COMPONENT*/}
        <div className="green">
          <div className="div1">
            <h1>SuperFert Products.</h1>
            <img src={Slogo} alt="" width={200} />

          </div>
           <div className="bags">
            <p>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Tenetur cum consequuntur maxime totam, nisi quam <br /> voluptatibus dolore ipsum debitis, molestiae commodi <br />quidem accusamus 
             exercitationem dolores corporis eaque <br /> asperiores quibusdam. Consectetur eveniet dolores <br />earum aspernatur magni accusantium, sunt <br />itaque similique blanditiis, unde.
            </p>
             <button> More Info</button>
            <img src={copy} alt="" width={800} />

          </div>
        </div>


      {/*SIXTH COMPONENT*/}
      
    <div className="sixth">
        <div className="frame">
            <div className="image-container">
              <img src={bag} alt="" width={60} />

            </div>
                <div className="text-container">
                  <h3>Tobacco Fertilizer</h3>
                  <p>Lorem ipsum dolor sit amet <br />consectetur, adipisicing elit. Itaque <br /> tempore inventore deleniti corporis rerum!</p>
                  <button>More info <span>&rarr;</span></button>
                </div>
        </div>

        <div className="frame">
            <div className="image-container">
              <img src={bag} alt="" width={60} />
            </div>
                <div className="text-container">
                  <h3>Tobacco Fertilizer</h3>
                  <p>Lorem ipsum dolor sit amet <br />consectetur, adipisicing elit. Itaque <br /> tempore inventore deleniti corporis rerum!</p>
                  <button>More info <span>&rarr;</span></button>
                </div>
        </div>

        <div className="frame">
            <div className="image-container">
              <img src={bag} alt="" width={60} />
            </div>
                <div className="text-container">
                  <h3>Tobacco Fertilizer</h3>
                  <p>Lorem ipsum dolor sit amet <br />consectetur, adipisicing elit. Itaque <br /> tempore inventore deleniti corporis rerum!</p>
                  <button>More info <span>&rarr;</span></button>
                </div>
        </div>

        <div className="frame">
            <div className="image-container">
              <img src={bag} alt="" width={60} />
            </div>
                <div className="text-container">
                  <h3>Tobacco Fertilizer</h3>
                  <p>Lorem ipsum dolor sit amet <br />consectetur, adipisicing elit. Itaque <br /> tempore inventore deleniti corporis rerum!</p>
                  <button>More info <span>&rarr;</span></button>
                </div>
        </div>

        <div className="frame">
            <div className="image-container">
              <img src={bag} alt="" width={60} />
            </div>
                <div className="text-container">
                  <h3>Tobacco Fertilizer</h3>
                  <p>Lorem ipsum dolor sit amet <br />consectetur, adipisicing elit. Itaque <br /> tempore inventore deleniti corporis rerum!</p>
                  <button>More info <span>&rarr;</span></button>
                </div>
        </div>

        <div className="frame">
            <div className="image-container">
              <img src={bag} alt="" width={60} />
            </div>
                <div className="text-container">
                  <h3>Tobacco Fertilizer</h3>
                  <p>Lorem ipsum dolor sit amet <br />consectetur, adipisicing elit. Itaque <br /> tempore inventore deleniti corporis rerum!</p>
                  <button>More info <span>&rarr;</span></button>
                </div>
        </div>
     </div>

     {/*SEVENTH COMPONENT*/}
     <div className="seven">
        <div className="withForm">
          <h2>For <br /> Queries, or <br /> Inquiries</h2>
          <p>Get in touch with us.</p>
        </div>
        <div className="foRm">
              <form action="">
                <input type="text" name="Name" placeholder="Full Name*"/>
                <input type="email" name="Email" placeholder="Email Address*"/>
                <textarea name="Message" rows="6" placeholder="Your Message*"></textarea>
                <button type="submit"class="btn btn2">Send Message</button>
          </form>
        </div>
     </div>


      {/*EIGHTH COMPONENT*/}
      
      <div className="footer">
        <div className="Links">
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

        <div className="Links">
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

        <div className="Links">
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

        <div className="Links">
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
      
      </div>

      <div className="lastImg">
         <img src="./src/imgs/fSg.png" alt="" width={90} />
      </div>

    </>
  )
}

export default PageOne
