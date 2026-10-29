<script setup lang="ts">
import { computed, ref } from 'vue'
import { ArrowUpRight, Search } from 'lucide-vue-next'
import BaseModal from '../../shared/components/BaseModal.vue'
import DeviceVisual from '../../shared/components/DeviceVisual.vue'
import { categories, products } from './catalog.data'
import type { Category, Product } from './catalog.data'
const emit = defineEmits<{ contact: [message: string] }>()
const active = ref<Category>('Semua')
const query = ref('')
const selected = ref<Product | null>(null)
const visible = computed(() =>
  products.filter(
    (p) =>
      (active.value === 'Semua' || p.category === active.value) &&
      `${p.name} ${p.category}`.toLowerCase().includes(query.value.toLowerCase().trim()),
  ),
)
function inquire() {
  const p = selected.value
  selected.value = null
  if (p)
    emit(
      'contact',
      `Halo Nexora Tech, saya ingin menanyakan model, harga, stok, dan garansi ${p.name}.`,
    )
}
function resetFilters() {
  query.value = ''
  active.value = 'Semua'
}
</script>
<template>
  <section id="produk" class="catalog section wrap" data-reveal>
    <div class="section-heading">
      <div>
        <p class="eyebrow">02 / FIND YOUR NEXT DEVICE</p>
        <h2>Upgrade kecil.<br /><span>Kemungkinan besar.</span></h2>
      </div>
      <p class="section-intro">
        Satu tempat untuk perangkat pilihanmu.<br />Jelajahi kategori, lalu tanyakan detailnya.
      </p>
    </div>
    <div class="catalog-toolbar">
      <div class="filters" role="group" aria-label="Filter produk">
        <button
          v-for="category in categories"
          :key="category"
          :aria-pressed="active === category"
          @click="active = category"
        >
          {{ category }}
        </button>
      </div>
      <label class="search"
        ><Search :size="16" /><input
          v-model="query"
          type="search"
          placeholder="Cari perangkat..."
          aria-label="Cari produk"
      /></label>
    </div>
    <p class="result-count" aria-live="polite">{{ visible.length }} pilihan kategori produk</p>
    <div class="product-grid">
      <article v-for="(product, i) in visible" :key="product.id" class="product-card">
        <button
          class="product-visual"
          :aria-label="`Lihat ${product.name}`"
          @click="selected = product"
        >
          <span class="product-tag">{{ product.category }}</span
          ><DeviceVisual :kind="product.kind" :tone="i % 2 ? 'silver' : 'blue'" /><span
            class="product-open"
            ><ArrowUpRight :size="19"
          /></span>
        </button>
        <div class="product-info">
          <h3>{{ product.name }}</h3>
          <p>{{ product.tags.join(' · ') }}</p>
          <button class="text-link" @click="selected = product">
            Lihat pilihan <ArrowUpRight :size="14" />
          </button>
        </div>
      </article>
    </div>
    <div v-if="!visible.length" class="empty-state">
      <h3>Belum ada yang cocok.</h3>
      <p>Coba nama atau kategori lain.</p>
      <button class="button button-accent" @click="resetFilters">Reset pencarian</button>
    </div>
    <p class="demo-caption">
      Ilustrasi perangkat bersifat konseptual, bukan foto model tertentu. Harga, stok, kondisi, dan
      garansi dikonfirmasi sebelum transaksi.
    </p>
    <BaseModal
      :open="!!selected"
      :title="selected?.name || 'Detail produk'"
      @close="selected = null"
      ><div v-if="selected" class="product-detail">
        <div class="detail-art"><DeviceVisual :kind="selected.kind" /></div>
        <div>
          <p class="eyebrow">{{ selected.category }}</p>
          <h2>{{ selected.name }}</h2>
          <p>{{ selected.description }}</p>
          <div class="detail-tags">
            <span v-for="tag in selected.tags" :key="tag">{{ tag }}</span>
          </div>
          <p class="detail-note">
            Tanyakan harga terbaru, model, kapasitas, kondisi, kelengkapan, serta jenis garansi
            sebelum memesan.
          </p>
          <button class="button button-accent" @click="inquire">
            Tanya produk ini <ArrowUpRight :size="16" />
          </button>
        </div></div
    ></BaseModal>
  </section>
</template>
<style scoped>
.catalog {
  padding-top: 65px;
}
.catalog-toolbar {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 30px;
  align-items: center;
}
.filters {
  display: flex;
  gap: 7px;
  flex-wrap: wrap;
}
.filters button {
  border: 1px solid #7da0ca;
  background: #fff9;
  border-radius: 8px;
  font-size: 11px;
  padding: 10px 17px;
}
.filters button[aria-pressed='true'] {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}
.search {
  display: flex;
  align-items: center;
  gap: 9px;
  background: #fff9;
  border: 1px solid #7da0ca;
  border-radius: 9px;
  padding: 10px 12px;
  color: var(--muted);
}
.search input {
  width: 135px;
  min-width: 0;
  background: none;
  border: 0;
  font: inherit;
  font-size: 11px;
  color: var(--ink);
}
.result-count {
  font-size: 10px;
  color: var(--muted);
  margin: 18px 0;
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}
.product-card {
  background: #ffffffb3;
  border: 1px solid white;
  border-radius: 17px;
  overflow: hidden;
}
.product-visual {
  position: relative;
  display: grid;
  place-items: center;
  background: linear-gradient(140deg, #f3faff, #e7f5ff);
  width: 100%;
  height: 280px;
  border: 0;
  overflow: hidden;
}
.product-visual > .device-art {
  transform: scale(0.75) rotate(-10deg);
  transition: transform 0.4s;
}
.product-visual:hover > .device-art {
  transform: scale(0.8) rotate(-4deg);
}
.product-tag {
  position: absolute;
  top: 17px;
  left: 17px;
  font-size: 9px;
  color: #405e80;
  background: #fff9;
  border-radius: 6px;
  padding: 6px 9px;
  z-index: 1;
}
.product-open {
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: var(--accent);
}
.product-info {
  padding: 22px;
}
.product-info h3 {
  font-size: 18px;
  letter-spacing: -0.6px;
  font-weight: 600;
  margin: 0;
}
.product-info p {
  font-size: 10px;
  color: var(--muted);
  margin: 10px 0 20px;
}
.product-info .text-link {
  font-size: 10px;
}
.empty-state {
  text-align: center;
  padding: 45px;
}
.empty-state p {
  font-size: 13px;
  color: var(--muted);
}
.product-detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  align-items: center;
}
.detail-art {
  display: grid;
  place-items: center;
  background: #e7f5ff;
  border-radius: 15px;
  min-height: 330px;
  overflow: hidden;
}
.detail-art > .device-art {
  transform: scale(0.85) rotate(-10deg);
}
.product-detail h2 {
  font-size: 30px;
}
.product-detail p {
  font-size: 12px;
  line-height: 1.8;
  color: var(--muted);
}
.detail-tags {
  display: flex;
  gap: 7px;
  flex-wrap: wrap;
}
.detail-tags span {
  font-size: 9px;
  padding: 6px 9px;
  background: #e7f5ff;
  border-radius: 6px;
}
.detail-note {
  margin: 20px 0;
}
@media (max-width: 850px) {
  .catalog-toolbar {
    align-items: flex-start;
    flex-direction: column;
  }
  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 550px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
  .product-detail {
    grid-template-columns: 1fr;
  }
  .detail-art {
    min-height: 260px;
  }
  .detail-art > .device-art {
    transform: scale(0.7) rotate(-10deg);
  }
  .filters button {
    padding: 9px 11px;
    font-size: 10px;
  }
  .catalog {
    padding-top: 45px;
  }
}
</style>
