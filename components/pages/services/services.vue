<template>
  <div class="services__list">
    <div class="services__row">
      <div
        v-for="(item, index) in servicesList"
        class="services__item"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  servicesList: {
    type: Array,
    required: true,
  },
});
const { servicesList } = props;
</script>

<style scoped></style>
