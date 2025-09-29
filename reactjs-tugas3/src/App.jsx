import Footer from "./assets/component/footer";
import Contact from "./assets/component/contact";
import Team from "./assets/component/team";
import Catalog from "./assets/component/produk";
import Book from "./assets/component/book";
import booksData from "./Utils/books";

import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-custom shadow fade-in">
        <div className="container">
          <NavLink className="navbar-brand d-flex align-items-center text-white fw-bold" to="/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
              alt="Logo"
              width="35"
              height="35"
              className="me-2"
            />
            Hahaha Store
          </NavLink>

          <button
            className="navbar-toggler bg-light"
            type="button"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" end className="nav-link nav-anim">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/books" className="nav-link nav-anim">
                  Books
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/produk" className="nav-link nav-anim">
                  Produk
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/team" className="nav-link nav-anim">
                  Team
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link nav-anim">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        {/* Halaman Home */}
        <Route
          path="/"
          element={
            <>
              {/* Hero Section */}
              <div
                className="container-fluid text-center py-5"
                style={{ backgroundColor: "rgba(30,58,138,0.85)" }}
              >
                <h1 className="fw-bold display-5 text-white">
                  Hahaha Store - Produk Makanan
                </h1>
                <p className="lead text-white">
                  Menawarkan berbagai makanan lezat, praktis, dan terjangkau untuk semua kalangan.
                </p>
              </div>

              {/* Carousel */}
              <div
                id="heroCarousel"
                className="carousel slide mb-4"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="3000">
                    <img
                      src="https://img.freepik.com/free-photo/fried-rice_74190-515.jpg"
                      className="d-block w-100"
                      alt="Nasi Goreng"
                      style={{ height: "400px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="carousel-item" data-bs-interval="3000">
                    <img
                      src="https://img.freepik.com/free-photo/asian-food-noodles-bowl_1203-1766.jpg"
                      className="d-block w-100"
                      alt="Mie Ayam"
                      style={{ height: "400px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="carousel-item" data-bs-interval="3000">
                    <img
                      src="https://img.freepik.com/free-photo/chicken-satay-skewers_140725-2187.jpg"
                      className="d-block w-100"
                      alt="Sate Ayam"
                      style={{ height: "400px", objectFit: "cover" }}
                    />
                  </div>
                </div>

                {/* Controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#heroCarousel"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#heroCarousel"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              {/* ⬇️ Tambahin di sini */}
                <div className="container my-5">
                  <h2 className="fw-bold display-5 text-white">Rekomendasi Buku</h2>
                  <hr />
                  <div className="row row-cols-1 row-cols-md-3 g-4">
                    {booksData.slice(0, 9).map((book) => (
                      <div className="col" key={book.id}>
                        <div className="card shadow-sm h-100">
                          <div className="card-body">
                            <h5 className="card-title">{book.title}</h5>
                            <p className="card-text">Penulis: {book.author}</p>
                            <span className="badge bg-primary">{book.price}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
            </>
          }
        />


        {/* Halaman lain */}
        <Route path="/books" element={<Book />} />
        <Route path="/produk" element={<Catalog />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>


      <Footer />
    </>
  );
}

export default App;
