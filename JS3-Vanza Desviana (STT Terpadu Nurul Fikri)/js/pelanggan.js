let pelangganToko = [
    {id: 1, nama: "vanza", email: "vanza@gmail.com"},
    {id: 2, nama: "vanza1", email: "vanza1@mail.com"}
];

function tampilkanPelanggan() {
  const tbody = document.getElementById("tabelPelanggan");
  tbody.innerHTML = "";
  pelangganToko.forEach((p) => {
    tbody.innerHTML += `
      <tr>
        <td>${p.id}</td>
        <td>${p.nama}</td>
        <td>${p.email}</td>
        <td><button onclick="hapusPelanggan(${p.id})" class="btn btn-sm btn-danger">Hapus</button></td>
      </tr>
    `;
  });
}

function tambahPelanggan(nama, email) {
  pelangganToko.push({id: idPelanggan++, nama, email});
  tampilkanPelanggan();
}

function hapusPelanggan(id) {
  pelangganToko = pelangganToko.filter(p => p.id !== id);
  tampilkanPelanggan();
}

document.getElementById("formPelanggan").addEventListener("submit", function(e) {
  e.preventDefault();
  const nama = document.getElementById("namaPelanggan").value.trim();
  const email = document.getElementById("emailPelanggan").value.trim();
  if (nama && email) {
    tambahPelanggan(nama, email);
    e.target.reset();
  }
});

tampilkanPelanggan();
