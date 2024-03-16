<template>
  <header class="header">
    <div class="container">
      <div class="row row--center">
        <div class="header__left">
          <a class="header__logo" href="#company">
            <NuxtImg src="/images/logo.svg" alt=""/>
          </a>
          <a class="header__logo header__logo--mobile nav-link" href="#company-page">
            <NuxtImg src="/images/logo.svg" alt=""/>
          </a>
        </div>
        <div
          class="header__center"
          :class="{'menu-show' : showNav}"
        >
          <header-nav
            :nav-list="navList"
          />

          <div class="header__contacts">
            <div class="header__contacts-item">
              <a class="header__phone" href="tel:+74950901945" onclick="ym(62725381,'reachGoal','click_header_phone_mobile_menu')">
                +7 (495) 090-19-45
              </a>
            </div>
            <div class="header__contacts-icons">
              <div class="header__contacts-item">
                <a href="https://t.me/drsofter" target="_blank" onclick="ym(62725381,'reachGoal','click_mobile_menu_telegram')">
                  <span class="contact-icon contact-icon--telegram">
                      <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9413 17.3563C17.1994 17.8878 17.6712 16.7742 17.6712 16.7742L21 0.627394C20.9738 -0.460869 19.4535 0.197151 19.4535 0.197151L0.817457 7.25821C0.817457 7.25821 -0.0737197 7.56191 0.0049136 8.09338C0.0835469 8.62486 0.791246 8.87795 0.791246 8.87795L5.48303 10.3965C5.48303 10.3965 6.89843 14.876 7.18675 15.7365C7.44886 16.5717 7.68476 16.597 7.68476 16.597C7.94688 16.6983 8.18277 16.5211 8.18277 16.5211L11.2233 13.8637L15.9413 17.3563ZM16.7538 3.48722C16.7538 3.48722 17.4091 3.10759 17.3829 3.48722C17.3829 3.48722 17.4877 3.53783 17.147 3.89215C16.8324 4.19585 9.4147 10.6242 8.41868 11.4847C8.34005 11.5353 8.28763 11.6112 8.28763 11.7125L7.9993 14.0915C7.94688 14.3445 7.60614 14.3698 7.5275 14.1421L6.29558 10.2446C6.24316 10.0927 6.29558 9.91556 6.45285 9.81433L16.7538 3.48722Z" fill="#F7F8FB"/>
                      </svg>
                  </span>
                </a>
              </div>
              <div class="header__contacts-item">
                <a href="https://api.whatsapp.com/send/?phone=79999921945" target="_blank" onclick="ym(62725381,'reachGoal','click_mobile_menu_whatsapp')">
                  <span class="contact-icon contact-icon--whatsapp">
                      <svg xmlns="http://www.w3.org/2000/svg" style="min-width: 95%;transform: translate(2%, -2%);" width="23" height="24" viewBox="0 0 512 512"><g id="WhatsApp"><g id="whatsApp-2" data-name="whatsApp"><path d="M112.64,400.05l20.25-74a142.49,142.49,0,0,1-19.06-71.37c0-78.71,64.07-142.75,142.76-142.75A142.79,142.79,0,0,1,399.36,254.82c0,78.71-64.08,142.76-142.76,142.76h-.06a142.61,142.61,0,0,1-68.22-17.38Zm79.18-45.7,4.34,2.57a118.49,118.49,0,0,0,60.39,16.54h.05c65.4,0,118.63-53.23,118.66-118.66a118.66,118.66,0,1,0-219.18,63.05l2.82,4.49-12,43.79Z" fill="#fff"/><path d="M328.52,288.76c-.89-1.49-3.27-2.38-6.84-4.17S300.58,274.18,297.31,273s-5.65-1.79-8,1.79-9.21,11.61-11.29,14-4.16,2.68-7.73.89-15.06-5.55-28.68-17.71c-10.61-9.46-17.77-21.14-19.84-24.71s-.22-5.5,1.56-7.28c1.61-1.6,3.57-4.17,5.35-6.25a24.49,24.49,0,0,0,3.57-6,6.58,6.58,0,0,0-.3-6.25c-.89-1.79-8-19.34-11-26.48-2.89-7-5.84-6-8-6.13s-4.46-.12-6.84-.12a13.11,13.11,0,0,0-9.51,4.46c-3.27,3.57-12.48,12.2-12.48,29.76s12.78,34.52,14.57,36.9,25.15,38.41,60.94,53.86a204.73,204.73,0,0,0,20.34,7.52,48.89,48.89,0,0,0,22.46,1.41c6.86-1,21.11-8.63,24.08-17S329.41,290.25,328.52,288.76Z" fill="#fff" fill-rule="evenodd"/></g></g></svg>
                  </span>
                </a>
              </div>
              <div class="header__contacts-item">
                <a href="mailto:mail@drsofter.ru" onclick="ym(62725381,'reachGoal','click_mobile_menu_email')">
                  <span class="contact-icon contact-icon--email">
                      <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.10658 2.55395L11 8.77934L19.8934 2.55395C19.728 2.22692 19.388 2 19 2H3C2.61204 2 2.27196 2.22692 2.10658 2.55395ZM20 4.92066L11.5735 10.8192C11.2291 11.0603 10.7709 11.0603 10.4265 10.8192L2 4.92066V15C2 15.5477 2.45228 16 3 16H19C19.5477 16 20 15.5477 20 15V4.92066ZM0 3C0 1.34772 1.34772 0 3 0H19C20.6523 0 22 1.34772 22 3V15C22 16.6523 20.6523 18 19 18H3C1.34772 18 0 16.6523 0 15V3Z" fill="white"/>
                      </svg>
                  </span>
                </a>
              </div>
            </div>
            <div class="header__contacts-item">
              <a href="#" class="btn modal-link" data-modal="#modal-form" onclick="ym(62725381,'reachGoal','button_napisatnam_mobile')">
                <span>Написать нам</span>
              </a>
            </div>
          </div>
        </div>
        <div class="header__right">
          <div
            class="menu-btn"
            @click="showNav = !showNav"
          >
            <span></span>
          </div>
          <div class="header__contacts">
            <div class="header__contacts-item">
              <a class="header__phone" href="tel:+74950901945" onclick="ym(62725381,'reachGoal','click_header_phone')">
                +7 (495) 090-19-45
              </a>
              <a class="header__phone-icon" href="tel:+74950901945" onclick="ym(62725381,'reachGoal','click_header_phone')">
                            <span class="contact-icon contact-icon--site">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -256 1792 1792" id="svg3013" width="30px" height="30px">
                                    <g transform="matrix(1,0,0,-1,159.45763,1293.0169)" id="g3015">
                                        <path d="m 1408,296 q 0,-27 -10,-70.5 Q 1388,182 1377,157 1356,107 1255,51 1161,0 1069,0 1042,0 1016.5,3.5 991,7 959,16 927,25 911.5,30.5 896,36 856,51 816,66 807,69 709,104 632,152 504,231 367.5,367.5 231,504 152,632 104,709 69,807 66,816 51,856 36,896 30.5,911.5 25,927 16,959 7,991 3.5,1016.5 0,1042 0,1069 q 0,92 51,186 56,101 106,122 25,11 68.5,21 43.5,10 70.5,10 14,0 21,-3 18,-6 53,-76 11,-19 30,-54 19,-35 35,-63.5 16,-28.5 31,-53.5 3,-4 17.5,-25 14.5,-21 21.5,-35.5 7,-14.5 7,-28.5 0,-20 -28.5,-50 -28.5,-30 -62,-55 -33.5,-25 -62,-53 -28.5,-28 -28.5,-46 0,-9 5,-22.5 5,-13.5 8.5,-20.5 3.5,-7 14,-24 10.5,-17 11.5,-19 76,-137 174,-235 98,-98 235,-174 2,-1 19,-11.5 17,-10.5 24,-14 7,-3.5 20.5,-8.5 13.5,-5 22.5,-5 18,0 46,28.5 28,28.5 53,62 25,33.5 55,62 30,28.5 50,28.5 14,0 28.5,-7 14.5,-7 35.5,-21.5 21,-14.5 25,-17.5 25,-15 53.5,-31 28.5,-16 63.5,-35 35,-19 54,-30 70,-35 76,-53 3,-7 3,-21 z" id="path3017" style="fill:#fff"/>
                                    </g>
                                </svg>
                            </span>
              </a>
            </div>
            <div class="header__contacts-item header__contacts-item--messenger">
              <a href="https://t.me/drsofter" target="_blank" onclick="ym(62725381,'reachGoal','click_header_telegram')">
                            <span class="contact-icon contact-icon--telegram">
                                <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9413 17.3563C17.1994 17.8878 17.6712 16.7742 17.6712 16.7742L21 0.627394C20.9738 -0.460869 19.4535 0.197151 19.4535 0.197151L0.817457 7.25821C0.817457 7.25821 -0.0737197 7.56191 0.0049136 8.09338C0.0835469 8.62486 0.791246 8.87795 0.791246 8.87795L5.48303 10.3965C5.48303 10.3965 6.89843 14.876 7.18675 15.7365C7.44886 16.5717 7.68476 16.597 7.68476 16.597C7.94688 16.6983 8.18277 16.5211 8.18277 16.5211L11.2233 13.8637L15.9413 17.3563ZM16.7538 3.48722C16.7538 3.48722 17.4091 3.10759 17.3829 3.48722C17.3829 3.48722 17.4877 3.53783 17.147 3.89215C16.8324 4.19585 9.4147 10.6242 8.41868 11.4847C8.34005 11.5353 8.28763 11.6112 8.28763 11.7125L7.9993 14.0915C7.94688 14.3445 7.60614 14.3698 7.5275 14.1421L6.29558 10.2446C6.24316 10.0927 6.29558 9.91556 6.45285 9.81433L16.7538 3.48722Z" fill="#F7F8FB"/>
                                </svg>
                            </span>
              </a>
            </div>
            <div class="header__contacts-item header__contacts-item--messenger">
              <a href="https://api.whatsapp.com/send/?phone=79999921945" target="_blank" onclick="ym(62725381,'reachGoal','click_header_whatsapp')">
                            <span class="contact-icon contact-icon--whatsapp">
                                <svg xmlns="http://www.w3.org/2000/svg" style="min-width: 95%;transform: translate(2%, -2%);" width="23" height="24" viewBox="0 0 512 512"><g id="WhatsApp"><g id="whatsApp-2" data-name="whatsApp"><path d="M112.64,400.05l20.25-74a142.49,142.49,0,0,1-19.06-71.37c0-78.71,64.07-142.75,142.76-142.75A142.79,142.79,0,0,1,399.36,254.82c0,78.71-64.08,142.76-142.76,142.76h-.06a142.61,142.61,0,0,1-68.22-17.38Zm79.18-45.7,4.34,2.57a118.49,118.49,0,0,0,60.39,16.54h.05c65.4,0,118.63-53.23,118.66-118.66a118.66,118.66,0,1,0-219.18,63.05l2.82,4.49-12,43.79Z" fill="#fff"/><path d="M328.52,288.76c-.89-1.49-3.27-2.38-6.84-4.17S300.58,274.18,297.31,273s-5.65-1.79-8,1.79-9.21,11.61-11.29,14-4.16,2.68-7.73.89-15.06-5.55-28.68-17.71c-10.61-9.46-17.77-21.14-19.84-24.71s-.22-5.5,1.56-7.28c1.61-1.6,3.57-4.17,5.35-6.25a24.49,24.49,0,0,0,3.57-6,6.58,6.58,0,0,0-.3-6.25c-.89-1.79-8-19.34-11-26.48-2.89-7-5.84-6-8-6.13s-4.46-.12-6.84-.12a13.11,13.11,0,0,0-9.51,4.46c-3.27,3.57-12.48,12.2-12.48,29.76s12.78,34.52,14.57,36.9,25.15,38.41,60.94,53.86a204.73,204.73,0,0,0,20.34,7.52,48.89,48.89,0,0,0,22.46,1.41c6.86-1,21.11-8.63,24.08-17S329.41,290.25,328.52,288.76Z" fill="#fff" fill-rule="evenodd"/></g></g></svg>
                            </span>
              </a>
            </div>

            <a href="#" class="btn modal-link" data-modal="#modal-form" onclick="ym(62725381,'reachGoal','button_napisatnam')">
              <span>Написать нам</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const navList = [
  {
    name: 'Компания',
    anchor: 'company'
  },
  {
    name: 'Услуги',
    anchor: 'page-services'
  },
  {
    name: 'Проекты',
    anchor: 'StandartPark.ru'
  },
  {
    name: 'Команда',
    anchor: 'page-team'
  },
  {
    name: 'Контакты',
    anchor: 'page-contacts'
  }
]
const showNav = ref(true)
</script>

<style scoped>

</style>
