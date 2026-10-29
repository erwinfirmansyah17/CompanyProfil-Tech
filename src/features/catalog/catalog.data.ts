export const categories = ['Semua', 'Smartphone', 'Laptop', 'Tablet', 'Audio'] as const
export type Category = (typeof categories)[number]
export interface Product {
  id: string
  name: string
  category: Exclude<Category, 'Semua'>
  kind: string
  description: string
  tags: string[]
}
// Contoh lini produk. Model, stok, harga, spesifikasi, dan garansi dikonfirmasi melalui toko.
export const products: Product[] = [
  {
    id: 'galaxy',
    name: 'Samsung Galaxy Series',
    category: 'Smartphone',
    kind: 'phone',
    description:
      'Jelajahi pilihan smartphone Galaxy untuk komunikasi, hiburan, dan aktivitas harian. Tanyakan model yang tersedia sesuai kebutuhanmu.',
    tags: ['Android', 'Pilihan model & warna'],
  },
  {
    id: 'iphone',
    name: 'iPhone Series',
    category: 'Smartphone',
    kind: 'phone',
    description:
      'Temukan pilihan iPhone yang sesuai kebiasaan dan anggaranmu. Model, kapasitas, kondisi, serta ketersediaan dikonfirmasi dengan toko.',
    tags: ['iOS', 'Konsultasi kapasitas'],
  },
  {
    id: 'laptop',
    name: 'Laptop & Notebook',
    category: 'Laptop',
    kind: 'laptop',
    description:
      'Untuk tugas, pekerjaan, atau kebutuhan kreatif. Ceritakan aplikasi yang kamu gunakan agar pilihan perangkat bisa disesuaikan.',
    tags: ['Kerja & belajar', 'Pilihan multi-brand'],
  },
  {
    id: 'ipad',
    name: 'iPad & Galaxy Tab',
    category: 'Tablet',
    kind: 'tablet',
    description:
      'Pilihan tablet untuk belajar, mencatat, menikmati konten, dan menemani mobilitas. Tanyakan kompatibilitas aksesori sebelum membeli.',
    tags: ['Tablet', 'Belajar & berkreasi'],
  },
  {
    id: 'airpods',
    name: 'AirPods & TWS',
    category: 'Audio',
    kind: 'audio',
    description:
      'Audio personal untuk musik, panggilan, dan aktivitas harian. Pastikan model serta kompatibilitas dengan perangkatmu saat konsultasi.',
    tags: ['Wireless audio', 'Cek kompatibilitas'],
  },
]
