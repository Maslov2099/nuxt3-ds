<template>
  <ul class="header__nav" id="menu">
    <li
      v-for="(item, index) in navList"
      class="header__nav-item"
      :class="{ 'header__nav-item--projects': index === 2 }"
      :data-menuanchor="item.anchor"
    >
      <a :href="`#${item.anchor}`">
        {{ item.name }}
      </a>
    </li>
  </ul>
  <ul class="header__nav header__nav--mobile" id="mobile-menu">
    <li
      v-for="(item, index) in navList"
      class="header__nav-item"
      :class="{ 'header__nav-item--projects': index === 2 }"
      :data-menuanchor="item.anchor"
    >
      <NuxtLink
        class="nav-link"
        :to="`#${item.anchor}`"
        @click="$pageScroll(item.anchor)"
      >
        {{ item.name }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps({
  navList: {
    type: Array,
    required: true,
  },
});
const { navList } = props;
const { $pageScroll } = useNuxtApp();
</script>

<style scoped></style>
