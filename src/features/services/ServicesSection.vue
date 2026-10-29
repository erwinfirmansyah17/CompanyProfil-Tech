<script setup lang="ts">
import { ArrowUpRight, Layers, Sparkles, ChartNoAxesColumnIncreasing } from 'lucide-vue-next'
import { services } from './services.data'
const emit = defineEmits<{ contact: [message: string] }>()
const icons = [Layers, Sparkles, ChartNoAxesColumnIncreasing]
</script>
<template>
  <section id="layanan" class="services wrap" data-reveal>
    <div class="service-intro">
      <p class="eyebrow">01 / OUR APPROACH</p>
      <h2>Lebih dari<br />sekadar gadget.</h2>
      <p>Kami bantu kamu mengenal pilihan,<br />sebelum menentukan tujuan.</p>
      <a href="#tentang" class="text-link">Kenali Nexora <ArrowUpRight :size="14" /></a>
    </div>
    <article v-for="(service, i) in services" :key="service.number">
      <span class="service-icon"><component :is="icons[i]" :size="21" :stroke-width="1.5" /></span>
      <h3>{{ service.title }}</h3>
      <p>{{ service.text }}</p>
      <button
        class="text-link"
        @click="
          emit(
            'contact',
            'Halo Nexora Tech, saya ingin konsultasi memilih perangkat sesuai kebutuhan saya.',
          )
        "
      >
        Tanya kami <ArrowUpRight :size="13" />
      </button>
    </article>
  </section>
  <div class="brand-strip wrap">
    <span>PILIHAN EKOSISTEM<br />UNTUK KESEHARIANMU</span><strong>SAMSUNG</strong
    ><strong class="apple">Apple</strong><strong>ASUS</strong><strong>Lenovo</strong
    ><strong>acer</strong>
  </div>
</template>
<style scoped>
.services {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1fr;
  gap: 15px;
  align-items: stretch;
  padding-top: 10px;
}
.service-intro {
  padding: 23px 20px 23px 0;
}
.service-intro h2 {
  font-size: 31px;
  line-height: 1.08;
}
.service-intro > p:not(.eyebrow) {
  font-size: 11px;
  color: var(--muted);
  line-height: 1.7;
}
.service-intro .eyebrow {
  font-size: 8px;
  margin-bottom: 20px;
}
.services article {
  background: #ffffffbd;
  border: 1px solid white;
  border-radius: 14px;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.service-icon {
  color: var(--accent);
  background: #e7f5ff;
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 10px;
}
.services h3 {
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.5px;
  margin: 20px 0 10px;
}
.services article p {
  font-size: 10px;
  color: var(--muted);
  line-height: 1.8;
  margin: 0 0 20px;
}
.services .text-link {
  font-size: 10px;
  margin-top: auto;
}
.brand-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 36px 0;
  border-bottom: 1px solid var(--line);
  color: #405e80;
}
.brand-strip > span {
  font-size: 7px;
  line-height: 1.8;
  letter-spacing: 1px;
}
.brand-strip strong {
  font-size: 17px;
  letter-spacing: -0.7px;
}
.brand-strip strong:first-of-type {
  font-style: italic;
  font-size: 15px;
}
.apple {
  font-weight: 500;
}
@media (max-width: 950px) {
  .services {
    grid-template-columns: 1fr 1fr;
  }
  .service-intro {
    padding-left: 20px;
  }
  .brand-strip {
    flex-wrap: wrap;
    justify-content: center;
  }
  .brand-strip > span {
    width: 100%;
    text-align: center;
  }
}
@media (max-width: 550px) {
  .services {
    grid-template-columns: 1fr;
  }
  .service-intro {
    padding-left: 0;
  }
  .services article {
    padding: 23px;
  }
  .brand-strip {
    gap: 20px;
  }
  .brand-strip strong {
    font-size: 14px;
  }
}
</style>
