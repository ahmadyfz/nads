    
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('instagram').addEventListener('click', function (e) {
        e.preventDefault();
        window.open('https://www.instagram.com/nads.patisserie', '_blank');
    });

    document.getElementById('whatsapp').addEventListener('click', function (e) {
        e.preventDefault();
        window.open('https://wa.me/6281818746628', '_blank');
    });

    document.getElementById('pricelistBtn').addEventListener('click', function (e) {
        e.preventDefault();
        window.open('https://msha.ke/nadspatisserie', '_blank');
    });
     
        document.querySelectorAll(".btn-pesan").forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            const produk = this.getAttribute("data-produk");
            const waNumber = "6281818746628"; // ganti dengan nomor WhatsApp Anda
            const pesan = `Halo, saya ingin memesan *${produk}*. Apakah masih tersedia? 😊`;
            const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(pesan)}`;
            window.open(url, '_blank');
        });
    });
});

