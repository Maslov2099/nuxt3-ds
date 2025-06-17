<template>
  <header class="header">
    <div class="container">
      <div class="row row--center">
        <div class="header__left">
          <a class="header__logo" href="#company">
            <NuxtImg src="/images/logo.svg" alt="" />
          </a>
          <a
            class="header__logo header__logo--mobile nav-link"
            href="#company"
            @click="$pageScroll('company')"
          >
            <NuxtImg src="/images/logo.svg" alt="" />
          </a>
        </div>
        <div class="header__center" :class="{ 'menu-show': showNav }">
          <header-nav :nav-list="navList" />

          <header-contacts-mobile />
        </div>
        <div class="header__right">
          <div class="menu-btn" @click="showNav = !showNav">
            <span></span>
          </div>
          <header-contacts />

          <!--          <div class="header__contacts">-->
          <!--            <div class="header__contacts-item">-->
          <!--              <a-->
          <!--                class="header__phone"-->
          <!--                href="tel:+74950901945"-->
          <!--                onclick="ym(62725381qwe,'reachGoal','click_header_phone')"-->
          <!--              >-->
          <!--                +7 (495) 090-19-45-->
          <!--              </a>-->
          <!--              <a-->
          <!--                class="header__phone-icon"-->
          <!--                href="tel:+74950901945"-->
          <!--                onclick="ym(62725381qwe,'reachGoal','click_header_phone')"-->
          <!--              >-->
          <!--                <span class="contact-icon contact-icon&#45;&#45;site">-->
          <!--                  <icon-phone />-->
          <!--                </span>-->
          <!--              </a>-->
          <!--            </div>-->

          <!--            <div class="header__contacts-item header__contacts-item&#45;&#45;messenger">-->
          <!--              <a-->
          <!--                href="https://t.me/drsofter"-->
          <!--                target="_blank"-->
          <!--                onclick="ym(62725381qwe,'reachGoal','click_header_telegram')"-->
          <!--              >-->
          <!--                <span class="contact-icon contact-icon&#45;&#45;telegram">-->
          <!--                  <icon-telegram />-->
          <!--                </span>-->
          <!--              </a>-->
          <!--            </div>-->
          <!--            <div class="header__contacts-item header__contacts-item&#45;&#45;messenger">-->
          <!--              <a-->
          <!--                href="https://api.whatsapp.com/send/?phone=79999921945"-->
          <!--                target="_blank"-->
          <!--                onclick="ym(62725381qwe,'reachGoal','click_header_whatsapp')"-->
          <!--              >-->
          <!--                <span class="contact-icon contact-icon&#45;&#45;whatsapp">-->
          <!--                  <icon-whatsapp />-->
          <!--                </span>-->
          <!--              </a>-->
          <!--            </div>-->
          <!--            &lt;!&ndash;            <ds-button&ndash;&gt;-->
          <!--            &lt;!&ndash;                value="Написать нам"&ndash;&gt;-->
          <!--            &lt;!&ndash;                data-modal="#modal-form"&ndash;&gt;-->
          <!--            &lt;!&ndash;            />&ndash;&gt;-->
          <!--            <ds-modal label="Написать нам" />-->
          <!--            &lt;!&ndash;            <a&ndash;&gt;-->
          <!--            &lt;!&ndash;              href="#"&ndash;&gt;-->
          <!--            &lt;!&ndash;              class="btn modal-link"&ndash;&gt;-->
          <!--            &lt;!&ndash;              data-modal="#modal-form"&ndash;&gt;-->
          <!--            &lt;!&ndash;              onclick="ym(62725381,'reachGoal','button_napisatnam')"&ndash;&gt;-->
          <!--            &lt;!&ndash;            >&ndash;&gt;-->
          <!--            &lt;!&ndash;              <span>Написать нам</span>&ndash;&gt;-->
          <!--            &lt;!&ndash;            </a>&ndash;&gt;-->
          <!--          </div>-->
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { $pageScroll } = useNuxtApp();
const navList = ref([
  {
    name: "Компания",
    anchor: "company",
  },
  {
    name: "Услуги",
    anchor: "page-services",
  },
  {
    name: "Проекты",
    anchor: "StandartPark.ru",
  },
  {
    name: "Команда",
    anchor: "page-team",
  },
  {
    name: "Контакты",
    anchor: "page-contacts",
  },
]);
const showNav = ref(false);
</script>

<style scoped></style>
