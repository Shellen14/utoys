import React, { useState, useEffect, useRef } from "react";

const HeaderGalFakhri = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const slideMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        slideMenuRef.current &&
        !slideMenuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="headergal">
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        rel="stylesheet"
      />
      <div className="menu" ref={menuRef}>
        <i className="fas fa-bars" onClick={toggleMenu}></i>
        <span>Menu</span>
      </div>
      <div className="logo">
        <img src={"/assets/Logo.png"} alt="Logo"></img>
      </div>
      <div className="actions">
        <a href="#">Contact us</a>
      </div>
      <div
        className={`slide-menu ${isMenuOpen ? "show" : ""}`}
        ref={slideMenuRef}
      >
        <a href="#" className="close-btn" onClick={closeMenu}>
          <i className="fas fa-times"></i>
          <span>Close</span>
        </a>
        <a href="/">Home</a>
      </div>
    </header>
  );
};

export default HeaderGalFakhri;
