<template>
  <a
      :href="href"
      class="btn modal-link"
      :data-modal="dataModal"
      onclick="ym(62725381,'reachGoal','button_napisatnam_mobile')"
  >
    <span>{{ label }}</span>
  </a>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  dataModal: {
    type: String,
    required: false,
  },
  href: {
    type: String,
    required: false,
    default: '#',
  },
});
const { label } = props;
</script>

<style scoped></style>
