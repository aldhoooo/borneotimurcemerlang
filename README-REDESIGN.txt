PT BORNEO TIMUR CEMERLANG — GREEN & CLEAN REFRESH
=================================================

Isi paket
---------
- Seluruh halaman utama: index, catalog, about, contact, blog.
- Halaman redirect artikel dan lima halaman detail artikel.
- CSS, JavaScript, gambar, ikon, file verifikasi, dan aset proyek.
- File css/btc-refresh.css sebagai lapisan visual baru yang dimuat setelah stylesheet lama.

Yang diperbarui
---------------
1. Identitas warna menjadi forest green, natural green, sage, dan neutral off-white.
2. Tampilan navbar, hero, tombol, kartu produk, kategori, section, footer, halaman katalog,
   profil, blog, kontak, serta artikel diselaraskan dengan identitas BTC.
3. Responsivitas dan jarak antarelemen diperhalus untuk layar desktop dan mobile.
4. Nama perusahaan lama dan favicon lama pada halaman/metadata diganti ke identitas BTC.
5. Canonical dan Open Graph URL memakai origin website yang sedang diakses; domain resmi
   tidak ditetapkan karena domain final belum dikonfirmasi.
6. SEO artikel dinamis menggunakan origin website aktif dan tanggal Schema diubah ke ISO.
7. Duplikasi konfigurasi Google Ads di index.html dikurangi menjadi satu; GA4 tetap ada.
8. Tombol “Muat Artikel Lainnya” yang sebelumnya hanya mengubah teks diganti menjadi catatan
   bahwa seluruh artikel yang tersedia sudah ditampilkan.

Yang sengaja dipertahankan
--------------------------
- Data katalog dan daftar produk.
- Isi lima artikel, kategori, tanggal, gambar, dan tautan artikel.
- Alur pencarian, filter katalog, carousel, terjemahan ID/EN, navbar, form kontak,
  modal WhatsApp, dan tautan kontak yang sudah ada.
- Data alamat, nomor telepon, email, dan klaim perusahaan tidak diubah.

Catatan sebelum website dipublikasikan
--------------------------------------
1. File company_profile_btc.pdf belum ada di paket. File yang tersedia bernama
   company_profile_ktc.pdf dan halaman pertamanya masih menampilkan identitas KTC.
   Karena itu tombol unduh sementara diganti dengan keterangan bahwa Company Profile BTC
   sedang diperbarui. Ganti dengan PDF resmi BTC jika sudah tersedia.
2. Domain resmi BTC belum dikonfirmasi. Pastikan domain final setelah deployment; metadata
   canonical/OG saat ini mengikuti host yang sedang digunakan.
3. Tautan media sosial di footer masih berupa placeholder karena URL akun resmi belum diberikan.
4. Nomor/admin WhatsApp berbeda antara beberapa halaman di sumber awal. Nomor-nomor tersebut
   dipertahankan, belum diseragamkan agar tidak mengubah data kontak tanpa konfirmasi.
5. Angka statistik homepage dan jumlah produk per kategori masih mengikuti sumber awal;
   mohon verifikasi kebenarannya sebelum dipublikasikan.

Validasi teknis
---------------
- Seluruh file JavaScript lolos pemeriksaan sintaks Node.js.
- Pemeriksaan HTML menemukan tidak ada ID duplikat pada halaman yang diperiksa.
- Pemeriksaan aset/link lokal tidak menemukan file gambar, CSS, JavaScript, atau tautan
  dokumen lokal yang hilang setelah penyesuaian Company Profile.

Cara pakai
----------
1. Ekstrak ZIP.
2. Upload/replace isi folder proyek pada hosting atau folder lokal XAMPP.
3. Pastikan struktur folder assets, css, js, dan articles tidak diubah.
4. Hard refresh browser (Ctrl + F5) agar stylesheet baru dimuat.


PENGGABUNGAN CSS (2026-11-07)
-----------------------------
- css/main.css: variables, navbar, components, dan shopping cart.
- css/pages.css: home, halaman khusus, lalu btc-refresh sebagai lapisan override terakhir.
- Semua halaman HTML yang memakai stylesheet lokal diarahkan ke dua file tersebut.
- Urutan sumber dipertahankan di dalam masing-masing bundle. Cart dipindah ke main.css sesuai target.
