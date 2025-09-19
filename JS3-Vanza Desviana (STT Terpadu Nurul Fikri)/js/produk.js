let produkToko = [
  {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
  {id: 2, nama: "Mouse", harga: 200000, stok: 10},
  {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
];

function tampilkanProduk() {
  const tbody = document.getElementById("tabelProduk");
  tbody.innerHTML = "";
  produkToko.forEach((p) => {
    tbody.innerHTML += `
      <tr>
        <td>${p.id}</td>
        <td>${p.nama}</td>
        <td>Rp ${p.harga.toLocaleString()}</td>
        <td>${p.stok}</td>
        <td><button onclick="hapusProduk(${p.id})" class="btn btn-sm btn-danger">Hapus</button></td>
      </tr>
    `;
  });
}

function tambahProduk(nama, harga, stok) {
  const idBaru = produkToko.length ? produkToko[produkToko.length - 1].id + 1 : 1;
  produkToko.push({id: idBaru, nama, harga, stok});
  tampilkanProduk();
}

function hapusProduk(id) {
  produkToko = produkToko.filter(p => p.id !== id);
  tampilkanProduk();
}

document.getElementById("formProduk").addEventListener("submit", function(e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value.trim();
  const harga = Number(document.getElementById("harga").value);
  const stok = Number(document.getElementById("stok").value);
  if (nama && harga > 0 && stok > 0) {
    tambahProduk(nama, harga, stok);
    e.target.reset();
  }
});

tampilkanProduk();
