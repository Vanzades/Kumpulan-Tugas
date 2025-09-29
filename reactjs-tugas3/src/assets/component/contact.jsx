import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="container my-5">
      <h2 className="fw-bold display-5 text-white">Hubungi Kami</h2>
      <hr />
      <div className="row g-4">
        {/* Form Kontak */}
        <div className="col-lg-7">
          <div className="card shadow border-0 rounded-4 p-4">
            <h5 className="mb-3 text-primary fw-bold">Kirim Pesan</h5>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">Nama</label>
                <input
                  type="text"
                  className="form-control border-primary"
                  id="name"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control border-primary"
                  id="email"
                  placeholder="email@contoh.com"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold">Pesan</label>
                <textarea
                  className="form-control border-primary"
                  id="message"
                  rows="5"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Kirim
              </button>
            </form>
          </div>
        </div>

        {/* Info Kontak */}
        <div className="col-lg-5">
          <div
            className="card shadow-lg border-0 rounded-4 p-4 h-100 text-white"
            style={{
              background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
            }}
          >
            <h5 className="mb-3 fw-bold">Informasi Kontak</h5>
            <p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="Email"
                width="20"
                className="me-2"
              />
              contact@hahaha-store.com
            </p>
            <p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
                alt="Telepon"
                width="20"
                className="me-2"
              />
              +62 852 1234 5678
            </p>
            <p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/535/535239.png"
                alt="Alamat"
                width="20"
                className="me-2"
              />
              Jl. Bogor Timur No. 1, Jawa Barat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
