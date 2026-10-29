# Nexora Tech — Company profile konter elektronik

Website Vue + Vite + TypeScript untuk konter elektronik multi-brand. Desain mengikuti referensi gambar terbaru: putih/biru muda, panel membulat, tipografi besar, pita transparan, dan komposisi perangkat berperspektif.

Palet aktif: `#021024`, `#052659`, `#5483B3`, `#7DA0CA`, dan `#C1E8FF`. Latar tetap cerah; navy digunakan pada teks dan aksi. Ubah peran warna di `src/styles/tokens.css`.

**Nexora Tech adalah nama contoh.** Nomor WhatsApp, alamat, jam toko, model pasti, harga, stok, dan informasi garansi belum diberikan. Website tidak mengklaim sebagai dealer resmi merek yang disebutkan.

## Menjalankan

```powershell
npm install
npm run dev
```

Buka URL Vite, biasanya `http://127.0.0.1:5173`. Jika Node belum dikenali pada terminal Laragon:

```powershell
$env:Path = 'D:\laragon\bin\nodejs\node-v26.10.0-win-x64;' + $env:Path
npm.cmd run dev
```

```powershell
npm run build
npm run preview
npm run test:e2e
npm run format
```

Build memeriksa TypeScript, membuat bundle, lalu prerender konten ke `dist/index.html`. Deploy isi `dist/` ke hosting statis; tidak membutuhkan PHP/MySQL. Jalankan build sebelum test browser. Tes menggunakan Chrome lokal melalui Playwright.

## Peta kode per fitur

| Bagian                                         | Lokasi                                                          |
| ---------------------------------------------- | --------------------------------------------------------------- |
| Susunan halaman dan dialog konsultasi/privasi  | `src/app/App.vue`                                               |
| Navigasi desktop dan ponsel                    | `src/app/SiteHeader.vue`                                        |
| Footer                                         | `src/app/SiteFooter.vue`                                        |
| Hero dan komposisi perangkat                   | `src/features/home/HeroSection.vue`                             |
| Data kategori dan produk                       | `src/features/catalog/catalog.data.ts`                          |
| Filter, pencarian, hasil kosong, detail produk | `src/features/catalog/CatalogSection.vue`                       |
| Pendekatan layanan toko                        | `src/features/services/ServicesSection.vue`, `services.data.ts` |
| Profil toko                                    | `src/features/story/StorySection.vue`                           |
| FAQ, alamat, jam buka, kontak                  | `src/features/contact/ContactSection.vue`                       |
| Ilustrasi smartphone, tablet, laptop, TWS      | `src/shared/components/DeviceVisual.vue`                        |
| Logo dan modal bersama                         | `src/shared/components/BrandLogo.vue`, `BaseModal.vue`          |
| Animasi masuk                                  | `src/shared/composables/useReveal.ts`                           |
| Identitas dan WhatsApp                         | `src/config/site.ts`                                            |
| Warna dan komponen gaya bersama                | `src/styles/tokens.css`, `global.css`                           |
| Metadata                                       | `index.html`                                                    |
| Prerender                                      | `src/entry-server.ts`, `scripts/prerender.mjs`                  |
| Pengujian                                      | `tests/website.spec.ts`                                         |

Styling fitur berada pada `<style scoped>` komponen masing-masing. Data katalog terpisah dari tampilan. Halaman menggunakan navigasi anchor; detail produk ditampilkan dalam dialog, bukan halaman URL terpisah.

## Katalog dan interaksi

- Kategori Smartphone, Laptop, Tablet, dan Audio.
- Contoh lini Samsung Galaxy, iPhone, laptop/notebook, iPad/Galaxy Tab, serta AirPods/TWS.
- Filter kategori + pencarian nama, keadaan kosong, dan reset pencarian.
- Detail produk dan draf konsultasi yang menyertakan produk terpilih.
- Nomor WhatsApp kosong menampilkan pratinjau draf; tidak ada pengiriman palsu.
- Navigasi ponsel, FAQ, Escape/fokus dialog, reduced motion, dan HTML awal yang diprerender.

Perangkat digambar menggunakan CSS sebagai ilustrasi konseptual. Bentuknya tidak mewakili foto atau spesifikasi model tertentu. Ganti dengan foto produk asli berizin jika katalog model nyata sudah tersedia. Tidak menampilkan harga, stok, jumlah pelanggan, testimoni, atau garansi rekaan.

## Sebelum publikasi

1. Ganti nama, logo, profil toko, kontak, alamat, dan jam buka. Cari `Nexora` untuk penyebutan di seluruh proyek.
2. Isi `site.whatsapp` dengan nomor format internasional `628xxxxxxxxxx` tanpa tanda `+` atau spasi.
3. Lengkapi katalog dengan model, kondisi, harga, stok, foto, serta jenis garansi yang benar.
4. Perbarui privasi dan metadata domain. Hapus `noindex` di `index.html`, ubah `robots.txt`, serta tambahkan canonical/sitemap sesuai URL produksi.
5. Build, uji ulang alur kontak, lalu deploy `dist/`.

Website belum dipublikasikan. Tidak ada checkout, pembayaran, database, login, atau analitik. Font dimuat dari Google Fonts. Foto lama pada `public/images/` tidak digunakan oleh tampilan elektronik baru.
"# CompanyProfil-Tech" 
