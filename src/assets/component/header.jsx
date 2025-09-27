import React from "react";

const Header = () => {
  return (
    <header className="hero-section text-center text-white d-flex flex-column justify-content-center align-items-center">
      <h1 className="fw-bold display-4">Selamat Datang di Food Produk</h1>
      <p className="lead mt-3">Temukan makanan favoritmu dengan mudah dan cepat</p>
      <a href="#catalog" className="btn btn-lg btn-primary mt-4 shadow">Lihat Produk</a>
    </header>
  );
};

export default Header;
