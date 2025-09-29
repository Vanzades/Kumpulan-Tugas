// src/assets/component/Book.jsx
import React, { useState } from "react";
import booksData from "../../Utils/books";

const Book = () => {
    const [books, setBooks] = useState(booksData);
    const [newBook, setNewBook] = useState({ title: "", author: "", price: "" });

    const handleChange = (e) => {
        setNewBook({ ...newBook, [e.target.name]: e.target.value });
    };

    const addBook = () => {
        if (!newBook.title || !newBook.author || !newBook.price) return;
        const newEntry = { id: books.length + 1, ...newBook };
        setBooks([...books, newEntry]);
        setNewBook({ title: "", author: "", price: "" });
    };

    return (
        <div className="container my-5">
            <h2 className="fw-bold display-5 text-white">Daftar Buku</h2>
            <hr />
            {/* Form tambah buku */}
            <div className="card p-3 mb-4 shadow-sm">
                <h5 className="mb-3">Tambah Buku Baru</h5>
                <div className="row g-2">
                    <div className="col-md-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Judul"
                            name="title"
                            value={newBook.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Penulis"
                            name="author"
                            value={newBook.author}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Harga"
                            name="price"
                            value={newBook.price}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-primary w-100" onClick={addBook}>
                            Tambah
                        </button>
                    </div>
                </div>
            </div>

            {/* List buku */}
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {books.map((book) => (
                    <div className="col" key={book.id}>
                        <div className="card shadow-lg h-100">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">{book.title}</h5>
                                <p className="card-text">Penulis: {book.author}</p>
                                <span className="badge bg-primary">{book.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Book;
