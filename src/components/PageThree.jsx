import React from 'react'
import './PageThree.css'
import { NavLink } from 'react-router-dom';
import  { useState } from 'react';


const PageThree = () => {
   const [menuOpen, setMenuOpen] = useState(false); 
  return (
    <>
        {/*First Section*/}

      <div className="hero">

           <header> 
              <div id="Home">
                  <div className="logo">
                    <img src="./src/imgs/Slogo.png" alt="logo" width={186} />
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
                        <h2>Who We Are.</h2>
                        <div className="btn"><button>More Info <span>&darr;</span></button></div>
                    </div>
                </div>
            </div>
        </div>

       {/*Second Section*/}
       <div className="body">
           <div className="text">
              <p>
                Proudly Zimbabwean SuperFert Fertilizer is locally manufactured at <br /> our state of the art processing plant in Bindura. Only the highest <br />
                quality inputs are used across our range to ensure a dependable first- <br /> rate product with results that speek ofr themselves. <br /> <br />
                We operate nationwide in association with experinced third party <br /> distributors of agricultural inputs. Our internal transport and logistics <br />
                division provides consistenly reliable stock levels to large commercial <br />and corporate farming enterprises nationwide, as well as retail outlets <br />
                ensuring our retail partners are able to provide easily accessible and <br /> competitively priced fertilizers to all rural and small scale farmers. <br />
                Our in-house agronomist and agronomy partners are available to our <br /> customers both directly and through social media so that Zimbabwe's <br />
                farmers have the opportunity to get first technical advise and <br />the best chance at achieving the highest yields possible. <br /> <br />
                We provide fertilizers for a large number of demonstration plots in <br /> affiliation with various Seed Houses to promote the best input <br /> 
                package for various sectors and agricultural regions. SuperFert also <br /> work with Government Agencies such as Agritex and other technical <br />
                institutions supporting with the Federation of Young Farmers Club of <br /> Zimbabwe.    
              </p>
           </div>
           <div className="imag">
                <img src="./src/imgs/Farmer.jpg" alt="Farmers" />
          </div>
       </div>

       
      {/*THIRD COMPONENT*/}
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

export default PageThree
