document.getElementById("formTransaksi").addEventListener("submit", function (e) {
  e.preventDefault();

  const transaksi = {
    tanggal: document.getElementById("tanggal").value,
    nominal: document.getElementById("nominal").value,
    kategori: document.getElementById("kategori").value,
    tipe: document.getElementById("tipe").value,
    catatan: document.getElementById("catatan").value
  };

  const data = JSON.parse(localStorage.getItem("dataTransaksi")) || [];
  data.push(transaksi);
  localStorage.setItem("dataTransaksi", JSON.stringify(data));
  
  this.reset();
  tampilkanData();
});

document.addEventListener("DOMContentLoaded", tampilkanData);

function tampilkanData() {
  const tbody = document.querySelector("#tabelTransaksi tbody");
  tbody.innerHTML = "";

  const data = JSON.parse(localStorage.getItem("dataTransaksi")) || [];

  data.forEach(item => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td data-label="Tanggal">${item.tanggal}</td>
      <td data-label="Kategori">${item.kategori}</td>
      <td data-label="Nominal">Rp ${item.nominal}</td>
      <td data-label="Tipe">${item.tipe}</td>
      <td data-label="Catatan">${item.catatan}</td>
    `;

    tbody.appendChild(row);
  });
}
