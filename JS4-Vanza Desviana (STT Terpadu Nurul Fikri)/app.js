// Class Kendaraan
class Kendaraan {
  constructor(merk, model, tahun) {
    this.merk = merk;
    this.model = model;
    this.tahun = tahun;
  }

  info() {
    return `${this.merk} ${this.model} (${this.tahun})`;
  }
}

// Class Pelanggan
class Pelanggan {
  constructor(nama, nomorTelepon) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = null;
  }

  sewaKendaraan(kendaraan) {
    this.kendaraanDisewa = kendaraan;
    console.log(`${this.nama} menyewa ${kendaraan.info()}`);
  }

  infoPelanggan() {
    return `${this.nama} (${this.nomorTelepon}) menyewa: ${this.kendaraanDisewa ? this.kendaraanDisewa.info() : "Belum sewa"}`;
  }
}

// Sistem Manajemen Transportasi
class SistemTransportasi {
  constructor() {
    this.daftarPelanggan = [];
  }

  tambahPelanggan(pelanggan) {
    this.daftarPelanggan.push(pelanggan);
  }

  tampilkanPelanggan() {
    console.log("Daftar Pelanggan yang menyewa kendaraan:");
    this.daftarPelanggan.forEach((p, i) => {
      console.log(`${i + 1}. ${p.infoPelanggan()}`);
    });
  }
}

// Simulasi Sistem
let mobil = new Kendaraan("Toyota", "Avanza", 2022);
let motor = new Kendaraan("Honda", "CBR150R", 2021);

let pelanggan1 = new Pelanggan("Agus", "08123456789");
let pelanggan2 = new Pelanggan("Bambang", "08987654321");

pelanggan1.sewaKendaraan(mobil);
pelanggan2.sewaKendaraan(motor);

let sistem = new SistemTransportasi();
sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);

sistem.tampilkanPelanggan();
