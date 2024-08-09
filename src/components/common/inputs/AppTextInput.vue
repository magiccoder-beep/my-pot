<template>
  <div class="text-input-container">
    <CommonLabel v-if="labelText" :text="labelText" />
    <input class="text-input" :placeholder="placeholderText" />
  </div>
</template>

<script setup lang="ts">
import { CommonLabel } from '@/components/common';

defineProps({
  placeholderText: String,
  labelText: String
});
</script>

<style>
/* Text Input Container */
.text-input-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  width: 100%;
}

/* Text Input Styling */
.text-input {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  padding: 5px 0;
  color: #fff;
  font-size: 14px;
  font-family: sans-serif;
  width: 100%;
  box-sizing: border-box;
}
</style>
