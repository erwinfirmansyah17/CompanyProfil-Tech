<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import BrandLogo from '../shared/components/BrandLogo.vue'
const emit = defineEmits<{ privacy: [] }>()
</script>
<template>
  <footer class="wrap footer">
    <div class="footer-top">
      <div>
        <BrandLogo />
        <p>Your everyday tech.<br />A little more connected.</p>
      </div>
      <nav aria-label="Navigasi footer">
        <a href="#layanan">Layanan <ArrowUpRight :size="13" /></a
        ><a href="#produk">Produk pilihan <ArrowUpRight :size="13" /></a
        ><a href="#tentang">Tentang toko <ArrowUpRight :size="13" /></a>
      </nav>
      <div class="footer-note">
        <span>YOUR NEXT EVERYDAY COMPANION.</span>
        <p>
          Company profile konter elektronik multi-brand.<br />Nexora Tech adalah identitas contoh
          toko.
        </p>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© {{ new Date().getFullYear() }} Nexora Tech — Demo company profile</span
      ><button @click="emit('privacy')">Privasi</button><a href="#beranda">Kembali ke atas ↑</a>
    </div>
  </footer>
</template>
<style scoped>
.footer-top {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  padding-bottom: 40px;
}
.footer-top p {
  font-size: 11px;
  line-height: 1.8;
  color: var(--muted);
  margin-top: 20px;
}
.footer-top nav {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  font-size: 11px;
  padding-left: 40px;
}
.footer-top nav a {
  display: flex;
  align-items: center;
  gap: 24px;
  text-decoration: none;
}
.footer-note > span {
  font-size: 8px;
  letter-spacing: 1.3px;
}
.footer-note p {
  margin-top: 14px;
}
.footer-bottom {
  border-top: 1px solid var(--line);
  padding: 22px 0;
  display: flex;
  justify-content: space-between;
  font-size: 9px;
  color: var(--muted);
  gap: 20px;
}
.footer-bottom a {
  text-decoration: none;
}
.footer-bottom button {
  border: 0;
  background: none;
  color: inherit;
  font-size: inherit;
}
@media (max-width: 600px) {
  .footer-top {
    grid-template-columns: 1fr 1fr;
  }
  .footer-top nav {
    padding-left: 15px;
  }
  .footer-note {
    grid-column: 1/-1;
  }
  .footer-bottom {
    flex-wrap: wrap;
    font-size: 8px;
  }
}
</style>
