<template>
  <a class="brand" href="#beranda" aria-label="Nexora Tech, kembali ke beranda"
    ><span class="brand-mark"><i></i><i></i><i></i><i></i></span
    ><span>Nexora<span class="brand-sub">TECH</span></span></a
  >
</template>
<style scoped>
.brand {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  text-decoration: none;
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.7px;
}
.brand-mark {
  display: grid;
  grid-template-columns: repeat(2, 7px);
  gap: 2px;
  transform: rotate(-8deg);
}
.brand-mark i {
  width: 7px;
  height: 8px;
  border-radius: 2px;
  background: #052659;
}
.brand-mark i:nth-child(2) {
  background: #7da0ca;
}
.brand-mark i:nth-child(3) {
  background: #7da0ca;
}
.brand-sub {
  font-size: 7px;
  letter-spacing: 1.4px;
  font-weight: 500;
  margin-left: 6px;
  color: var(--muted);
}
</style>
