<script setup lang="ts">
withDefaults(defineProps<{ kind?: string; tone?: string }>(), { kind: 'phone', tone: 'blue' })
</script>
<template>
  <div class="device-art" :class="[kind, tone]" aria-hidden="true">
    <template v-if="kind === 'laptop'"
      ><div class="laptop-screen">
        <div class="wallpaper"><span></span><i></i></div>
      </div>
      <div class="laptop-base"></div
    ></template>
    <template v-else-if="kind === 'audio'"
      ><div class="earbud bud-one"><i></i></div>
      <div class="earbud bud-two"><i></i></div>
      <div class="charging-case"><i></i></div
    ></template>
    <template v-else
      ><div class="device-frame">
        <div class="wallpaper"><span></span><i></i></div>
        <div class="camera"></div>
        <span class="device-time">09:41</span>
      </div></template
    >
  </div>
</template>
<style scoped>
.device-art {
  position: relative;
  width: 190px;
  height: 260px;
  filter: drop-shadow(13px 25px 18px #5483b325);
}
.device-frame {
  position: absolute;
  inset: 0 30px;
  background: #c1e8ff;
  border: 4px solid #c1e8ff;
  border-radius: 26px;
  box-shadow:
    inset 0 0 0 2px #f3faff,
    5px 2px 0 #7da0ca;
  overflow: hidden;
}
.wallpaper {
  position: absolute;
  inset: 3px;
  overflow: hidden;
  border-radius: 20px;
  background: linear-gradient(145deg, #c1e8ff, #5483b3 45%, #052659);
}
.wallpaper span {
  position: absolute;
  width: 145%;
  height: 85%;
  left: -48%;
  top: 40%;
  background: linear-gradient(140deg, #fff9, #5483b3);
  border-radius: 45%;
  transform: rotate(-35deg);
  box-shadow: 5px -5px 20px #c1e8ff99;
}
.wallpaper i {
  position: absolute;
  left: 30%;
  top: -20%;
  width: 95%;
  height: 100%;
  border-radius: 45%;
  background: linear-gradient(110deg, #c1e8ffcc, #c1e8ff33);
  transform: rotate(-35deg);
  box-shadow: -5px 0 15px #c1e8ff88;
}
.camera {
  position: absolute;
  top: 8px;
  left: calc(50% - 16px);
  width: 32px;
  height: 8px;
  background: #052659;
  border-radius: 15px;
}
.device-time {
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  top: 35px;
  color: white;
  font-size: 27px;
  font-weight: 400;
  letter-spacing: -1px;
}
.tablet .device-frame {
  inset: 0;
  border-radius: 20px;
  border-width: 6px;
}
.tablet {
  width: 230px;
  height: 300px;
}
.tablet .wallpaper {
  border-radius: 13px;
}
.tablet .camera {
  width: 4px;
  height: 4px;
  top: 1px;
  left: 50%;
}
.tablet .device-time {
  font-size: 37px;
  top: 50px;
}
.laptop {
  width: 300px;
  height: 210px;
}
.laptop-screen {
  position: absolute;
  inset: 0 12px 25px;
  border: 7px solid #7da0ca;
  border-radius: 11px;
  background: #c1e8ff;
  box-shadow: 3px 0 0 #c1e8ff;
}
.laptop-screen .wallpaper {
  border-radius: 3px;
  inset: 0;
}
.laptop-base {
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  height: 19px;
  background: linear-gradient(#f3faff, #c1e8ff);
  clip-path: polygon(4% 0, 96% 0, 100% 70%, 95% 100%, 5% 100%, 0 70%);
  box-shadow: 0 10px 15px #5483b333;
}
.laptop-base:after {
  content: '';
  width: 50px;
  height: 4px;
  position: absolute;
  top: 0;
  left: calc(50% - 25px);
  background: #7da0ca;
  border-radius: 0 0 8px 8px;
}
.audio {
  width: 220px;
  height: 230px;
}
.charging-case {
  position: absolute;
  bottom: 0;
  left: 20px;
  width: 180px;
  height: 118px;
  border-radius: 45px;
  background: linear-gradient(150deg, #fff 20%, #c1e8ff 85%);
  box-shadow:
    inset 0 -6px 10px #7da0ca4d,
    3px 4px 0 #c1e8ff;
}
.charging-case:before {
  content: '';
  position: absolute;
  top: 33px;
  left: 0;
  right: 0;
  border-top: 1px solid #7da0ca;
}
.charging-case > i {
  position: absolute;
  width: 5px;
  height: 5px;
  background: #77bc95;
  border-radius: 50%;
  left: 50%;
  top: 65px;
}
.earbud {
  position: absolute;
  width: 40px;
  height: 96px;
  border-radius: 20px;
  background: linear-gradient(100deg, #fff, #c1e8ff);
  top: 4px;
  left: 43px;
  transform: rotate(-22deg);
}
.earbud:before {
  content: '';
  position: absolute;
  left: -10px;
  top: 0;
  width: 48px;
  height: 38px;
  border-radius: 50%;
  background: linear-gradient(150deg, #fff, #c1e8ff);
}
.earbud i {
  position: absolute;
  top: 9px;
  left: -8px;
  width: 14px;
  height: 19px;
  background: #052659;
  border-radius: 50%;
  transform: rotate(-20deg);
}
.bud-two {
  left: 139px;
  top: 0;
  transform: rotate(25deg);
}
.silver .wallpaper {
  background: linear-gradient(140deg, #c1e8ff, #7da0ca, #5483b3);
}
</style>
