<template>
  <div class="image-viewer">
    <img :alt="altText" :src="imgPath" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  altText: String,
  imgPath: String
});
</script>

<style>
.image-viewer {
  border-radius: 25px;
  width: 32%;
}
</style>
