# Rencana Pengembangan Company Profile Digital untuk UMKM

> **Brief aktif terbaru:** website adalah company profile konter elektronik multi-brand (HP, laptop, tablet/iPad, AirPods/TWS). Desain mengikuti gambar putih–biru terbaru dari pengguna. Nama sementara Nexora Tech. Arahan ini menggantikan konsep studio digital dan referensi video gelap. Lihat [DESIGN-REFERENCE.md](DESIGN-REFERENCE.md) dan [README.md](README.md) untuk implementasi aktif; catatan berikut merupakan riwayat planning.

> **Koreksi arah implementasi:** pengguna telah mengonfirmasi dua tujuan: company profile jasa digital untuk UMKM, sekaligus showcase contoh company profile berbagai UMKM. Referensi video sudah ditinjau dan menunjukkan UI gelap dengan objek berperspektif serta cahaya biru/tembaga. Arahan terbaru ada di [DESIGN-REFERENCE.md](DESIGN-REFERENCE.md) dan struktur implementasi di [README.md](README.md). Asumsi satu usaha furnitur, palet cream/orange, serta status video belum ditinjau pada catatan awal di bawah telah digantikan arahan terbaru ini.

Tanggal: 28 Oktober 2026  
Status: rencana implementasi; aplikasi belum dibangun.  
Target teknologi: Vue atau React dengan Vite.  
Target awal: rata-rata minimal 50 pengunjung per hari.

Arahan kreatif: berani, playful, kekinian, dengan karakter brand digital yang terasa segar. Hindari gradient ungu, emoji, dan pembuka generik seperti “welcom to our company” maupun “welcome to our company”.

## 1. Arah proyek dan asumsi

Membangun website yang memperkenalkan usaha, menampilkan produk/jasa, membangun kepercayaan, dan mengarahkan calon pelanggan menghubungi UMKM melalui WhatsApp atau telepon.

### Dua kelompok sasaran

| Sasaran | Kebutuhan | Respons website |
| --- | --- | --- |
| Pemilik UMKM sebagai pengguna/pemilik website | Usaha terlihat profesional, punya identitas khas, produk mudah diperkenalkan, dan kontak pelanggan bertambah | Struktur konten mudah diperbarui, identitas merek konsisten, katalog jelas, CTA kontak, dan laporan interaksi sederhana |
| Calon pelanggan UMKM sebagai pengunjung | Cepat memahami apa yang dijual, merasa tertarik, percaya pada kualitasnya, dan tahu cara membeli/menghubungi | Foto nyata yang kuat, manfaat konkret, informasi harga atau penawaran, bukti pelanggan, serta alur kontak singkat |

Website publik berbicara kepada **pelanggan UMKM**, bukan menawarkan jasa pembuatan website kepada pemilik UMKM. Jangan memakai headline seperti “Digitalkan UMKM Anda” pada website usaha kecuali usaha tersebut memang menjual layanan digital.

Segmen pengunjung ditentukan dari bidang usaha, bukan diasumsikan semuanya anak muda. Gaya kekinian menjadi bahasa visual; ukuran teks, navigasi, dan informasi tetap mudah dipahami berbagai usia. Pada discovery, petakan pelanggan baru, pelanggan yang membandingkan pilihan, dan pelanggan lama yang ingin memesan kembali.

### Alasan pengunjung tertarik dan melanjutkan aksi

1. **Perhatian:** headline khas dan foto produk/hasil pekerjaan yang langsung menjelaskan penawaran.
2. **Relevansi:** manfaat, kisaran harga bila tersedia, serta lokasi atau wilayah layanan terlihat jelas.
3. **Eksplorasi:** kartu produk menarik dengan detail yang mudah dibuka tanpa interaksi rumit.
4. **Kepercayaan:** foto asli, proses kerja, ulasan berizin, dan informasi usaha yang konsisten.
5. **Tindakan:** CTA spesifik seperti “Tanya Produk Ini”, “Lihat Menu”, atau “Diskusikan Kebutuhan”.

Kesan seperti brand digital yang sedang viral adalah arahan estetika, bukan janji website akan viral. Nilai desain tetap diukur dari pemahaman pengunjung, kemudahan menemukan produk, dan interaksi kontak.

Asumsi awal:

- Website untuk satu UMKM, berbahasa Indonesia, dan mengutamakan pengguna ponsel.
- Katalog awal sekitar 5–20 produk/jasa dan 5–8 halaman utama.
- Pemilik memperbarui informasi sesekali; developer membantu pembaruan awal.
- Belum membutuhkan login pelanggan, checkout, pembayaran daring, atau pengelolaan stok.
- Logo, foto, alamat, dan informasi usaha disediakan atau disetujui pemilik.
- Jika sebenarnya ingin platform untuk banyak UMKM, perlu perencanaan tambahan untuk pemisahan data, akun, domain, dan biaya setiap tenant.

**Rekomendasi awal:** Vue + Vite + TypeScript, hasil halaman publik diprerender menjadi HTML statis, hosting statis dengan CDN, dan kontak melalui WhatsApp. React + Vite sama-sama layak jika tim lebih menguasai React. Pilih satu framework untuk implementasi.

## 2. Memahami target 50 pengunjung per hari

Kapasitas website dan jumlah pengunjung yang berhasil didapat adalah dua hal berbeda. Infrastruktur dapat disiapkan untuk melayani trafik, tetapi kunjungan membutuhkan promosi, konten, dan evaluasi.

| Parameter | Asumsi perencanaan |
| --- | --- |
| Pengunjung | 50 per hari, sekitar 1.500 kunjungan harian terakumulasi dalam 30 hari |
| Halaman yang dibuka | Rata-rata 3 halaman per pengunjung |
| Page views | Sekitar 150 per hari atau 4.500 per 30 hari |
| Transfer rata-rata | Asumsi 1 MB per page view termasuk aset |
| Transfer bulanan | Sekitar 4,5 GB sebelum memperhitungkan variasi aset, cache, bot, dan lonjakan |
| Skenario lonjakan awal | Uji eksploratif 20 pengguna bersamaan pada staging yang diizinkan |

Angka di atas adalah estimasi, bukan batas kapasitas atau jaminan penggunaan hosting. Pengunjung harian yang dijumlahkan juga bukan jumlah pengguna unik bulanan: orang yang sama bisa datang beberapa hari.

Gunakan hosting statis/CDN untuk tahap awal. VPS dan database belum diperlukan untuk kebutuhan profil dan katalog yang jarang berubah. Tinjau batas bandwidth, build, dan fungsi tambahan pada paket yang dipilih sebelum peluncuran.

Definisikan KPI:

- Rata-rata pengunjung harian menurut satu alat analitik, dalam jendela 30 hari, minimal 50; kurangi trafik internal dan bot sejauh tersedia.
- Klik WhatsApp, telepon, dan petunjuk arah sebagai indikator minat.
- Jumlah percakapan relevan dan transaksi dicatat pemilik secara terpisah.
- Rasio klik WhatsApp = jumlah sesi dengan klik WhatsApp dibagi total sesi, bukan total klik dibagi pengunjung unik.
- Target konversi ditentukan setelah mendapatkan baseline 2–4 minggu; klik WhatsApp tidak otomatis berarti chat terkirim atau penjualan.

## 3. Memilih teknologi

| Aspek | Vue + Vite | React + Vite |
| --- | --- | --- |
| Cocok untuk | Tim yang nyaman dengan template HTML dan komponen Vue | Tim yang nyaman dengan JSX dan ekosistem React |
| Routing | Vue Router jika memakai rute aplikasi | Router yang dipilih sesuai kebutuhan proyek |
| Bahasa | TypeScript | TypeScript |
| Styling | CSS biasa dengan variabel desain; utilitas CSS opsional | CSS biasa/CSS Modules; utilitas CSS opsional |
| Konten awal | Data lokal bertipe atau JSON | Data lokal bertipe atau JSON |
| State global | Belum perlu untuk profil sederhana | Belum perlu untuk profil sederhana |
| SEO | Rencanakan HTML statis per URL publik | Rencanakan HTML statis per URL publik |

Vite menyediakan pengembangan dan build; Vite tidak otomatis menghasilkan HTML lengkap untuk setiap rute aplikasi. Setup Vue resmi memakai tooling berbasis Vite. Untuk React dari awal, routing dan strategi rendering perlu dirancang sendiri. Referensi: [Vite](https://vite.dev/guide/), [Vue Quick Start](https://vuejs.org/guide/quick-start.html), dan [React dari awal](https://react.dev/learn/build-a-react-app-from-scratch).

**Keputusan rendering sebelum implementasi besar:** buat prototipe prerender/SSG yang kompatibel dengan versi framework dan Vite yang dipilih. Buktikan dua URL menghasilkan HTML berisi konten dan metadata berbeda. Jika pendekatan itu terlalu kompleks, gunakan mode multi-page Vite dengan HTML per halaman dan komponen interaktif seperlunya. Jangan menunda keputusan SEO sampai selesai membangun seluruh SPA.

## 4. Batas pekerjaan versi pertama

### Wajib untuk peluncuran

- Beranda: ringkasan usaha, nilai utama, produk unggulan, dan tombol kontak.
- Tentang usaha: cerita, pengalaman, keunggulan yang bisa dibuktikan.
- Katalog produk/jasa: foto, nama, ringkasan, harga atau keterangan cara mendapatkan penawaran.
- Detail produk/jasa yang cukup informatif untuk memiliki halaman sendiri.
- Galeri/portofolio; dapat digabung dengan halaman lain jika konten masih sedikit.
- Testimoni asli yang diizinkan untuk ditampilkan.
- Kontak: WhatsApp, telepon, jam operasional, wilayah layanan, alamat jika relevan.
- Tautan lokasi peta, metadata SEO, halaman 404, dan informasi privasi sesuai fitur yang digunakan.
- Tampilan responsif, akses keyboard, HTTPS, dan analitik dasar.

### Opsional setelah kebutuhan terbukti

- Formulir kontak, CMS untuk pemilik, artikel, FAQ lengkap, dan bahasa kedua.
- Pencarian/filter katalog jika jumlah produk membuat navigasi sulit.
- Pemesanan, akun, pembayaran, dan stok menjadi proyek lanjutan dengan kebutuhan backend tersendiri.

## 5. Langkah 1 — Discovery dan brief bisnis

1. Catat nama usaha, bidang, target pelanggan, wilayah layanan, dan kontak resmi.
2. Tentukan aksi utama: chat WhatsApp, telepon, kunjungan toko, atau permintaan penawaran.
3. Identifikasi tiga pertanyaan pelanggan yang paling sering muncul.
4. Kumpulkan referensi tampilan dan pelajari 3–5 kompetitor lokal untuk memahami informasi yang dibutuhkan pelanggan.
5. Tetapkan cakupan, penanggung jawab konten, anggaran, dan tanggal target.
6. Tentukan siapa yang memiliki domain, akun hosting, repositori, dan akses analitik; idealnya kepemilikan bisnis berada pada pemilik usaha.

**Hasil:** brief bisnis satu halaman, daftar fitur prioritas, dan definisi keberhasilan yang disetujui pemilik.

## 6. Langkah 2 — Mengumpulkan dan menulis konten

1. Siapkan logo, warna merek, foto produk/tempat, deskripsi, harga, dan jam operasional.
2. Buat spreadsheet katalog: nama, slug, kategori, deskripsi, foto, harga, dan status tersedia.
3. Tulis judul yang menjelaskan produk/jasa dan wilayah layanan secara alami.
4. Susun manfaat produk, proses pemesanan, batas layanan, dan FAQ.
5. Minta izin penggunaan foto pelanggan dan testimoni; jangan membuat klaim atau ulasan fiktif.
6. Optimalkan foto untuk web dan tentukan teks alternatif yang sesuai.
7. Minta pemilik memeriksa informasi usaha sebelum desain difinalkan.

**Hasil:** konten siap pakai dan folder aset dengan nama file yang jelas. Konten adalah ketergantungan utama jadwal.

## 7. Langkah 3 — Sitemap dan alur pelanggan

Contoh struktur URL:

```text
/
/tentang/
/produk/
/produk/nama-produk/
/galeri/
/kontak/
/privasi/
```

Gunakan `/layanan/` jika usaha menjual jasa. Tambahkan artikel hanya jika ada penanggung jawab pembaruan rutin.

Alur utama: pengunjung membuka beranda atau detail produk → memahami penawaran → melihat bukti kepercayaan → menekan kontak → pemilik menanggapi.

Tentukan satu CTA utama yang konsisten, misalnya “Tanya via WhatsApp”. Buat isi pesan berbeda sesuai produk, dengan teks yang dienkode dengan benar pada URL. Nomor WhatsApp menggunakan format internasional tanpa tanda tambah, spasi, atau angka nol awal.

**Hasil:** sitemap, daftar rute publik, dan alur kontak yang jelas.

## 8. Langkah 4 — Wireframe dan desain

### 8.1 Brief visual yang harus diikuti

**Karakter:** berani, playful, kekinian, ekspresif, dan terasa dekat dengan pelanggan. Gunakan komposisi editorial dengan judul besar, potongan foto menarik, ruang kosong yang cukup, dan aksen grafis sederhana.

| Elemen | Arahan implementasi |
| --- | --- |
| Warna | Warna solid; usulan awal latar cream `#FFF7E8`, teks ink `#171717`, aksen orange `#FF6B35`, dan lime `#D7F75B` |
| Pemakaian warna | Cream/ink sebagai dasar; orange dan lime sebagai aksen terarah. Gunakan teks gelap pada aksen terang dan periksa kontras sebelum final |
| Tipografi | Judul display tebal dan besar, body sans-serif yang mudah dibaca; maksimal dua keluarga font |
| Komposisi | Grid yang rapi dengan beberapa elemen asimetris; produk dan informasi utama tetap menjadi pusat perhatian |
| Fotografi | Foto asli produk, pemilik, proses, atau hasil kerja; crop tegas dan latar bersih sesuai merek |
| Kartu produk | Foto dominan, nama jelas, manfaat ringkas, harga jika relevan, dan aksi detail yang terlihat |
| Bentuk dekoratif | Label tipografi, lingkaran, garis, atau blok geometris sebagai aksen; dekorasi tidak menggantikan informasi |
| Tombol | Kontras kuat, label aksi spesifik, keadaan hover/focus jelas, dan area sentuh nyaman |
| Ikon | Ikon SVG yang konsisten bila membantu navigasi; tanpa emoji |

Palet di atas adalah usulan desain berdasarkan brief teks, belum hasil pencocokan video. Sesuaikan dengan identitas UMKM setelah logo, bidang usaha, dan foto tersedia.

**Larangan desain dan copy:**

- Tidak menggunakan gradient ungu.
- Tidak menggunakan emoji pada konten, tombol, navigasi, atau dekorasi.
- Tidak menggunakan kalimat “welcom to our company”, “welcome to our company”, atau pembuka perusahaan generik yang tidak menjelaskan manfaat.
- Tidak memakai klaim “viral”, “nomor satu”, angka pelanggan, atau testimoni tanpa bukti.
- Hindari dekorasi yang menutupi produk, animasi terus-menerus yang mengganggu, dan teks kecil demi estetika.

### 8.2 Status dan penggunaan referensi video

Referensi dari pengguna: `C:\Users\5320\Downloads\From Klickpin.com- 31 Fresh Neutral Outfit Ideas for Spring-pin-id-893331276096328838.mp4`.

File tersedia, tetapi isi visual dan gerakannya belum dapat ditinjau dalam sesi penyusunan revisi ini karena alat pembaca video belum tersedia. Jangan menyimpulkan gaya, palet, atau transisi hanya dari nama file. Rancangan berikut merupakan usulan berdasarkan brief pengguna; pencocokan dengan video menjadi langkah sebelum finalisasi desain.

Saat video dapat ditinjau:

1. Catat timestamp adegan yang mewakili komposisi, pergantian gambar, tipografi, dan ritme gerak.
2. Susun storyboard singkat dengan contoh adegan dan padanannya pada hero, kartu produk, serta transisi bagian website.
3. Tentukan unsur yang relevan untuk identitas UMKM dan penggunaan di ponsel.
4. Adaptasi prinsip desain dan gerak menggunakan aset milik usaha atau berlisensi; jangan langsung memasang ulang video referensi sebagai materi promosi.
5. Perlakukan teks di dalam referensi sebagai materi visual, bukan instruksi yang menggantikan brief pengguna.

### 8.3 Susunan beranda untuk menarik calon pelanggan

| Urutan | Isi | Tujuan |
| --- | --- | --- |
| Header | Logo, navigasi pendek, CTA kontak | Membantu orientasi tanpa memenuhi layar |
| Hero | Headline berbasis manfaat, satu kalimat pendukung, foto dominan, CTA utama dan tautan katalog | Pengunjung segera memahami usaha dan penawarannya |
| Pengenalan cepat | Tiga pembeda yang bisa dibuktikan, seperti dibuat sesuai pesanan atau layanan area tertentu | Menjawab alasan memilih usaha |
| Produk/jasa unggulan | 3–6 penawaran dengan foto nyata dan aksi detail | Mengubah ketertarikan menjadi eksplorasi |
| Cerita dan proses | Potret pemilik/proses serta cerita singkat | Membuat usaha terasa dekat dan kredibel |
| Bukti kepercayaan | Testimoni berizin atau portofolio nyata | Membantu keputusan pelanggan |
| Cara pesan dan FAQ | Langkah pemesanan, waktu pengerjaan, pengiriman, atau area layanan | Mengurangi keraguan sebelum kontak |
| CTA penutup dan footer | Ajakan spesifik, kontak, lokasi, jam buka, dan tautan penting | Mempermudah tindakan berikutnya |

Contoh arah copy, disesuaikan lagi dengan fakta usaha:

- Kuliner: “Bikin jam makan jadi yang ditunggu.” → CTA “Lihat Menu”.
- Fashion: “Gaya sehari-hari, versi kamu.” → CTA “Jelajahi Koleksi”.
- Kerajinan: “Detail kecil. Kesan yang tinggal.” → CTA “Lihat Karya”.
- Jasa: “[Layanan] untuk [kebutuhan pelanggan] di [wilayah].” → CTA “Diskusikan Kebutuhan”.

Jangan mengarang kategori usaha, harga, lokasi, atau janji layanan untuk mengisi contoh tersebut. Headline ekspresif tetap didampingi penjelasan konkret tentang produk/jasa yang dijual.

### 8.4 Rencana animasi dan interaksi

Durasi berikut adalah titik awal prototipe, bukan hasil pengukuran video referensi.

| Area | Gerak yang diusulkan | Batas penggunaan |
| --- | --- | --- |
| Hero | Judul dan foto masuk dengan fade serta perpindahan pendek, sekitar 400–600 ms | Sekali saat masuk; konten utama tetap tersedia jika animasi gagal |
| Pergantian bagian | Reveal ringan sekitar 250–400 ms | Sekali ketika bagian terlihat; jangan menahan scroll |
| Kartu produk | Gambar membesar sedikit atau kartu naik 2–4 px, sekitar 150–220 ms | Untuk hover/focus; informasi penting tidak bergantung pada hover |
| Tombol | Perubahan warna dan respons tekan ringan, sekitar 120–180 ms | Tetap memiliki indikator fokus yang jelas |
| Galeri | Pergantian foto singkat setelah klik/swipe | Kontrol terlihat; tanpa slideshow otomatis pada MVP |
| Label dekoratif | Rotasi statis ringan atau kemunculan singkat | Tidak berputar atau bergerak tanpa henti |

Gunakan CSS untuk interaksi sederhana dan pemicu visibilitas seperlunya. Tambahkan library animasi hanya jika storyboard membutuhkan koordinasi gerak yang tidak praktis dengan pendekatan tersebut.

Aturan implementasi:

- Utamakan `transform` dan `opacity`; hindari animasi yang terus mengubah tata letak.
- Hormati `prefers-reduced-motion`: hilangkan gerak masuk, zoom, dan perpindahan nonesensial; semua konten tetap terlihat.
- Tidak menggunakan scroll hijacking, custom cursor wajib, intro loading dekoratif, atau video autoplay bersuara.
- CTA dan navigasi dapat digunakan segera, tanpa menunggu animasi selesai.
- Ponsel mendapat komposisi sederhana dan interaksi tap; efek desktop bukan prasyarat penggunaan.
- Sediakan dimensi gambar sejak awal agar kemunculan aset tidak menggeser halaman.

### 8.5 Urutan pengerjaan desain

1. Buat wireframe ponsel terlebih dahulu untuk beranda, katalog, detail, dan kontak.
2. Tentukan warna, tipografi, jarak, tombol, kartu produk, dan gaya gambar.
3. Letakkan penawaran utama dan CTA pada bagian awal halaman.
4. Pastikan menu mudah digunakan, teks terbaca, fokus keyboard terlihat, dan kontras memadai.
5. Rancang keadaan kosong, gambar gagal dimuat, dan halaman tidak ditemukan.
6. Buat prototipe hero, satu kartu produk, dan transisi bagian untuk menilai ritme animasi pada ponsel.
7. Cocokkan prototipe dengan video setelah referensi dapat ditinjau; dokumentasikan keputusan visual.
8. Tinjau desain bersama pemilik dengan konten nyata. Minta beberapa calon pelanggan mencoba menemukan produk, memahami manfaat, dan menghubungi usaha; revisi bagian yang membingungkan.

**Hasil:** desain desktop/ponsel dan komponen visual yang siap diimplementasikan.

## 9. Langkah 5 — Setup proyek

1. Pilih Vue atau React berdasarkan kemampuan tim.
2. Instal Node.js LTS yang memenuhi persyaratan Vite saat implementasi; catat versi di proyek dan CI.
3. Buat proyek pada direktori kosong atau subfolder agar tidak menimpa dokumen yang sudah ada.

Pilih salah satu perintah berikut:

```powershell
# Opsi Vue
npm create vite@latest website-umkm -- --template vue-ts

# Opsi React: jalankan sebagai alternatif, bukan setelah opsi Vue
npm create vite@latest website-umkm -- --template react-ts
```

Kemudian:

```powershell
cd website-umkm
npm install
npm run dev
```

4. Atur Git, `.gitignore`, formatter, lint, dan pemeriksaan tipe sesuai stack.
5. Simpan lockfile; gunakan `npm ci` pada CI agar instalasi konsisten.
6. Siapkan `.env.example` tanpa kredensial asli. Variabel `VITE_*` bersifat publik dalam aplikasi browser; jangan menaruh secret di sana.
7. Siapkan README berisi cara menjalankan, build, memperbarui konten, dan deploy.
8. Selesaikan prototipe rendering dua rute sebelum membangun semua halaman.

Struktur awal yang dapat disesuaikan:

```text
website-umkm/
  public/             # favicon, robots.txt, aset publik
  src/
    assets/           # gambar/font yang diproses build
    components/       # tombol, header, footer, kartu
    pages/            # komponen halaman
    data/             # profil usaha, katalog, testimoni
    styles/           # token desain dan CSS global
    utils/            # helper URL kontak dan format data
  scripts/            # generasi sitemap/prerender bila diperlukan
  README.md
```

**Hasil:** aplikasi dasar berjalan, build berhasil, dan pendekatan HTML per URL terbukti.

## 10. Langkah 6 — Implementasi fitur

Urutan pengerjaan:

1. Bangun layout, navigasi, footer, dan komponen CTA.
2. Bangun beranda dengan konten nyata.
3. Bangun katalog dan halaman detail dari satu sumber data.
4. Bangun profil, galeri, kontak, dan privasi.
5. Hubungkan WhatsApp, telepon, media sosial, dan lokasi.
6. Tambahkan metadata per halaman, canonical URL, dan gambar berbagi sosial.
7. Siapkan 404 dan perilaku URL dengan/tanpa trailing slash secara konsisten.
8. Tambahkan analitik dan event interaksi tanpa mengirim isi pesan atau data pribadi pelanggan.

Untuk versi awal, kontak langsung lewat WhatsApp mengurangi kebutuhan backend. Jika formulir diperlukan, tambahkan layanan formulir atau fungsi server: validasi di server, pembatasan permintaan, perlindungan spam, penyimpanan secret di server, serta tampilan sukses/gagal. Jangan mengirim email langsung dari browser menggunakan kredensial layanan.

Jika pemilik perlu mengedit sendiri secara rutin, evaluasi CMS dengan akses berbasis peran dan mekanisme rebuild. CMS harus dipilih dari kebutuhan editorial, bukan hanya karena trafik meningkat.

**Hasil:** semua alur bisnis utama berfungsi pada preview.

## 11. Langkah 7 — SEO dan performa

### SEO teknis dan lokal

- Pastikan HTML hasil deployment sudah berisi judul, teks utama, dan metadata untuk setiap URL penting.
- Buat title dan description unik, satu judul utama yang jelas, serta hierarki heading yang logis.
- Gunakan tautan HTML yang dapat dirayapi untuk navigasi penting.
- Buat sitemap dari URL produksi yang valid dan robots.txt yang sesuai.
- Gunakan canonical URL dan redirect domain utama agar tidak ada versi URL yang bersaing.
- Tambahkan data terstruktur bisnis yang sesuai fakta; jangan menambahkan rating buatan.
- Konsistenkan nama, alamat, kontak, dan jam usaha pada website serta profil bisnis lokal.
- Verifikasi Search Console, kirim sitemap, dan periksa URL setelah peluncuran.
- Periksa preview berbagi tautan; metadata yang hanya muncul setelah JavaScript berjalan bisa tidak terbaca sebagian crawler sosial.

Google dapat merender JavaScript, tetapi rendering memiliki tahapan dan keterbatasan. Prerender dipilih agar konten tersedia dalam HTML awal; ini tidak menjamin peringkat atau pengindeksan. Referensi: [Google JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).

### Anggaran performa internal

- Targetkan transfer halaman pertama sekitar 1 MB atau kurang untuk halaman utama; evaluasi kualitas gambar terhadap kebutuhan bisnis.
- Gunakan gambar responsif WebP/AVIF jika didukung alur aset, dan tetapkan dimensi gambar.
- Lazy-load gambar di bawah layar; prioritaskan gambar utama yang terlihat pertama.
- Kurangi font, library besar, animasi berlebihan, dan skrip pihak ketiga.
- Muat peta/video berat saat diperlukan; tautan peta cukup untuk MVP.
- Target internal awal: Lighthouse mobile Performance ≥90 dan Accessibility ≥95 pada pengujian yang konsisten. Angka ini target kerja, bukan jaminan pengalaman semua perangkat atau sertifikasi aksesibilitas.
- Tinjau metrik pengalaman pengguna nyata ketika data cukup; situs baru mungkin belum memiliki data lapangan.

**Hasil:** halaman dapat dirayapi, metadata benar, dan ukuran aset terkendali.

## 12. Langkah 8 — Pengujian dan persetujuan pemilik

| Area | Pemeriksaan kelulusan |
| --- | --- |
| Konten | Kontak, harga, alamat, dan klaim telah diperiksa pemilik |
| Navigasi | Semua menu, CTA, tautan produk, dan footer berfungsi |
| Kontak | Nomor benar, pesan sesuai produk, tautan telepon/peta berfungsi |
| Responsif | Tidak ada overflow pada ponsel, tablet, dan desktop |
| Aksesibilitas | Keyboard, label, alt text, fokus, dan keterbacaan diperiksa manual |
| Rendering | HTML awal berisi konten; refresh dan akses langsung rute detail berhasil |
| SEO | Title/canonical unik, sitemap valid, halaman palsu mengembalikan 404 yang benar |
| Build | Instalasi bersih, lint/typecheck yang dikonfigurasi, serta build lulus |
| Browser | Chrome, Firefox, dan Safari/perangkat iOS diperiksa sesuai ketersediaan |
| Analitik | Event terkirim sekali per aksi dan trafik pengujian dikenali |
| Hosting | HTTPS, redirect domain, cache, dan halaman error bekerja |

Gunakan pengujian otomatis untuk logika penting, misalnya pembentukan URL kontak dan pemetaan slug produk; satu alur end-to-end katalog → detail → CTA cukup sebagai awal. Pemeriksaan tampilan dan konten tetap dilakukan manusia.

Lakukan uji lonjakan singkat hanya pada staging/lingkungan yang mengizinkan. Amati error, latensi, dan kuota; jangan melakukan uji beban terhadap WhatsApp, layanan peta, atau API pihak ketiga.

**Hasil:** checklist QA, daftar masalah yang sudah diselesaikan, dan persetujuan konten sebelum tayang.

## 13. Langkah 9 — Deployment

Arsitektur awal:

```text
Pemilik → Developer → Repositori Git → Build + prerender
                                          ↓
Pengunjung ← Domain + HTTPS ← Hosting statis/CDN
     ↓
WhatsApp / Telepon / Lokasi
```

1. Pilih hosting statis/CDN; Cloudflare Pages adalah salah satu opsi untuk hasil build Vue/Vite. Verifikasi paket dan kebutuhan penggunaan sebelum memilih.
2. Hubungkan repositori dan tentukan branch produksi.
3. Atur versi Node, perintah build, dan output directory. Umumnya Vite memakai `npm run build` dan `dist`; sesuaikan jika integrasi prerender mengubah hasilnya.
4. Buat preview deployment, lalu jalankan ulang pemeriksaan rute dan metadata.
5. Hubungkan domain, atur DNS sesuai instruksi penyedia, dan pastikan HTTPS aktif.
6. Pilih domain utama, arahkan variasi domain ke domain tersebut, dan perbarui canonical/sitemap.
7. Untuk HTML statis per rute, pastikan URL mengarah ke file yang sesuai dan URL tidak dikenal menghasilkan 404. Jika memilih SPA, konfigurasi fallback secara sengaja dan evaluasi risiko soft 404.
8. Pastikan produksi tidak memakai `noindex` atau blokir crawling dari staging.
9. Aktifkan analitik, monitoring dasar, dan notifikasi kegagalan build.
10. Catat deployment stabil terakhir dan cara rollback; uji pemulihan versi sebelumnya.

Panduan penyedia: [Deploy Vue ke Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-a-vue-site/). Tidak perlu menjalankan Vite development server atau `vite preview` sebagai server produksi.

**Hasil:** website aktif pada domain bisnis, dapat diakses lewat HTTPS, dan memiliki prosedur rollback.

## 14. Langkah 10 — Mendapatkan dan mengevaluasi pengunjung

Target 50 pengunjung/hari merupakan sasaran pertumbuhan, bukan hasil otomatis setelah website online.

1. Cantumkan URL di profil bisnis lokal, bio media sosial, katalog, kemasan, dan materi promosi.
2. Gunakan QR code untuk pelanggan toko/acara agar dapat membuka katalog.
3. Publikasikan konten produk, contoh pekerjaan, dan jawaban pertanyaan pelanggan yang mengarah ke halaman relevan.
4. Gunakan parameter UTM untuk membedakan tautan kampanye; hindari memasukkan data pribadi dalam URL.
5. Pantau kunjungan, sumber trafik, halaman tujuan, dan klik kontak setiap minggu.
6. Catat kualitas pertanyaan pelanggan dan penjualan agar keputusan tidak hanya berdasarkan jumlah kunjungan.
7. Setelah 30 hari, perbaiki halaman yang ramai tetapi sedikit menghasilkan kontak.
8. Evaluasi target 50/hari pada periode 30–90 hari. Jika belum tercapai, tinjau distribusi konten, relevansi penawaran, dan kanal pemasaran sebelum menambah infrastruktur.

Iklan berbayar bersifat opsional dengan anggaran terpisah; keberhasilan bergantung pada pasar, penawaran, materi iklan, dan tindak lanjut pemilik.

## 15. Langkah 11 — Pemeliharaan

| Frekuensi | Kegiatan | Penanggung jawab |
| --- | --- | --- |
| Mingguan | Periksa kontak, perubahan jam/harga, dan respons pelanggan | Pemilik |
| Bulanan | Tinjau analitik, link rusak, kuota hosting, dan performa | Pemilik + developer |
| Bulanan atau saat ada perbaikan penting | Perbarui dependensi dengan preview dan pemeriksaan sebelum rilis | Developer |
| Tiap perubahan konten | Build, cek preview, lalu deploy | Developer/editor |
| Berkala | Ekspor konten CMS jika ada, simpan aset asli, dan uji pemulihan | Developer |
| Sebelum jatuh tempo | Perpanjang domain dan layanan berbayar | Pemilik |

Aktifkan autentikasi multifaktor pada akun penting. Simpan kode di Git dan aset asli pada penyimpanan terpisah. Dokumentasikan akses pemilik tanpa menaruh password di repositori.

## 16. Estimasi jadwal

Estimasi untuk satu developer, satu UMKM, konten cukup siap, dan tanpa CMS/backend khusus: **15–20 hari kerja**. Waktu belajar framework, menunggu foto, perubahan besar desain, dan pembuatan konten tambahan dapat memperpanjang jadwal.

| Tahap | Estimasi | Ketergantungan |
| --- | --- | --- |
| Discovery dan pengumpulan konten | 2–3 hari | Ketersediaan pemilik dan aset |
| Sitemap, wireframe, desain | 3–4 hari | Konten utama dan ruang lingkup |
| Setup dan prototipe rendering | 1–2 hari | Pilihan framework |
| Implementasi halaman | 4–5 hari | Desain dan rendering disepakati |
| SEO, performa, QA, revisi | 3–4 hari | Halaman lengkap |
| Deployment dan serah terima | 2 hari | QA lulus dan akses domain |

Promosi dan evaluasi trafik berjalan setelah peluncuran selama 30–90 hari, terpisah dari estimasi pembangunan.

## 17. Perencanaan biaya

Susun anggaran berdasarkan penawaran penyedia pada saat pembelian; dokumen ini tidak menetapkan harga pasar atau menjanjikan paket gratis tertentu.

| Komponen | Sifat biaya | Dasar pemilihan |
| --- | --- | --- |
| Domain | Tahunan | Harga registrasi dan perpanjangan, kepemilikan akun |
| Hosting/CDN | Sesuai paket | Kuota transfer/build, fitur domain, dan kebutuhan dukungan |
| Desain dan implementasi | Sekali atau per proyek | Jumlah halaman, kualitas aset, revisi, dan integrasi |
| Foto/copywriting | Opsional | Kesiapan materi bisnis |
| CMS/form/email | Opsional berulang | Frekuensi edit dan kebutuhan kontak |
| Pemeliharaan | Internal atau kontrak | Waktu pembaruan, monitoring, dan dukungan |
| Promosi | Anggaran terpisah | Kanal dan sasaran akuisisi pelanggan |

Rumus anggaran tahun pertama: implementasi + domain + layanan berulang selama 12 bulan + konten + promosi + cadangan yang disepakati.

## 18. Risiko dan keputusan lanjutan

| Risiko | Tindakan |
| --- | --- |
| Konten terlambat | Selesaikan konten inti sebelum desain final |
| SPA sulit dibagikan atau konten HTML kosong | Buktikan prerender/HTML per URL sejak setup |
| Foto terlalu berat | Tetapkan anggaran aset dan kompres sebelum upload |
| Target pengunjung belum tercapai | Evaluasi kanal pemasaran dan relevansi konten |
| Pemilik sering mengubah katalog | Tambahkan CMS setelah alur edit dipahami |
| Formulir menjadi sasaran spam | Validasi server, pembatasan permintaan, proteksi spam |
| Lonjakan biaya | Pantau penggunaan dan aktifkan alert bila tersedia |
| Fitur berkembang menjadi toko online | Buat scope terpisah untuk transaksi dan backend |

Upgrade berdasarkan bottleneck terukur. Bertambahnya trafik pada halaman statis belum otomatis memerlukan VPS; fitur dinamis, kuota, dan kebutuhan operasional lebih menentukan.

## 19. Checklist selesai dan serah terima

- [ ] Konten, nomor kontak, dan harga disetujui pemilik.
- [ ] Seluruh halaman prioritas dan CTA berfungsi.
- [ ] Website nyaman digunakan dari ponsel dan keyboard.
- [ ] Desain mengikuti karakter berani, playful, dan kekinian; tanpa gradient ungu, emoji, atau pembuka generik yang dilarang.
- [ ] Referensi video telah ditinjau dan keputusan adaptasi desain/animasi didokumentasikan sebelum desain final.
- [ ] Animasi tidak menghambat CTA, dan mode reduced motion tetap menampilkan seluruh konten.
- [ ] Calon pelanggan dapat memahami penawaran, menemukan produk, dan mengakses kontak dengan mudah.
- [ ] HTML awal, metadata, sitemap, canonical, dan 404 diperiksa.
- [ ] Build serta pemeriksaan proyek lulus.
- [ ] Domain, HTTPS, analitik, dan monitoring aktif.
- [ ] Pemilik menerima akses akun bisnis dan panduan pembaruan.
- [ ] Backup aset, repositori, dan prosedur rollback tersedia.
- [ ] Penanggung jawab maintenance dan perpanjangan domain jelas.
- [ ] Jadwal evaluasi trafik 30 hari pertama ditentukan.

**Urutan pelaksanaan:** brief → konten → sitemap → desain → setup dan bukti rendering → implementasi → SEO/performa → QA → deployment → promosi → pemeliharaan.
