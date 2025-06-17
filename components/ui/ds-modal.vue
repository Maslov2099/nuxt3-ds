<template>
  <div>
    <UButton
        :label="label"
        class="btn modal-link"
        @click="isOpen = true"
    />

    <UModal
        v-model="isOpen"
        class="modal modal--form"
    >

      <noindex>
        <div class="modal__container" style="padding-right: 0">
          <div class="modal__wrap">
            <div class="flex modal__header">
              <div class="modal__title modal__title--big">Напишите нам</div>
              <button class="btn-close">⨉</button>
            </div>
            <div class="modal__header-description">
              Оставьте контакты - обсудим ваш проект.
            </div>
            <div class="modal__form-container">
              <ds-form />
            </div>
          </div>
        </div>
      </noindex>


      <div class="p-4">
      </div>
    </UModal>
  </div>
</template>

<script setup lang="ts">
  const isOpen = ref(false)
  const props = defineProps({
    label: {
      type: String,
      required: true,
    }
  });
  const { label } = props;
</script>
