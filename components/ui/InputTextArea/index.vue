<script setup lang="ts">
import { useField } from 'vee-validate';

const props = defineProps({
   value: {
      type: String,
      default: undefined,
   },
   name: {
      type: String,
      required: true,
   },
   label: {
      type: String,
      required: true,
   },
   type: {
      type: String,
      default: 'text',
   },
});

const name = toRef(props, 'name');

const {
   value: inputValue,
   errorMessage,
   handleBlur,
   handleChange,
   meta,
} = useField(name, undefined, {
   initialValue: props.value,
});
</script>

<template>
   <div :class="{ 'has-error': !!errorMessage, success: meta.valid }">
      <v-textarea :name="name" :label="label" variant="solo" v-model="inputValue" @input="handleChange"
         @blur="handleBlur" :error-messages="errorMessage" :rules="meta.valid" />
   </div>
</template>