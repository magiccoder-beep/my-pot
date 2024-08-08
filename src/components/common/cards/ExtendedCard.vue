<template>
  <div class="card-container" :class="`card-container--${colCount}x`">
    <component
      v-for="(item, index) in cardFormData"
      :key="index"
      :is="resolveComponentType(item.type)"
      :labelText="item.label"
      :placeholderText="item.placeholder"
      :options="item.options"
    />
  </div>
</template>

<script setup lang="ts">
import type { FormInputData } from '@/consts/types';
import { INPUT_TYPES } from '@/consts';
import {
  DropDownInput,
  DatePickerInput,
  AppTextInput
} from '@/components/common';

defineProps({
  cardFormData: {
    type: Array<FormInputData>,
    default: []
  },
  colCount: {
    type: Number,
    default: 1
  }
});

const resolveComponentType = (type: string) => {
  switch (type) {
    case INPUT_TYPES.Text:
      return AppTextInput;
    case INPUT_TYPES.Dropdown:
      return DropDownInput;
    case INPUT_TYPES.Date:
      return DatePickerInput;
    default:
      return null;
  }
};
</script>

<style scoped>
.card-container {
  width: 32%;
  height: 100%;
  padding: 60px 30px;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(1, 1fr);
  background-color: #2e3137;
  border-radius: 30px;
  align-content: space-between;
}

.card-container--2x {
  width: 66%;
  gap: 40px;
  padding-top: 30px;
  grid-template-columns: repeat(2, 1fr);
}
</style>
