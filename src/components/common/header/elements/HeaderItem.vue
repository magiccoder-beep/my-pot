<template>
  <div class="header-bar-button" :class="`header-text--${mgLeft}`">
    <img :src="imgPath" :alt="text" class="header-icon" />
    <span :class="status" :style="{ width: textWidth }">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: String,
  imgPath: String,
  status: String,
  textWidth: String,
  mgLeft: String
});
</script>

<style>
.header-bar-button {
  display: flex;
  align-items: center;
}

.header-icon {
  width: 24px;
  height: 24px;
}

.header-text {
  text-align: center;
  font-family: sans-serif;
  margin-left: 10px;
  font-size: 17px;
  color: #666666;
  border-bottom: 1px solid none;
}

.header-text--35px {
  margin-left: 35px;
}

.header-text-active {
  text-align: center;
  font-family: sans-serif;
  margin-left: 10px;
  font-size: 17px;
  color: #ffffff;
  border-bottom: 1px solid #24262c;
}

.header-text-active:hover {
  border-bottom: 2px solid #54a390;
  cursor: pointer;
}
</style>
