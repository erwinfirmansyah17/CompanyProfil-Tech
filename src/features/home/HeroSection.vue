<script setup lang="ts">
import {
  ArrowUpRight,
  ArrowRight,
  Play,
  ShieldCheck,
  Headphones,
  Smartphone,
} from 'lucide-vue-next'
import DeviceVisual from '../../shared/components/DeviceVisual.vue'
const emit = defineEmits<{ contact: [] }>()
</script>
<template>
  <section id="beranda" class="hero">
    <div class="hero-copy">
      <p class="eyebrow">YOUR NEXT EVERYDAY COMPANION</p>
      <h1>Teknologi pilihan.<br />Untuk hidup<br /><span>lebih terhubung.</span></h1>
      <p class="hero-description">
        Dari smartphone hingga laptop, temukan perangkat yang pas untuk kerja, belajar, dan semua
        hal yang kamu suka.
      </p>
      <div class="hero-actions">
        <a class="button button-accent" href="#produk">Jelajahi produk <ArrowRight :size="16" /></a
        ><button class="button button-outline" @click="emit('contact')">
          <Play :size="13" /> Tanya dulu, yuk
        </button>
      </div>
      <div class="hero-trust">
        <span class="trust-icon"><ShieldCheck :size="22" /></span>
        <p>Pilih dengan yakin.<br /><strong>Konsultasikan kebutuhanmu dulu.</strong></p>
      </div>
    </div>
    <div class="hero-devices">
      <DeviceVisual kind="tablet" class="hero-tablet" /><DeviceVisual
        kind="phone"
        class="hero-phone"
      />
      <div class="floating-label"><span></span> YOUR DAILY UPGRADE</div>
      <span class="orbit-note"
        >A little upgrade,<br /><em>a whole new possibility.</em><ArrowUpRight :size="30"
      /></span>
    </div>
    <aside class="hero-facts">
      <div>
        <strong>01—04</strong><span>Kategori perangkat<br />untuk keseharianmu</span>
      </div>
      <div>
        <Smartphone :size="24" :stroke-width="1.3" /><strong>Multi-brand</strong
        ><span>Lebih banyak pilihan,<br />sesuai kebutuhan</span>
      </div>
      <div>
        <Headphones :size="25" :stroke-width="1.3" /><strong>Let's talk</strong
        ><span>Bantu pilih sebelum<br />kamu membeli</span>
      </div>
    </aside>
  </section>
</template>
<style scoped>
.hero {
  position: relative;
  min-height: 610px;
  display: grid;
  grid-template-columns: 43% 43% 14%;
  align-items: center;
  padding: 35px 48px 65px;
  isolation: isolate;
  overflow: hidden;
}
.hero-copy {
  position: relative;
  z-index: 3;
}
.hero h1 {
  font-size: clamp(40px, 4.5vw, 65px);
  line-height: 1.03;
  font-weight: 500;
  letter-spacing: -3.8px;
  margin: 0;
}
.hero h1 span {
  color: var(--accent);
}
.hero-description {
  font-size: 13px;
  line-height: 1.8;
  color: var(--muted);
  max-width: 330px;
  margin: 22px 0;
}
.hero-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.hero-trust {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 32px;
}
.trust-icon {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  background: #e7f5ff;
  border-radius: 50%;
  color: var(--accent);
}
.hero-trust p {
  font-size: 9px;
  color: var(--muted);
  line-height: 1.7;
}
.hero-trust strong {
  font-weight: 500;
  color: var(--ink);
}
.hero-devices {
  position: relative;
  height: 450px;
  perspective: 1000px;
}
.hero-tablet {
  position: absolute;
  top: 35px;
  left: 90px;
  transform: rotateY(-22deg) rotateZ(-19deg);
  width: 230px !important;
  height: 330px !important;
  animation: float-in 1.1s ease both;
}
.hero-phone {
  position: absolute;
  left: 4px;
  top: 150px;
  transform: rotateY(-22deg) rotateZ(-22deg);
  width: 190px !important;
  height: 290px !important;
  animation: float-in 1.3s ease both;
}
.floating-label {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 7px;
  letter-spacing: 2px;
  padding: 12px 15px;
  background: #ffffff9c;
  backdrop-filter: blur(8px);
  border: 1px solid white;
  border-radius: 8px;
}
.floating-label span {
  display: inline-block;
  width: 5px;
  height: 5px;
  background: var(--accent);
  border-radius: 50%;
  margin-right: 6px;
}
.orbit-note {
  position: absolute;
  top: 45px;
  left: -38px;
  color: var(--accent);
  font-size: 11px;
  transform: rotate(-10deg);
  line-height: 1.5;
}
.orbit-note em {
  font-family: Georgia, serif;
}
.orbit-note svg {
  display: block;
  margin: 5px 0 0 30px;
}
.hero-facts {
  padding-left: 25px;
  display: flex;
  flex-direction: column;
  gap: 34px;
  z-index: 2;
}
.hero-facts > div {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.hero-facts strong {
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.8px;
}
.hero-facts span {
  font-size: 9px;
  line-height: 1.7;
  color: var(--muted);
}
.hero-facts svg {
  color: var(--accent);
}
@keyframes float-in {
  from {
    opacity: 0;
    translate: 0 30px;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
}
@media (max-width: 1050px) {
  .hero {
    padding: 35px 28px 50px;
    grid-template-columns: 46% 54%;
  }
  .hero-facts {
    display: none;
  }
  .hero-tablet {
    left: 75px;
    width: 205px !important;
    height: 300px !important;
  }
  .hero-phone {
    left: 0;
  }
  .hero h1 {
    font-size: 50px;
    letter-spacing: -2.8px;
  }
}
@media (max-width: 700px) {
  .hero {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 35px 22px 30px;
  }
  .hero h1 {
    font-size: clamp(38px, 9.8vw, 55px);
    letter-spacing: -2.2px;
  }
  .hero-description {
    max-width: 100%;
  }
  .hero-devices {
    height: 390px;
    width: 300px;
    max-width: 100%;
    margin: 20px auto 0;
  }
  .hero-tablet {
    width: 185px !important;
    height: 270px !important;
    left: 85px;
    top: 15px;
  }
  .hero-phone {
    width: 160px !important;
    height: 245px !important;
    top: 115px;
    left: 0;
  }
  .orbit-note {
    left: 0;
    top: 25px;
    font-size: 9px;
  }
  .hero-trust {
    margin-top: 20px;
  }
  .floating-label {
    bottom: 0;
    right: 0;
    font-size: 6px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .hero-tablet,
  .hero-phone {
    animation: none;
  }
}
</style>
