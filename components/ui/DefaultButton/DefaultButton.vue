<script setup lang="ts">
defineProps<{
   onClick?: () => void;
}>();
</script>

<template>
   <v-btn variant="flat" @Click="onClick" :style="{ color: 'white', backgroundColor: '#569bfc', margin: '5px' }">
      <slot></slot>
   </v-btn>
</template>