<template>
  <ClientOnly>
    <full-page id="fullpage" ref="fullpage" :options="options">
      <div
        v-for="(page, index) in options.anchors"
        class="section"
        :class="`section-${page}`"
        :id="`id-${page}`"
      >
        <main-page v-if="index === 0" />
        <services-page v-else-if="index === 1" />
        <div v-else class="main">
          <div
            class="container container--flex container--flex-wrap container--flex-end"
          >
            <div class="main__content">
              <div class="main__title">
                <span class="color"
                  >{{ page }}Создаем онлайн-сервисы и&nbsp;приложения</span
                >
                для&nbsp;роста вашего бизнеса
              </div>
            </div>
          </div>
        </div>
      </div>
    </full-page>
  </ClientOnly>
</template>

<script setup lang="ts">
const options = {
  responsive: 1025,
  dragAndMove: true,
  css3: true,
  navigation: true,
  showActiveTooltip: false,
  anchors: [
    "company",
    "page-services",
    "StandartPark.ru",
    "Altube.ru",
    "GroupFund.us",
    "Aopt.ru",
    "FundsNow.org",
    "page-team",
    "page-team",
    "page-contacts",
    "page-form",
  ],
  menu: "#menu",
  navigationTooltips: ["", "", "", "", "", ""],
  normalScrollElements: "#modal, .modal, #map, textarea",
  afterLoad: function (origin, destination, direction) {
    // let preloader = document.querySelector('.preloader')
    let section = document.querySelectorAll(".section");
    for (let i = 0; i < section.length; i++) {
      section[i].classList.remove("loaded");
    }
    destination.item.classList.add("loaded");
    // setTimeout(function() {
    //   preloader.classList.add('hide')
    // },1000)
  },
};
</script>

<style scoped></style>
