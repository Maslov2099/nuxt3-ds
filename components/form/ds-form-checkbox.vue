<template>
  <div
    class="form__row"
    :class="`form__row--${name}`"
  >
    <UFormGroup
      :name="name"
      label=""
      class="checkbox-label"
    >
      <UCheckbox
        class="checkbox"
        v-model="model"
        :label="label"
      />
      <i
        class="checkbox-icon"
        :class="{'checkbox-icon--checked' : model}"
        @click="model = !model"
      ></i>
    </UFormGroup>
  </div>

</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  value: {
    type: [String, Number],
    required: false,
    default: null
  },
});
const { label, name } = props;

const model = defineModel()

</script>

<style lang="scss">
.checkbox {
  .ms-3.flex.flex-col{
    margin-left: 0;
  }
  &-label {
    position: relative;
    p.text-red-500 {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 2rem;
      height: 2rem;
      box-shadow: inset 0 0 1px 1px rgb(239 68 68 / 1);
      font-size: 0;
      color: transparent;
    }
  }
  label {
    position: relative;
    display: inline-block;
    padding-left: 3.3rem;
    font-size: 1.33rem;
    line-height: 2rem;
    @media (max-width: 480px) {
      font-size: 1.15rem;
      line-height: 1.6rem;
    }
  }
  &-icon {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 2rem;
    height: 2rem;
    background: #fff;
    border: 1px solid #4658c0;
    cursor: pointer;
    &::before{
      pointer-events: none;
      content: "";
      display: block;
      position: absolute;
      top: -1px;
      left: -1px;
      width: 2rem;
      height: 2rem;
      background: #4658c0 url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAANCAYAAACkTj4ZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABRSURBVHgB3dDbCQAgCAVQ26T9l2gURzEjv8LMx18XIgg7qA0KIaLO14BKFsIHaQchkxORzr5F5NHUXZ28CtzjWIXhnWgfwoiBxZELlkMULIRMQcshLlls3ocAAAAASUVORK5CYII=") center no-repeat;
      opacity: 0;
      transition: opacity 200ms;
    }
    &--checked {
      &::before{
        opacity: 1;
      }
    }
  }
  input{
    display: block;
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    top: 0;
    left: 0;
  }
}
//.agreement {
//  &-checkbox {
//    display: block;
//    position: absolute;
//    width: 1px;
//    height: 1px;
//    opacity: 0;
//    top: 0;
//    left: 0;
//  }
//  &-link {
//    color: #4658c0;
//    font-size: 1.6rem;
//    line-height: 2rem;
//    text-decoration: none !important;
//    border-bottom: 1px solid transparent;
//    transition: 0.3s;
//    &:hover {
//      color: #4658c0;
//      border-color: #4658c0;
//    }
//    @media (max-width: 1170px) {
//      font-size: 1.2rem;
//      line-height: 1.6rem;
//    }
//  }
//}
</style>
