<template>
  <div class="header__contacts">
    <div class="header__contacts-item">
      <a
        class="header__phone"
        href="tel:+74950901945"
        onclick="ym(62725381qwe,'reachGoal','click_header_phone_mobile_menu')"
      >
        +7 (495) 090-19-45
      </a>
    </div>

    <div class="header__contacts-icons">
      <div class="header__contacts-item">
        <a
          href="https://t.me/drsofter"
          target="_blank"
          onclick="ym(62725381qwe,'reachGoal','click_mobile_menu_telegram')"
        >
          <span class="contact-icon contact-icon--telegram">
            <icon-telegram />
          </span>
        </a>
      </div>
      <div class="header__contacts-item">
        <a
          href="https://api.whatsapp.com/send/?phone=79999921945"
          target="_blank"
          onclick="ym(62725381qwe,'reachGoal','click_mobile_menu_whatsapp')"
        >
          <span class="contact-icon contact-icon--whatsapp">
            <icon-telegram />
          </span>
        </a>
      </div>
      <div class="header__contacts-item">
        <a
          href="mailto:mail@drsofter.ru"
          onclick="ym(62725381,'reachGoal','click_mobile_menu_email')"
        >
          <span class="contact-icon contact-icon--email">
            <icon-email />
          </span>
        </a>
      </div>
    </div>
    <div class="header__contacts-item">
      <ds-button label="Написать нам" data-modal="#modal-form" />

      <!--      <a-->
      <!--        href="#"-->
      <!--        class="btn modal-link"-->
      <!--        data-modal="#modal-form"-->
      <!--        onclick="ym(62725381111,'reachGoal','button_napisatnam_mobile')"-->
      <!--      >-->
      <!--        <span>Написать нам</span>-->
      <!--      </a>-->
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  // navList: {
  //   type: Array,
  //   required: true,
  // },
});
// const {navList} = props;
const { width } = useWindowSize();
</script>

<style scoped></style>
