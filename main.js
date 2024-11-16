document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman form

    // Ambil data dari form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const phone = document.getElementById("phone").value;
    const interest = document.getElementById("interest").value;

    // Menampilkan pesan sukses dengan animasi
    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";
    successMessage.innerHTML = `Terima kasih sudah mendaftar Mabit, ${name}!`;

    // Reset form
    document.getElementById("registrationForm").reset();
});

// Mengarahkan ke WhatsApp dengan pesan otomatis
document.getElementById("whatsappButton").addEventListener("click", function() {
    const phoneNumber = "6281234567890"; // Ganti dengan nomor WhatsApp yang benar
    const text = encodeURIComponent("Halo, saya ingin mendaftar untuk acara Mabit.");
    const url = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(url, "_blank");
});
