<script setup lang="ts">
import { ArrowUpRight, Check } from 'lucide-vue-next'
import DeviceVisual from '../../shared/components/DeviceVisual.vue'
const emit = defineEmits<{ contact: [] }>()
</script>
<template>
  <section id="tentang" class="story section wrap" data-reveal>
    <div class="story-copy">
      <p class="eyebrow">03 / MEET YOUR TECH PARTNER</p>
      <h2>Duniamu.<br /><span>Dalam genggaman.</span></h2>
      <p>
        Nexora Tech adalah konsep konter elektronik multi-brand. Tempat untuk mengenal pilihan
        smartphone, laptop, tablet, dan aksesori yang menemani aktivitas sehari-hari.
      </p>
      <p>
        Kami percaya perangkat yang tepat dimulai dari kebutuhan yang dipahami. Karena itu,
        percakapan dan informasi yang jelas menjadi bagian penting sebelum memilih.
      </p>
      <ul>
        <li><Check :size="15" /> Pilihan kategori dalam satu tempat</li>
        <li><Check :size="15" /> Konsultasi sebelum menentukan perangkat</li>
        <li><Check :size="15" /> Konfirmasi detail sebelum transaksi</li>
      </ul>
      <button class="button button-accent" @click="emit('contact')">
        Kenalan dengan kami <ArrowUpRight :size="16" />
      </button>
    </div>
    <div class="story-scene">
      <DeviceVisual kind="phone" class="story-phone" />
      <div class="scene-card card-one">
        <span class="card-icon"><Check :size="16" /></span>
        <div>Pilih lebih pas<small>Mulai dari kebutuhanmu</small></div>
      </div>
      <div class="scene-card card-two">
        <span class="card-icon"><Check :size="16" /></span>
        <div>Satu tempat<small>Banyak kemungkinan</small></div>
      </div>
      <span class="scene-note">WORK. LEARN. PLAY.<br />STAY CONNECTED.</span>
    </div>
  </section>
</template>
<style scoped>
.story {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 65px;
  align-items: center;
  padding-top: 25px;
}
.story-copy > p:not(.eyebrow) {
  font-size: 12px;
  color: var(--muted);
  line-height: 1.9;
  max-width: 380px;
}
.story-copy h2 {
  margin-bottom: 24px;
}
.story-copy ul {
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 25px 0;
}
.story-copy li {
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 9px;
}
.story-copy li svg {
  color: var(--accent);
}
.story-scene {
  position: relative;
  height: 460px;
  isolation: isolate;
  display: grid;
  place-items: center;
  overflow: hidden;
}
.story-phone {
  transform: rotate(-15deg) scale(1.35);
  z-index: 1;
}
.scene-card {
  position: absolute;
  display: flex;
  gap: 10px;
  align-items: center;
  background: #fffc;
  backdrop-filter: blur(12px);
  border: 1px solid white;
  border-radius: 12px;
  padding: 14px;
  z-index: 2;
  box-shadow: 0 15px 30px #5483b314;
  font-size: 11px;
  transform: rotate(-9deg);
}
.scene-card small {
  display: block;
  font-size: 8px;
  color: var(--muted);
  margin-top: 5px;
}
.card-one {
  left: 0;
  top: 100px;
}
.card-two {
  right: 0;
  top: 50px;
}
.card-icon {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  background: var(--accent);
  color: white;
  border-radius: 8px;
}
.scene-note {
  position: absolute;
  right: 0;
  bottom: 35px;
  font-size: 8px;
  line-height: 1.7;
  letter-spacing: 1.4px;
  color: var(--muted);
}
@media (max-width: 750px) {
  .story {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  .story-copy > p:not(.eyebrow) {
    max-width: 100%;
  }
  .story-scene {
    height: 420px;
  }
  .story-phone {
    transform: rotate(-15deg) scale(1.15);
  }
  .card-one {
    font-size: 9px;
    left: 0;
    top: 130px;
  }
  .card-two {
    font-size: 9px;
    right: 0;
  }
}
</style>
