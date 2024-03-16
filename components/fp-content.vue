<template>
  <ClientOnly>
    <full-page
      id="fullpage"
      ref="fullpage"
      :options="options"
    >
<!--      <div class="section">-->
<!--        <NuxtWelcome />-->
<!--      </div>-->
<!--      <div class="section">-->
<!--        <div class="slide">-->
<!--          <h3>Slide 2.1</h3>-->
<!--        </div>-->
<!--        <div class="slide">-->
<!--          <h3>Slide 2.2</h3>-->
<!--        </div>-->
<!--        <div class="slide">-->
<!--          <h3>Slide 2.3</h3>-->
<!--        </div>-->
<!--      </div>-->

      <div
        v-for="page in options.anchors"
        class="section"
        :class="`section-${page}`"
      >
        <h3>Section {{ page }}</h3>
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
    anchors: ['company', 'page-services', 'StandartPark.ru', 'Altube.ru', 'GroupFund.us', 'Aopt.ru', 'FundsNow.org', 'page-team', 'page-team', 'page-contacts', 'page-form'],
    menu: '#menu',
    navigationTooltips: ['','','','','',''],
    normalScrollElements: '#modal, .modal, #map, textarea',
    afterLoad: function(origin, destination, direction){
      // let preloader = document.querySelector('.preloader')
      let section = document.querySelectorAll('.section')
      for(let i = 0; i < section.length; i++) {
        section[i].classList.remove('loaded')
      }
      destination.item.classList.add('loaded')
      // setTimeout(function() {
      //   preloader.classList.add('hide')
      // },1000)
    }
  }

</script>

<style scoped>

</style>
