import React, { useState, useEffect } from "react";
import "../../App.css";
import "../../assets/css/trx_addons_icons.css";
import "../../assets/css/fontello.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`header-container fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="logo">
        <img
          loading="lazy"
          className="logo_image"
          src="//gym-store.axiomthemes.com/wp-content/uploads/2023/10/logo-2.png"
          srcSet="//gym-store.axiomthemes.com/wp-content/uploads/2023/10/logo-2-retina.png 2x"
          alt="GYM Store"
          width="140"
          height="33"
        />
      </div>

      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/pages">Pages</a>
        <a href="/blog">Blog</a>
        <a href="/shop">Shop</a>
        <a href="/contacts">Contacts</a>
      </nav>
    </div>
  );
};

export default Header;
