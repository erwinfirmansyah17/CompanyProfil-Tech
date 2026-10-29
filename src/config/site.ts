/** Identitas contoh. Isi dengan informasi usaha yang telah diverifikasi sebelum publikasi. */
export const site = {
  name: 'Nexora Tech',
  demo: true,
  whatsapp: '', // Format internasional: 628xxxxxxxxxx. Kosong = mode pratinjau kontak.
  defaultMessage:
    'Halo Nexora Tech, saya ingin konsultasi memilih perangkat dan menanyakan stok serta harga.',
}

export function contactUrl(message = site.defaultMessage): string | null {
  if (!/^\d{8,15}$/.test(site.whatsapp)) return null
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}
