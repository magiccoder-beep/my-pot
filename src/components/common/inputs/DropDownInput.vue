<template>
  <div class="dropdown-container">
    <CommonLabel v-if="labelText" :text="labelText" />
    <div class="dropdown-content" @click="toggleDropdown">
      <input
        class="dropdown-text-input"
        :placeholder="placeholderText"
        :value="selectedOption"
        readonly
      />
      <img class="dropdown-arrow-icon" :src="dropdownArrowIconPath" />
    </div>
    <div v-if="isDropdownOpen" class="custom-select-options">
      <div
        v-for="option in options"
        :key="option.value"
        class="custom-select-option"
        @click="selectOption(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { CommonLabel } from '@/components/common';

defineProps({
  options: Array<{ label: string; value: string }>,
  placeholderText: String,
  labelText: String
});

const isDropdownOpen = ref(false);
const selectedOption = ref<string | null>(null);

const dropdownArrowIconPath = ref('/src/assets/png/down-arrow.png');

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
  dropdownArrowIconPath.value = isDropdownOpen.value
    ? '/src/assets/png/up-arrow.png'
    : '/src/assets/png/down-arrow.png';
};

const selectOption = (option: { label: string; value: string }) => {
  selectedOption.value = option.label;
  isDropdownOpen.value = false;
  dropdownArrowIconPath.value = '/src/assets/png/down-arrow.png';
};
</script>

<style scoped>
.dropdown-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  width: 100%;
  position: relative;
}

.dropdown-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #dfdfe1;
  cursor: pointer;
}

.dropdown-text-input {
  background-color: transparent;
  border: none;
  outline: none;
  padding: 5px 0;
  color: #dfdfe1;
  font-size: 14px;
  font-family: sans-serif;
  width: 90%;
  box-sizing: border-box;
}

.dropdown-arrow-icon {
  width: 12px;
  height: 12px;
}

.custom-select-options {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #2e3137;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
}

.custom-select-option {
  font-size: 14px;
  font-family: sans-serif;
  padding: 5px 10px;
  color: #dfdfe1;
  background-color: #2e3137;
  cursor: pointer;
}

.custom-select-option:hover {
  background-color: #24262c;
}
</style>
