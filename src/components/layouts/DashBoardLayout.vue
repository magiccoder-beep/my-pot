<template>
  <Header />
  <div class="row content-section">
    <div class="col space-between section-top">
      <ImageViewer
        :altText="CONST_CARD_INFO.ImageAltText"
        :imgPath="CONST_CARD_INFO.ImageUrl"
      />
      <ExtendedCard
        :colCount="2"
        :cardFormData="CONST_CARD_INFO.FormDataItems_1"
      />
    </div>

    <div class="col space-between section-bottom">
      <ExtendedCard :cardFormData="CONST_CARD_INFO.FormDataItems_2" />
      <ExtendedCard :cardFormData="CONST_CARD_INFO.FormDataItems_3" />
      <ExtendedCard :cardFormData="CONST_CARD_INFO.FormDataItems_4" />
    </div>

    <div class="col justify-center section-footer">
      <AppButton
        :text="CONST_CARD_INFO.StartAssessmentButtonText"
        class="start-assessment-button"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Header,
  AppButton,
  ImageViewer,
  ExtendedCard
} from '@/components/common';
import * as CONST_CARD_INFO from '@/consts';
</script>
