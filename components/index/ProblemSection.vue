<template>
  <section class="container mt-5" data-aos="fade-up">
    <div>
      <div>
        <h2 class="text-center">Apakah kamu mengalami masalah ini?</h2>
        <div
          class="d-flex flex-column flex-lg-row gap-4 my-5 justify-content-center align-items-center"
        >
          <div class="d-flex gap-3 col-md-6 align-items-center item-problem">
            <div>
              <img src="~/assets/image/home.png" alt="home" />
            </div>
            <p class="text-problem-item">
              Keterbatasan tempat dan biaya dalam menyediakan fasilitas gudang
              sendiri
            </p>
          </div>
          <div
            class="d-flex gap-3 col-md-6 align-items-center item-problem border-bottom"
          >
            <div>
              <img src="~/assets/image/time.png" alt="time" />
            </div>
            <p class="text-problem-item">
              Keterbatasan tempat dan biaya dalam menyediakan fasilitas gudang
              sendiri
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.text-problem-item {
  max-width: 440px;
  border-bottom: 1px solid #4285f4;
  padding-bottom: 4px;
}

.item-problem {
  padding: 20px 36px;
  border-radius: 20px;
  max-width: 400px;
}

.item-problem:hover {
  box-shadow: 2px 2px 2px 2px;
}

@media (min-width: 0px) and (max-width: 767px) {
  .text-problem-item {
    font-size: 12px;
  }
}
</style>
