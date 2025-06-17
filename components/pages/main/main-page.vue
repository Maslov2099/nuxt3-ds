<template>
  <div class="main">
    <div
      class="container container--flex container--flex-wrap container--flex-end"
    >
      <div class="main__content">
        <div class="main__title">
          <span class="color">Создаем онлайн-сервисы и&nbsp;приложения</span>
          для&nbsp;роста вашего бизнеса
        </div>
        <div class="main__description">
          <services :services-list="servicesList" />
        </div>

        <div class="main__buttons">
          <div class="main__buttons-item">
            <ds-modal label="Получить консультацию" />
<!--            <a-->
<!--              href="#"-->
<!--              class="btn modal-link"-->
<!--              data-modal="#modal-form-consultation"-->
<!--              onclick="ym(62725381,'reachGoal','button_kons')"-->
<!--            >-->
<!--              <span>Получить консультацию</span>-->
<!--            </a>-->
          </div>
          <div class="main__buttons-item">
            <a
              href="/files/Presentation-DrSofter.ru-2023.pdf"
              class="btn btn--light"
              download="Presentation-DrSofter.ru-2023.pdf"
              target="_blank"
              onclick="ym(62725381,'reachGoal','button_download')"
            >
              <icon-pdf />
              <span>Презентация компании</span>
              <icon-download></icon-download>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const servicesList = ref([
  "Корпоративные порталы",
  "Личные кабинеты",
  "b2b-системы",
  "CRM и ERP",
  "Микросервисы",
]);
</script>

<style scoped></style>
