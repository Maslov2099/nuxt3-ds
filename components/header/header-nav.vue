<template>
<!--  <client-only>-->
    <ul
      class="header__nav"
      :class="{'header__nav--mobile' : width <= 1024}"
      :id="width <= 1024 ? 'mobile-menu' : 'menu'"
    >
      <li
        v-for="(item, index) in navList"
        class="header__nav-item"
        :class="{'header__nav-item--projects' : index === 2}"
        :data-menuanchor="item.anchor"
      >
        <a
          :class="{'nav-link' : width <= 1024}"
          :href="`#${item.anchor}`"
        >
          {{ item.name }}
        </a>
      </li>
    </ul>
<!--  </client-only>-->
</template>

<script setup lang="ts">
  import { useWindowSize } from '@vueuse/core'

  const props = defineProps({
    navList: {
      type: Array,
      required: true,
    },
  });
  const { navList } = props

  const { width } = useWindowSize()
</script>

<style scoped>

</style>
