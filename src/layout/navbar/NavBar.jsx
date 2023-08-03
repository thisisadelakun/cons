import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './NavBar.css'

import { tokenInfo, } from '../../models/db'

// import react icons here
import { FiMenu } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

//  import bootsrap components here
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const closeMenu = () => setShow(false);
  const [hasShadow, setHasShadow] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
        setHasScrolled(true);
      } else {
        setHasShadow(false);
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`nav-container ${hasShadow && hasScrolled ? 'shadow show-background' : ''}`} fixed='top'>

      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-2 containers" >
          <Container fluid>
            <Navbar.Brand>
              <div className='title-logo'>
                <NavLink to="/">
                  <img src={tokenInfo.logo} alt="ConstitutionERC logo" className='rounded-circle' />
                </NavLink>
              </div>
            </Navbar.Brand>
            <FiMenu
              onClick={handleShow}
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              style={{ width: "30px", height: "50px", cursor: "pointer", marginTop: "1rem", color: "#01AEF2" }}
              className='menu-bar'
            />
            <Navbar.Offcanvas
              show={show} onHide={handleClose}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="offcanvasbgr"
              style={{ width: "100%" }}

            >
              <Offcanvas.Header className="offcanvas-header">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  {/* Empty */}
                </Offcanvas.Title>
                <button className="custom-close-button" onClick={handleClose}>
                  <CgClose className='custom-close-button' />
                </button>
              </Offcanvas.Header>



              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-0 gap-2">

                  <li className="nav-item nav-item-border">
                    <Link
                      className="nav-link"
                      onClick={() => closeMenu()}
                      exact="true"
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item nav-item-border">
                    <Link
                      className="nav-link"
                      onClick={() => closeMenu()}
                      exact="true"
                    >
                      Token
                    </Link>
                  </li>
                  <li className="nav-item nav-item-border">
                    <Link
                      className="nav-link"
                      onClick={() => closeMenu()}
                      exact="true"
                    >
                      ICO Introduce

                    </Link>
                  </li>

                  <li className="nav-item nav-item-border">
                    <Link
                      className="nav-link"
                      onClick={() => closeMenu()}
                      exact="true"
                    >
                      Road Map

                    </Link>
                  </li>

                </Nav>

                <Nav className="justify-content-end flex-grow-1 pe-0 gap-2">
                  <li className="nav-item nav-item-border">
                    <Link
                      className="nav-link"
                      onClick={() => closeMenu()}
                      exact="true"
                    >
                      PRESALE
                    </Link>
                  </li>

                  <li className='nav-link-socios'>
                    <a href="https://twitter.com/constitutionERC" target="_blank" rel="noopener noreferrer">
                      <img src={tokenInfo.twitter} alt="twitter" width={30} />
                    </a>
                  </li>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default NavBar;
