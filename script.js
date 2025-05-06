function getGreeting() {
  const hour = new Date().getHours();
  if (hour >= 4 && hour < 10) return "Selamat pagi!";
  else if (hour >= 10 && hour < 15) return "Selamat siang!";
  else if (hour >= 15 && hour < 18) return "Selamat sore!";
  else return "Selamat malam!";
}

// Menampilkan popup saat halaman dimuat
  window.onload = function() {
  document.getElementById("musicModal").style.display = "flex";
  document.getElementById("greeting").textContent = getGreeting();
};
  
  // Memulai musik ketika tombol ditekan
  document.getElementById("playMusic").addEventListener("click", function() {
    let popup = document.getElementById("musicModal");
    let audio = document.getElementById("bg-music");
    
    // Tambahkan delay 1.5 detik sebelum popup hilang dan musik mulai
    setTimeout(() => {
      popup.style.display = "none";
      audio.play().catch(error => console.log("Pemutaran gagal:", error));
    }, 1500);
  });