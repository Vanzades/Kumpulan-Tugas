// ==============================
// DATA PRODUK
// ==============================
let produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// Ambil elemen dari HTML
const tabelProduk = document.getElementById("tabel-produk");
const formProduk = document.getElementById("form-produk");
const notif = document.getElementById("notif");

// ==============================
// FUNGSI TAMPILKAN PRODUK
// ==============================
function tampilkanProduk() {
  tabelProduk.innerHTML = "";
  produkToko.forEach(({ id, nama, harga, stok }) => {
    let row = `
      <tr>
        <td>${id}</td>
        <td>${nama}</td>
        <td>Rp ${harga.toLocaleString("id-ID")}</td>
        <td>${stok}</td>
        <td>
          <button onclick="hapusProduk(${id})"
            style="background:#e74c3c; color:#fff; border:none; padding:5px 10px; border-radius:5px; cursor:pointer;">
            Hapus
          </button>
        </td>
      </tr>
    `;
    tabelProduk.innerHTML += row;
  });
}

// ==============================
// FUNGSI TAMBAH PRODUK
// ==============================
function tambahProduk(nama, harga, stok) {
  const idBaru = produkToko.length ? produkToko[produkToko.length - 1].id + 1 : 1;
  let produkBaru = { id: idBaru, nama, harga, stok };

  produkToko.push(produkBaru);
  tampilkanProduk();

  // Notifikasi sukses
  notif.textContent = `Produk "${nama}" berhasil ditambahkan!`;
  notif.className = "notif sukses";
  notif.style.display = "block";
  setTimeout(() => (notif.style.display = "none"), 2500);
}

// ==============================
// FUNGSI HAPUS PRODUK
// ==============================
function hapusProduk(id) {
  produkToko = produkToko.filter((produk) => produk.id !== id);
  tampilkanProduk();

  notif.textContent = `Produk dengan ID ${id} berhasil dihapus!`;
  notif.className = "notif error";
  notif.style.display = "block";
  setTimeout(() => (notif.style.display = "none"), 2500);
}

// ==============================
// EVENT FORM SUBMIT
// ==============================
formProduk.addEventListener("submit", function (e) {
  e.preventDefault();

  let nama = document.getElementById("input-nama").value.trim();
  let harga = parseInt(document.getElementById("input-harga").value);
  let stok = parseInt(document.getElementById("input-stok").value);

  if (!nama || isNaN(harga) || isNaN(stok)) {
    notif.textContent = "Isi semua input dengan benar!";
    notif.className = "notif error";
    notif.style.display = "block";
    setTimeout(() => (notif.style.display = "none"), 2500);
    return;
  }

  tambahProduk(nama, harga, stok);
  formProduk.reset();
});

// ==============================
// TAMPILKAN PRODUK AWAL
// ==============================
tampilkanProduk();
