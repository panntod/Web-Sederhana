const showMessage = () => {
  const messageInput = document.getElementById("message");
  const message = messageInput.value;

  if (message.trim() === "") {
    alert("Inputan tidak boleh kosong");
  } else {
    alert("Pesan: " + message);
    messageInput.value = "";
  }
};

const hasil = () => {
  let angka1 = parseFloat(document.getElementById("angka1").value);
  let angka2 = parseFloat(document.getElementById("angka2").value);

  let hasil = angka1 * angka2;
  document.getElementById("hasil").value = hasil;
};

function showNav() {
  const navbar = document.getElementById("navbar-default");
  if (navbar.style.display === "none" || navbar.style.display === "") {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
}

const EditStyle = () => {
  // Mengambil nilai dari elemen
  let panjangInput = document.getElementById("panjang");
  let lebarInput = document.getElementById("lebar");
  let warna = document.getElementById("warna").value;

  // Mengambil nilai panjang dan lebar dengan memastikan dalam rentang yang benar
  let panjang = Math.min(
    Math.max(parseInt(panjangInput.value), parseInt(panjangInput.min)),
    parseInt(panjangInput.max)
  );
  let lebar = Math.min(
    Math.max(parseInt(lebarInput.value), parseInt(lebarInput.min)),
    parseInt(lebarInput.max)
  );

  // Memperbarui nilai input dengan nilai yang telah disesuaikan
  panjangInput.value = panjang;
  lebarInput.value = lebar;

  // Edit style
  document.getElementById("square").style.width = panjang + "px";
  document.getElementById("square").style.height = lebar + "px";
  document.getElementById("square").style.backgroundColor = warna;
};

const ChangeBackground = (color) => {
  let element = document.getElementById("pesan");
  // mengosongkan class pada elemen yang diambil
  element.className = "";
  // memberikan class tipe alert berdasarkan parameter
  if (color === "bg-blend-soft-light") {
    element.classList.add(color, "text-black", "rounded", "border");
  } else {
    element.classList.add(color, "text-white", "rounded");
  }
};
const box = document.getElementById("box-color");
const merah = document.getElementById("merah");
const hijau = document.getElementById("hijau");
const biru = document.getElementById("biru");

function updateBackgroundColor() {
  const r = merah.value;
  const g = hijau.value;
  const b = biru.value;
  box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

merah.addEventListener("input", updateBackgroundColor);
hijau.addEventListener("input", updateBackgroundColor);
biru.addEventListener("input", updateBackgroundColor);


setInterval(() => {
  const waktu = new Date();
  const jam = waktu.getHours();
  const menit = waktu.getMinutes();
  const detik = waktu.getSeconds();
  document.getElementById("jam").innerHTML = jam + ":" + menit + ":" + detik;
}, 1000);
