import React from "react";

const Produk = () => {
    return (
        <div id="produk">
            <section className="py-3 text-center container-fluid catalog-header">
                <div className="row py-4">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-bold text-black">Daftar Produk Makanan</h1>
                        <p className="lead text-black">
                            Pilihan makanan lezat yang siap memanjakan lidahmu. Klik untuk pesan sekarang!
                        </p>
                    </div>
                </div>
            </section>


            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-2 row-cols-md-3 g-4">

                        {[
                            { title: "Nasi Goreng Spesial", img: "https://img.freepik.com/free-photo/fried-rice_74190-515.jpg" },
                            { title: "Mie Ayam Lezat", img: "https://img.freepik.com/free-photo/asian-food-noodles-bowl_1203-1766.jpg" },
                            { title: "Sate Ayam", img: "https://img.freepik.com/free-photo/chicken-satay-skewers_140725-2187.jpg" },
                            { title: "Bakso Kuah Panas", img: "https://img.freepik.com/free-photo/chicken-satay-skewers_140725-2187.jpg" },
                            { title: "Ayam Geprek", img: "https://img.freepik.com/free-photo/fried-chicken-with-chili-sauce_74190-525.jpg" },
                            { title: "Es Teh Manis", img: "https://img.freepik.com/free-photo/fried-rice_74190-515.jpg" },
                        ].map((item, index) => (
                            <div className="col" key={index}>
                                <div className="card shadow-lg border-0 rounded-4 h-100">
                                    <img src={item.img} className="card-img-top rounded-top-4" alt={item.title} style={{ height: "250px", objectFit: "cover" }} />
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <h5 className="card-title fw-bold">{item.title}</h5>
                                        <p className="card-text">Rasa istimewa dengan harga terjangkau. Cocok untuk makan siang atau malam!</p>
                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <button className="btn btn-sm btn-primary">Pesan</button>
                                            <span className="text-muted">Hanya Rp20.000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Produk;
