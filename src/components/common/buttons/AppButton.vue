<template>
  <button :class="class">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  text: String,
  style: String
});
</script>
