<template>
  <span class="label">{{ text }}</span>
</template>

<script setup lang="ts">
defineProps({
  text: String
});
</script>

<style>
.label {
  color: #54a390;
  font-size: 12px;
}
</style>
