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
      <v-text-field :name="name" :label="label" :type="type" variant="solo" v-model="inputValue" @input="handleChange"
         @blur="handleBlur" :error="!!errorMessage" :error-messages="errorMessage" style="padding-bottom: 5px;" />
   </div>
</template>