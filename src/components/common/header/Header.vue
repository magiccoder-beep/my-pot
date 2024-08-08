<template>
  <div class="header-bar">
    <div v-for="(item, index) in headerBarLayoutConst" :key="index">
      <HeaderItem
        :text="item.text"
        :status="item.status"
        :imgPath="item.imgPath"
        :textWidth="item.textWidth"
        :mgLeft="item.marginLeft"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { headerBarLayoutConst } from '@/consts/header-bar-layout';
import { HeaderItem } from './elements';
</script>

<style>
.header-bar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 97px;
  gap: 34px;
  padding: 0 25px;
  margin-bottom: 50px;
}
</style>
