document.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(localStorage.getItem("dataTransaksi")) || [];
  let pemasukan = 0;
  let pengeluaran = 0;

  data.forEach(item => {
    if (item.tipe === "pemasukan") pemasukan += Number(item.nominal);
    if (item.tipe === "pengeluaran") pengeluaran += Number(item.nominal);
  });

  const ctx = document.getElementById("grafikLaporan").getContext("2d");
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Pemasukan", "Pengeluaran"],
      datasets: [{
        data: [pemasukan, pengeluaran],
        backgroundColor: ["#4caf50", "#f44336"]
      }]
    }
  });
});
