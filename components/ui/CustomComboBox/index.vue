<script setup lang="ts">
const props = defineProps<{
   label: string;
   items: string[];
}>();
</script>

<template>
   <v-combobox variant="outlined" :label=label :items="items" :style="{ margin: '5px' }"></v-combobox>
</template>