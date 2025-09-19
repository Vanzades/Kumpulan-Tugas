// Dummy data, bisa ambil dari produk.js & pelanggan.js jika pakai backend/JSON
let produkToko = [
  {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
  {id: 2, nama: "Mouse", harga: 200000, stok: 10},
  {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
];

let pelangganToko = [
  {id: 1, nama: "vanza", email: "vanza@mail.com"},
  {id: 2, nama: "vanza1", email: "vanza1@mail.com"}
];

let pesanan = [];

// Isi dropdown pelanggan & produk
function isiDropdown() {
  const pelangganSelect = document.getElementById("pilihPelanggan");
  pelangganToko.forEach(p => {
    pelangganSelect.innerHTML += `<option value="${p.id}">${p.nama}</option>`;
  });

  const produkSelect = document.getElementById("pilihProduk");
  produkToko.forEach(p => {
    produkSelect.innerHTML += `<option value="${p.id}">${p.nama} - Rp ${p.harga.toLocaleString()}</option>`;
  });
}

// Tambah pesanan
document.getElementById("formPesanan").addEventListener("submit", function(e) {
  e.preventDefault();
  const pelangganId = parseInt(document.getElementById("pilihPelanggan").value);
  const produkId = parseInt(document.getElementById("pilihProduk").value);
  const jumlah = parseInt(document.getElementById("jumlah").value);

  const pelanggan = pelangganToko.find(p => p.id === pelangganId);
  const produk = produkToko.find(p => p.id === produkId);

  if (!pelanggan || !produk || jumlah <= 0) return;

  const total = produk.harga * jumlah;
  pesanan.push({pelanggan: pelanggan.nama, produk: produk.nama, jumlah, total});
  tampilkanPesanan();
  e.target.reset();
});

// Tampilkan pesanan di tabel
function tampilkanPesanan() {
  const tbody = document.getElementById("tabelPesanan");
  tbody.innerHTML = "";
  let grandTotal = 0;
  pesanan.forEach(p => {
    grandTotal += p.total;
    tbody.innerHTML += `
      <tr>
        <td>${p.pelanggan}</td>
        <td>${p.produk}</td>
        <td>${p.jumlah}</td>
        <td>Rp ${p.total.toLocaleString()}</td>
      </tr>
    `;
  });
  document.getElementById("grandTotal").innerText = "Rp " + grandTotal.toLocaleString();
}

isiDropdown();
