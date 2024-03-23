<script setup lang="ts">
defineProps<{
   label: string;
   min: number;
   max: number;
}>();
</script>

<template>
   <v-range-slider :style="{ margin: '5px' }" thumb-label="always" step="10" :min="min" :max="max"
      :label=label></v-range-slider>
</template>