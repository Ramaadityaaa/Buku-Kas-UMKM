document.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(localStorage.getItem("dataTransaksi")) || [];
  let pemasukan = 0;
  let pengeluaran = 0;

  data.forEach(item => {
    if (item.tipe === "pemasukan") pemasukan += Number(item.nominal);
    if (item.tipe === "pengeluaran") pengeluaran += Number(item.nominal);
  });

  document.getElementById("totalPemasukan").textContent = `Rp ${pemasukan}`;
  document.getElementById("totalPengeluaran").textContent = `Rp ${pengeluaran}`;
  document.getElementById("saldo").textContent = `Rp ${pemasukan - pengeluaran}`;
});
