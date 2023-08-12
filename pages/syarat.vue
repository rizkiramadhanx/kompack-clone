<template>
  <section class="container mt-5 mb-5">
    <h2 class="text-center title_syarat fs-3 border-bottom">
      Syarat dan Ketentuan
    </h2>
    <p>Selamat datang di platform Kompack</p>
    <p class="mt-2 text_syarat">
      Syarat dan ketentuan di bawah ini mengatur penggunaan layanan jasa yang
      ditawarkan oleh Kompack di bawah naungan
      <b>PT. Kampung Marketerindo Berdaya (Komerce)</b> terkait penyedia
      platform pengelola sistem pergudangan dari mulai inbound, management stok,
      sampai pengemasan dan pengiriman. Syarat dan ketentuan ini dapat
      mempengaruhi hak dan kewajiban pengguna jasa Kompack dan di bawah
      ketentuan hukum yang berlaku. Dengan menggunakan layanan kami, Anda
      dianggap telah membaca, mengerti, dan menyetujui serta terikat dan tunduk
      dengan segala syarat dan ketentuan yang berlaku di sini. Syarat dan
      ketentuan ini dapat diubah oleh kami dengan pemberitahuan terlebih dahulu.
    </p>
    <p class="text_syarat">
      Rasakan pengalaman layanan fulfillment yang mudah, hemat, dan beragam
      manfaat lainnya dari Kompack. Kami juga berkomitmen untuk terus mendukung
      perekonomian dalam negeri dengan memberikan kemudahan dalam menjalankan
      bisnis bagi UMKM dan pebisnis online.
    </p>
    <b>1. Definisi</b>
    <div class="row">
      <template v-for="(list, key) in listDefinisi">
        <div class="col-1 list">1.{{ key + 1 }}</div>
        <p class="col-11">
          {{ list }}
        </p>
      </template>
    </div>
    <b>1. Definisi</b>
    <div class="row">
      <template v-for="(list, key) in listDefinisi">
        <div class="col-1 list">1.{{ key + 1 }}</div>
        <p class="col-11">
          {{ list }}
        </p>
      </template>
    </div>
    <b>2. PENGGUNAAN JASA</b>
    <div class="row">
      <template v-for="(list, key) in listPenggunaanJasa">
        <div class="col-1 list">2.{{ key + 1 }}</div>
        <p class="col-11">
          {{ list }}
        </p>
      </template>
    </div>
    <b>3. SYARAT PENGGUNA PLATFORM</b>
    <div class="row">
      <template v-for="(list, key) in listSyaratPenggunaan">
        <div class="col-1 list">1.{{ key + 1 }}</div>
        <p class="col-11">
          {{ list }}
        </p>
      </template>
    </div>
    <b>4. KETENTUAN LAINNYA</b>
    <div class="row">
      <template v-for="(list, key) in ListKetentuanLainya">
        <div class="col-1 list">1.{{ key + 1 }}</div>
        <p class="col-11">
          {{ list }}
        </p>
      </template>
    </div>
  </section>
</template>
<script setup>
definePageMeta({
  layout: "main",
});

const listDefinisi = [
  `"Kami" : Adalah PT. Kampung Marketerindo Berdaya selaku pemilik Komerce dan pengelola platform Kompack.`,
  `"Anda" : Adalah orang yang mengakses situs atau pengguna platform Kompack.`,
  `"Partner" : Usaha perorangan atau kelompok yang menggunakan jasa fulfillment dari Kompack.`,
  `“Mitra gudang” : Usaha perorangan atau kelompok yang menyediakan jasa fulfillment yang telah bermitra dengan Kompack.`,
  `"Ekspedisi" : Perusahaan penyedia jasa pengiriman.`,
  `"UMKM" : Bisnis yang dijalankan oleh perseorangan, rumah tangga, atau badan usaha yang memenuhi kriteria yang ditetapkan oleh Undang- undang No. 20 tahun 2008.`,
  `"Pebinsis online" : Perusahaan atau perseorangan yang menjalankan bisnisnya melalui sistem digital atau elektronik.`,
  `"Data Pribadi" : Data-data pribadi Pengguna yang diberikan kepada pihak Komerce yang tak terbatas pada meliputi nama, jenis kelamin, nomor telepon, alamat lengkap, informasi bisnis sebagaimana yang diminta dalam proses registrasi.`,
  `“Inbound” : Proses memasukkan barang milik partner ke gudang milik mitra gudang.`,
];

const listPenggunaanJasa = [
  "Anda tidak diperkenankan untuk menggunakan situs Kompack, sebagian atau keseluruhan konten dari situs Kompack untuk keperluan pribadi. Hal ini dapat diartikan bahwa Anda hanya diperkenankan menggunakan situs, aplikasi, dan konten dari Kompack untuk keperluan individu atau bisnis yang menyediakan pengelolaan gudang.",
  "Penyalahgunaan situs Kompack untuk kepentingan pribadi maupun kelompok yang melanggar hukum akan ditindak sesuai dengan peraturan yang diatur dalam Undang-Undang yang berlaku di Republik Indonesia.",
  "Pengguna jasa pengelolaan gudang Kompack yang terbukti menyalahgunakan kerjasama dengan Komerce untuk tindakan yang melanggar hukum akan ditindak sesuai dengan peraturan perundang-undangan yang berlaku.",
  "Pengguna jasa dan situs Kompack tidak diperkenankan untuk menggunakan situs dan/atau aplikasi untuk tindakan yang menganggu atau melanggar hak orang lain.",
  "Pengguna situs Kompack tidak diperkenankan untuk mengubah data dan memodifikasi sebagian atau keseluruhan isi dari situs maupun aplikasi tanpa persetujuan dari pihak Kompack.",
  "Pengguna platform Kompack terbagi menjadi Partner dan Mitra gudang.",
];

const listSyaratPenggunaan = [
  "Partner Kompack merupakan individu atau badan usaha yang bergerak di bidang bisnis online baik Business-to-Business maupun Business-to-Consumer (B2C).",
  "Mitra gudang merupakan individu atau badan usaha yang bergerak di bisnis layanan pengelolaan pergudangan bagi pebisnis online Business-to-Business (B2B) maupun Business-to-Consumer (B2C) yang memerlukan jasa fulfillment.",
  "Pengguna platform Kompack harus dapat memberikan informasi dan perusahaan dengan sebenar-benarnya.",
  "Apabila di kemudian hari ditemukan data yang tidak sesuai maka pihak Komerce berhak untuk mengakhiri kerjasama.",
];

const ListKetentuanLainya = [
  "Kompack berhak untuk merubah kebijakan di kemudian hari tanpa persetujuan pihak lain.",
  "Syarat-syarat yang tidak tertulis dalam dokumen ini bersifat fleksibel, kesepakatan dapat dicapai dengan diskusi yang melibatkan kedua belah pihak.",
  "Untuk pertanyaan seputar hal-hal yang tidak disebutkan dalam Syarat dan Ketentuan ini, Anda dapat bertanya melalui e-mail kami di kontak Kompack atau menghubungi kami di nomor kompack.",
];
</script>

<style>
.text_syarat {
  font-size: 16px;
  line-height: 22px;
  color: #222222;
}

.title_syarat {
  background-color: #f7f7f7;
}

.list {
  text-align: right;
}
</style>
