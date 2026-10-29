<script setup lang="ts">
import { ref } from 'vue'
import { ArrowUpRight, Menu, X } from 'lucide-vue-next'
import BrandLogo from '../shared/components/BrandLogo.vue'
const emit = defineEmits<{ contact: [] }>()
const menuOpen = ref(false)
const links = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Produk', href: '#produk' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Kontak', href: '#kontak' },
]
function openContact() {
  menuOpen.value = false
  emit('contact')
}
</script>
<template>
  <header class="site-header">
    <BrandLogo />
    <nav class="desktop-nav" aria-label="Navigasi utama">
      <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
    </nav>
    <button class="button button-outline header-cta" @click="emit('contact')">
      Hubungi kami <ArrowUpRight :size="14" /></button
    ><button
      class="icon-button menu-toggle"
      :aria-expanded="menuOpen"
      aria-controls="mobile-menu"
      :aria-label="menuOpen ? 'Tutup menu' : 'Buka menu'"
      @click="menuOpen = !menuOpen"
    >
      <X v-if="menuOpen" /><Menu v-else />
    </button>
    <nav
      v-if="menuOpen"
      id="mobile-menu"
      class="mobile-nav"
      aria-label="Navigasi ponsel"
      @keydown.esc="menuOpen = false"
    >
      <a v-for="link in links" :key="link.href" :href="link.href" @click="menuOpen = false"
        >{{ link.label }}<ArrowUpRight :size="16" /></a
      ><button class="button button-accent" @click="openContact">
        Konsultasi perangkat <ArrowUpRight :size="16" />
      </button>
    </nav>
  </header>
</template>
<style scoped>
.site-header {
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  padding: 0 44px;
  background: transparent;
  border-radius: 28px 28px 0 0;
  border-bottom: 1px solid #ffffff66;
}
.desktop-nav {
  display: flex;
  gap: 30px;
  font-size: 11px;
  color: #405e80;
}
.desktop-nav a {
  text-decoration: none;
}
.desktop-nav a:hover {
  color: var(--accent);
}
.header-cta {
  font-size: 10px !important;
  min-height: 35px !important;
  padding: 0 16px !important;
  gap: 12px !important;
}
.menu-toggle {
  display: none;
}
.mobile-nav {
  position: absolute;
  left: 0;
  right: 0;
  top: 80px;
  background: #f3faff;
  border: 1px solid var(--line);
  padding: 24px;
  border-radius: 18px;
  box-shadow: 0 15px 25px #0008;
}
.mobile-nav > a {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  text-decoration: none;
  font-size: 13px;
}
.mobile-nav .button {
  margin-top: 15px;
  width: 100%;
}
@media (max-width: 850px) {
  .site-header {
    padding: 0 25px;
  }
  .desktop-nav {
    gap: 18px;
  }
}
@media (max-width: 700px) {
  .site-header {
    height: 82px;
    padding: 0 22px;
  }
  .desktop-nav,
  .header-cta {
    display: none;
  }
  .menu-toggle {
    display: flex;
  }
}
</style>
