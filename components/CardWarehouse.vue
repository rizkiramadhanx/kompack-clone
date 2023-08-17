<template>
  <div
    class="card mt-4 position-relative bg-black px-2 pb-3 flex flex-column justify-content-between text-white"
  >
    <div class="position-absolute top-0 start-50 translate-middle">
      <location />
    </div>
    <div>
      <h3 class="text-center title_card">{{ alamat }}</h3>
      <div class="mt-5">
        <div class="d-flex gap-3 text-card">
          <div>
            <clock class="icon_card" />
          </div>
          <div>
            <div>Jam Operasional</div>
            <div>{{ jam }}</div>
          </div>
        </div>
        <div class="mt-2">
          <div class="d-flex gap-3 text-card">
            <div>
              <truck class="icon_card" />
            </div>
            <div>{{ pengiriman }}</div>
          </div>
        </div>
      </div>
    </div>
    <button class="btn btn-primary mt-3" v-show="pendingin">
      <pendingin />
      Tersedia Penyimpanan pendingin
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  alamat: String,
  jam: String,
  pengiriman: String,
  pendingin: Boolean,
});

import clock from "assets/svg/clock.vue";
import truck from "assets/svg/truck.vue";
import pendingin from "assets/svg/pendingin.vue";
import location from "assets/svg/location-gudang.vue";
</script>

<style scoped>
.card {
  padding-top: 50px;
  width: 250px;
  border-radius: 20px;
}

.text-card {
  font-size: 12px;
}
.icon_card {
  height: 30px;
}

.title_card {
  font-size: 16px;
  font-weight: 500px;
  color: #0899ec;
}

.btn-primary {
  background-color: #f95335;
  border: #f95335;
  border-radius: 20px;
  font-size: 10px;
}
</style>
