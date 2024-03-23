<script setup lang="ts">
defineProps({
   icon: {
      type: String,
      default: '',
   },
});
</script>

<template>
   <v-btn variant="flat" :prepend-icon="icon" :style="{ color: 'white', backgroundColor: '#569bfc' }">
      <slot></slot>
   </v-btn>
</template>