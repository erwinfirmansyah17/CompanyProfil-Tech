<script setup lang="ts">
import { ref } from 'vue'
import { ArrowUpRight, Copy, Check } from 'lucide-vue-next'
import SiteHeader from './SiteHeader.vue'
import SiteFooter from './SiteFooter.vue'
import HeroSection from '../features/home/HeroSection.vue'
import ServicesSection from '../features/services/ServicesSection.vue'
import CatalogSection from '../features/catalog/CatalogSection.vue'
import StorySection from '../features/story/StorySection.vue'
import ContactSection from '../features/contact/ContactSection.vue'
import BaseModal from '../shared/components/BaseModal.vue'
import { useReveal } from '../shared/composables/useReveal'
import { site, contactUrl } from '../config/site'
useReveal()
const contactOpen = ref(false)
const privacyOpen = ref(false)
const message = ref(site.defaultMessage)
const copied = ref(false)
const copyError = ref(false)
function contact(text?: string) {
  message.value = text || site.defaultMessage
  copied.value = false
  copyError.value = false
  contactOpen.value = true
}
async function copyMessage() {
  try {
    await navigator.clipboard.writeText(message.value)
    copied.value = true
  } catch {
    copyError.value = true
  }
}
</script>
<template>
  <a href="#main" class="skip-link">Lewati ke konten utama</a>
  <div class="site-canvas">
    <SiteHeader @contact="contact()" />
    <main id="main">
      <HeroSection @contact="contact()" />
      <ServicesSection @contact="contact" />
      <CatalogSection @contact="contact" />
      <StorySection @contact="contact()" />
      <ContactSection @contact="contact()" />
    </main>
    <SiteFooter @privacy="privacyOpen = true" />
  </div>
  <BaseModal :open="contactOpen" title="Mulai percakapan" @close="contactOpen = false"
    ><div class="contact-dialog">
      <p class="eyebrow">MULAI DARI SEBUAH CERITA</p>
      <h2>Yuk, ngobrol.</h2>
      <p>Ceritakan perangkat yang kamu cari, kebutuhan penggunaan, dan kisaran anggaranmu.</p>
      <label for="contact-message">Pesanmu</label
      ><textarea id="contact-message" v-model="message" rows="4"></textarea
      ><a
        v-if="contactUrl(message)"
        :href="contactUrl(message)!"
        target="_blank"
        rel="noopener noreferrer"
        class="button button-dark"
        >Lanjut ke WhatsApp <ArrowUpRight :size="18" /></a
      ><template v-else
        ><p class="demo-notice">
          Mode pratinjau: kontak toko belum tersedia. Pesan ini belum dikirim. Kamu dapat menyalin
          draf untuk disimpan terlebih dahulu.
        </p>
        <button class="button button-dark" @click="copyMessage">
          <Check v-if="copied" :size="18" /><Copy v-else :size="18" />{{
            copied ? 'Pesan disalin' : 'Salin draf pesan'
          }}
        </button>
        <p v-if="copyError" role="status">
          Penyalinan tidak tersedia. Pilih dan salin teks pesan secara manual.
        </p>
        <span class="sr-only" role="status">{{
          copied ? 'Pesan berhasil disalin. Belum dikirim.' : ''
        }}</span></template
      >
    </div></BaseModal
  >
  <BaseModal :open="privacyOpen" title="Informasi privasi demo" @close="privacyOpen = false"
    ><div class="contact-dialog">
      <p class="eyebrow">INFORMASI PRIVASI</p>
      <h2>Privasi yang jelas.</h2>
      <p>
        Demo ini tidak memakai akun, formulir server, cookie analitik, atau menyimpan pesan ke
        database. Draf pesan hanya berada di halaman selama sesi penggunaan.
      </p>
      <p>
        Font dimuat dari Google Fonts sehingga browser terhubung ke penyedia tersebut. Foto
        disajikan dari aset lokal website.
      </p>
      <p>
        Jika nomor usaha diaktifkan, tombol WhatsApp membuka layanan eksternal dengan isi pesan yang
        kamu tulis. Pesan baru terkirim setelah kamu mengirimkannya di WhatsApp.
      </p>
      <p>
        Sebelum publikasi sebagai usaha nyata, pemilik perlu memperbarui informasi privasi sesuai
        layanan dan pengumpulan data yang benar-benar digunakan.
      </p>
    </div></BaseModal
  >
</template>
<style scoped>
.site-canvas {
  width: calc(100% - 64px);
  max-width: 1320px;
  background: transparent;
  overflow: clip;
  margin: 32px auto 0;
}
@media (max-width: 700px) {
  .site-canvas {
    width: calc(100% - 20px);
    margin-top: 10px;
  }
}
.contact-dialog {
  max-width: 570px;
  margin: 10px auto;
}
.contact-dialog > p:not(.eyebrow) {
  font-size: 14px;
  line-height: 1.8;
  color: var(--muted);
}
.contact-dialog label {
  font-size: 12px;
  display: block;
  font-weight: 700;
  margin: 25px 0 10px;
}
.contact-dialog textarea {
  width: 100%;
  resize: vertical;
  border: 1px solid var(--line);
  background: #fff;
  color: var(--ink);
  border-radius: 8px;
  padding: 14px;
  font: inherit;
  font-size: 14px;
  line-height: 1.6;
  min-height: 120px;
}
.contact-dialog .button {
  margin-top: 15px;
}
.demo-notice {
  background: #e7f5ff;
  border-radius: 8px;
  padding: 14px;
  font-size: 12px !important;
}
</style>
