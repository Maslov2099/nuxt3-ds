<template>
  <div class="form">
    <div class="form__wrap">
      <div class="form__block">
        <UForm
          :validate="validate"
          :state="form"
          class="space-y-4"
          @submit="onSubmit"
        >
          <ds-form-item
            label="Имя или организация"
            name="name"
            type="text"
            v-model="form.name"
          />
          <ds-form-item
            label="Телефон"
            name="contact"
            type="tel"
            v-model="form.contact"
          />
          <ds-form-item
            label="Расскажите про проект"
            name="about"
            type="textarea"
            v-model="form.about"
          />

          <ds-form-checkbox
            label="Подтверждаю свое согласие на обработку моих персональных данных в соответствии с Политикой защиты и обработки персональных данных ООО «Доктор Софтер»"
            name="agreement"
            v-model="form.agreement"
          />

          <div class="form__row form__row--btn">
            <div class="form__row-col">
              <UButton class="btn btn--submit" type="submit">
                Отправить
              </UButton>

              <!--                <button-->
              <!--                    class="btn btn&#45;&#45;submit"-->
              <!--                    onclick="submitClick('mail-2')"-->
              <!--                >Отправить</button>-->
            </div>
            <div class="form__row-col">
              <div
                class="modal__header-description modal__header-description--messenger"
              >
                Либо пишите нам <br />
                в
                <a
                  href="https://api.whatsapp.com/send/?phone=79999921945"
                  target="_blank"
                  class="messenger-link"
                  onclick="ym(62725381,'reachGoal','click_form_whatsapp')"
                >
                  <span class="contact-icon contact-icon--whatsapp">
                    <icon-whatsapp
                      style="min-width: 95%; transform: translate(2%, -2%)"
                    />
                  </span>
                  <span>Whatsapp</span>
                </a>
                или
                <a
                  href="https://t.me/drsofter"
                  target="_blank"
                  class="messenger-link"
                  onclick="ym(62725381,'reachGoal','click_form_telegram')"
                >
                  <span class="contact-icon contact-icon--telegram">
                    <icon-telegram />
                  </span>
                  <span>Telegram</span>
                </a>
              </div>
            </div>
          </div>
        </UForm>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";

const form = ref({
  name: "",
  contact: "",
  about: "",
  agreement: "",
});

const validate = (form: any): FormError[] => {
  const errors = [];
  if (!form.name) errors.push({ path: "name", message: "Required" });
  if (!form.contact) errors.push({ path: "contact", message: "Required" });
  if (!form.agreement) errors.push({ path: "agreement", message: "Required" });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data);
}
</script>

<style scoped></style>
