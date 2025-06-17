<template>
  <div class="form__row">
    <UFormGroup
      class="form__row-input"
      :class="{'completed' : model || isFocused}"
      :label="label"
      :name="name"
    >
      <div class="label">
        <UInput
          v-if="type === 'text' || type === 'tel'"
          :type="type"
          class="input-text"
          v-model="model"
          @focus="isFocused = true"
          @blur="isFocused = false"
        />
        <UTextarea
          v-if="type === 'textarea'"
          class="input-text"
          v-model="model"
          @focus="isFocused = true"
          @blur="isFocused = false"
        />
      </div>
    </UFormGroup>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
    default: 'text',
  }
});
const { label, name, type } = props;

const model = defineModel()
const isFocused = ref(false)
</script>

<style lang="scss">
.form__row{
  &-input {
    position: relative;
    display: block;
    &>div{
      &:first-child{
        position: relative;
        z-index: 11;
      }
    }
    .flex.content-center.items-center.justify-between.text-sm {
      pointer-events: none;
      position: absolute;
      display: block;
      z-index: 10;
      top: 2rem;
      left: 2rem;
      font-size: 1.6rem;
      line-height: 1.6rem;
      font-weight: 200;
      -webkit-transition:
          font-size 200ms,
          color 200ms,
          -webkit-transform 200ms;
      transition:
          font-size 200ms,
          color 200ms,
          -webkit-transform 200ms;
      -o-transition:
          transform 200ms,
          font-size 200ms,
          color 200ms;
      transition:
          transform 200ms,
          font-size 200ms,
          color 200ms;
      transition:
          transform 200ms,
          font-size 200ms,
          color 200ms,
          -webkit-transform 200ms;
      will-change: transform;
      color: #595a5b;
      @media (max-width: 480px) {
        top: 1.6rem;
        left: 1.3rem;
        font-size: 1.25rem;
        line-height: 1.3rem;
      }
    }

    .label {
      position: relative;
      display: block;
      z-index: 10;
      .input-text {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        position: relative;
        display: block;
        padding: 2.9rem 2rem 0.75rem 2rem;
        border: 0.15rem solid #c8c8c8;
        background: #fff;
        transition: border 200ms;
        border-radius: 2px;
        @media (max-width: 480px) {
          padding: 2.2rem 1rem 0.5rem 1.3rem;
        }
        input, textarea {
          border: none!important;
          box-shadow: none;
        }
      }
    }
    &.completed,
    &.focused {
      .flex.content-center.items-center.justify-between.text-sm {
        font-size: 1.1666rem !important;
        line-height: 1.4rem;
        transform: translateZ(0) translateY(-1rem);
        @media (max-width: 480px) {
          //font-size: 1.2rem;
          line-height: 1.2rem;
        }
      }
    }

    &.focused {
      .input-text {
        border-color: #4658c0;
      }
    }

    p.text-red-500 {
      position: absolute;
      box-shadow: inset 0 0 0px 1px rgb(239 68 68 / 1);
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 11;
      pointer-events: none;
      color: transparent;
      font-size: 0;
      overflow: hidden;
      text-indent: -200px;
    }
  }
}
</style>
