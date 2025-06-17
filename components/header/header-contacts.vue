<template>
  <div class="header__contacts">
    <div class="header__contacts-item">
      <a
        class="header__phone"
        href="tel:+74950901945"
        onclick="ym(62725381qwe,'reachGoal','click_header_phone')"
      >
        +7 (495) 090-19-45
      </a>
      <a
        class="header__phone-icon"
        href="tel:+74950901945"
        onclick="ym(62725381qwe,'reachGoal','click_header_phone')"
      >
        <span class="contact-icon contact-icon--site">
          <icon-phone />
        </span>
      </a>
    </div>
    <div class="header__contacts-item header__contacts-item--messenger">
      <a
        href="https://t.me/drsofter"
        target="_blank"
        onclick="ym(62725381qwe,'reachGoal','click_header_telegram')"
      >
        <span class="contact-icon contact-icon--telegram">
          <icon-telegram />
        </span>
      </a>
    </div>
    <div class="header__contacts-item header__contacts-item--messenger">
      <a
        href="https://api.whatsapp.com/send/?phone=79999921945"
        target="_blank"
        onclick="ym(62725381qwe,'reachGoal','click_header_whatsapp')"
      >
        <span class="contact-icon contact-icon--whatsapp">
          <icon-whatsapp />
        </span>
      </a>
    </div>

    <ds-modal label="Написать нам" />

    <!--    <div class="header__contacts-icons">-->
    <!--      <div class="header__contacts-item">-->
    <!--        <a-->
    <!--            href="https://t.me/drsofter"-->
    <!--            target="_blank"-->
    <!--            onclick="ym(62725381qwe,'reachGoal','click_mobile_menu_telegram')"-->
    <!--        >-->
    <!--          <span class="contact-icon contact-icon&#45;&#45;telegram">-->
    <!--            <icon-telegram />-->
    <!--          </span>-->
    <!--        </a>-->
    <!--      </div>-->
    <!--      <div class="header__contacts-item">-->
    <!--        <a-->
    <!--            href="https://api.whatsapp.com/send/?phone=79999921945"-->
    <!--            target="_blank"-->
    <!--            onclick="ym(62725381qwe,'reachGoal','click_mobile_menu_whatsapp')"-->
    <!--        >-->
    <!--          <span class="contact-icon contact-icon&#45;&#45;whatsapp">-->
    <!--            <icon-telegram />-->
    <!--          </span>-->
    <!--        </a>-->
    <!--      </div>-->
    <!--      <div class="header__contacts-item">-->
    <!--        <a-->
    <!--            href="mailto:mail@drsofter.ru"-->
    <!--            onclick="ym(62725381,'reachGoal','click_mobile_menu_email')"-->
    <!--        >-->
    <!--          <span class="contact-icon contact-icon&#45;&#45;email">-->
    <!--            <icon-email />-->
    <!--          </span>-->
    <!--        </a>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <div class="header__contacts-item">-->
    <!--      <ds-button label="Написать нам" data-modal="#modal-form" />-->

    <!--      &lt;!&ndash;      <a&ndash;&gt;-->
    <!--      &lt;!&ndash;        href="#"&ndash;&gt;-->
    <!--      &lt;!&ndash;        class="btn modal-link"&ndash;&gt;-->
    <!--      &lt;!&ndash;        data-modal="#modal-form"&ndash;&gt;-->
    <!--      &lt;!&ndash;        onclick="ym(62725381111,'reachGoal','button_napisatnam_mobile')"&ndash;&gt;-->
    <!--      &lt;!&ndash;      >&ndash;&gt;-->
    <!--      &lt;!&ndash;        <span>Написать нам</span>&ndash;&gt;-->
    <!--      &lt;!&ndash;      </a>&ndash;&gt;-->
    <!--    </div>-->
  </div>
</template>

<script setup lang="ts">
const props = defineProps({});
// const {navList} = props;
const { width } = useWindowSize();
</script>

<style scoped></style>
