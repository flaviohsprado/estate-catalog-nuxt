<script setup lang="ts">
const value = defineModel('value', {
   type: String,
   default: ''
});
</script>

<template>
   <v-text-field v-model="value" label="Label" placeholder="teste"></v-text-field>
</template>