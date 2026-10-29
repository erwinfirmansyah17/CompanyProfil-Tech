<script setup lang="ts">
import { ref } from 'vue'
import { ArrowUpRight, Plus, Minus, MessageCircle, MapPin, Clock } from 'lucide-vue-next'
const emit = defineEmits<{ contact: [] }>()
const opened = ref<number | null>(0)
const faqs = [
  {
    question: 'Bagaimana cara mengetahui harga dan stok?',
    answer:
      'Pilih kategori produk, buka detailnya, lalu tekan “Tanya produk ini”. Model, harga, stok, kondisi, dan garansi perlu dikonfirmasi dengan toko sebelum transaksi.',
  },
  {
    question: 'Apakah ini toko resmi Samsung atau Apple?',
    answer:
      'Website ini adalah konsep company profile konter multi-brand, bukan website resmi Samsung, Apple, atau merek lain. Penyebutan merek hanya menunjukkan kategori produk; status reseller resmi tidak diklaim.',
  },
  {
    question: 'Apakah produk memiliki garansi?',
    answer:
      'Jenis, cakupan, dan masa garansi dapat berbeda menurut produk, kondisi, serta penjual. Minta informasi tertulis dan bukti pembelian sebelum menyelesaikan transaksi.',
  },
  {
    question: 'Bisakah saya membeli langsung dari website?',
    answer:
      'Website ini merupakan profil dan katalog informasi. Tidak ada checkout atau pembayaran online. Pemesanan dilakukan setelah berkonsultasi melalui kontak toko yang telah diaktifkan.',
  },
]
</script>
<template>
  <section class="faq section wrap" data-reveal>
    <div>
      <p class="eyebrow">A LITTLE HELP BEFORE YOU CHOOSE</p>
      <h2>Masih ada<br /><span>yang ingin ditanyakan?</span></h2>
    </div>
    <div class="faq-list">
      <article v-for="(faq, i) in faqs" :key="faq.question">
        <h3>
          <button
            :aria-expanded="opened === i"
            :aria-controls="`faq-${i}`"
            @click="opened = opened === i ? null : i"
          >
            {{ faq.question }}<Minus v-if="opened === i" :size="17" /><Plus v-else :size="17" />
          </button>
        </h3>
        <div v-show="opened === i" :id="`faq-${i}`" class="faq-answer">{{ faq.answer }}</div>
      </article>
    </div>
  </section>
  <section id="kontak" class="contact-banner wrap" data-reveal>
    <div>
      <p class="eyebrow">04 / READY FOR YOUR NEXT?</p>
      <h2>Langkah berikutnya,<br /><span>mulai dari sini.</span></h2>
      <p>Ceritakan kebutuhanmu.<br />Kita cari perangkat yang cocok bersama.</p>
      <button class="button button-accent" @click="emit('contact')">
        Konsultasi perangkat <ArrowUpRight :size="16" />
      </button>
    </div>
    <div class="store-info">
      <div>
        <MessageCircle :size="18" />
        <p>Chat sebelum berkunjung<small>Konfirmasi produk dan ketersediaan</small></p>
      </div>
      <div>
        <MapPin :size="18" />
        <p>Lokasi toko<small>Alamat resmi akan dilengkapi</small></p>
      </div>
      <div>
        <Clock :size="18" />
        <p>Jam operasional<small>Jadwal toko akan dilengkapi</small></p>
      </div>
    </div>
  </section>
</template>
<style scoped>
.faq {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 55px;
  padding-top: 30px;
}
.faq h2 {
  font-size: 36px;
}
.faq-list article {
  border-bottom: 1px solid var(--line);
}
.faq-list article:first-child {
  border-top: 1px solid var(--line);
}
.faq-list h3 {
  margin: 0;
}
.faq-list button {
  width: 100%;
  border: 0;
  background: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  font-size: 12px;
  gap: 18px;
  padding: 21px 0;
}
.faq-list svg {
  flex-shrink: 0;
  color: var(--accent);
}
.faq-answer {
  font-size: 11px;
  line-height: 1.9;
  color: var(--muted);
  padding: 0 25px 22px 0;
}
.contact-banner {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 50px;
  background: #ffffff7a;
  border: 1px solid white;
  border-radius: 20px;
  padding: 48px;
  margin-bottom: 55px;
}
.contact-banner h2 {
  font-size: 43px;
}
.contact-banner > div > p:not(.eyebrow) {
  font-size: 12px;
  line-height: 1.8;
  color: var(--muted);
  margin: 20px 0;
}
.store-info {
  display: flex;
  flex-direction: column;
  gap: 22px;
  justify-content: center;
}
.store-info > div {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.store-info svg {
  color: var(--accent);
}
.store-info p {
  font-size: 12px;
  margin: 0;
}
.store-info small {
  display: block;
  font-size: 10px;
  color: var(--muted);
  margin-top: 7px;
}
@media (max-width: 750px) {
  .faq {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .contact-banner {
    grid-template-columns: 1fr;
    padding: 28px;
    gap: 35px;
  }
  .contact-banner h2 {
    font-size: 34px;
  }
  .faq h2 {
    font-size: 30px;
  }
}
</style>
