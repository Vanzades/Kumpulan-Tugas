// controller.js
const dataOrang = require("./data.js");

// Fungsi untuk menampilkan data
function lihatData() {
  console.log("=== Daftar Data Orang ===");
  dataOrang.map((item, index) => {
    console.log(`${index + 1}. Nama: ${item.nama}, Umur: ${item.umur}, Alamat: ${item.alamat}, Email: ${item.email}`);
  });
  console.log("\n");
}

// Fungsi untuk menambah data
function tambahData() {
  dataOrang.push(
    { nama: "Kevin", umur: 23, alamat: "Bogor", email: "kevin@mail.com" },
    { nama: "Lina", umur: 24, alamat: "Depok", email: "lina@mail.com" }
  );
  console.log("✅ Berhasil menambahkan 2 data baru.\n");
  lihatData();
}

// Fungsi untuk menghapus data
function hapusData(index) {
  if (index >= 0 && index < dataOrang.length) {
    let terhapus = dataOrang.splice(index, 1);
    console.log(`🗑️ Data '${terhapus[0].nama}' berhasil dihapus.\n`);
  } else {
    console.log("⚠️ Index tidak valid!\n");
  }
  lihatData();
}

// Demo penggunaan
lihatData();        // tampilkan data awal
tambahData();       // tambah 2 data
hapusData(2);       // hapus data index ke-2 (Citra)
