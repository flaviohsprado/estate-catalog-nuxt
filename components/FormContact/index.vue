<script setup lang="ts">
import { Form } from 'vee-validate';
import { number, object, string } from 'yup';
import { useToast } from '~/hooks/useToast';

const { toastTitle, toastMessage, toastType, toastVisible, showToast } = useToast();

const loading = ref(false);

const schema = object().shape({
   username: string().required(),
   email: string().email().required(),
   phoneNumber: number().required('Phone number must be a number'),
   comments: string().required(),
});

function onSubmit(values: any) {
   loading.value = true;
   console.log(values);
   showToast('Contact', 'Message sent successfully', 'success');

   setTimeout(() => {
      loading.value = false;
   }, 2000);
}

function onInvalidSubmit() {
   const submitBtn: Element = document.getElementById('submit-button') as Element;
   submitBtn.classList.add('invalid');
   setTimeout(() => {
      submitBtn.classList.remove('invalid');
   }, 1000);
}
</script>

<template>
   <div :style="{
      padding: '2em',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
   }">
      <v-text class="text-h4">Contact the Agent</v-text>
   </div>
   <Form :validation-schema="schema" @submit="onSubmit" @invalid-submit="onInvalidSubmit">
      <UiInputText name="username" label="Full Name *" />

      <UiInputText name="email" label="Email *" />

      <UiInputText name="phoneNumber" label="Phone Number *" return-masked-value mask="(###) ###-####" />

      <UiInputTextArea name="comments" label="Comments *" />

      <UiDefaultButton id="submit-button" :loading="loading" class="mt-2" type="submit" block>Contact Now
      </UiDefaultButton>
   </Form>

   <v-snackbar v-model="toastVisible">
      <v-alert closable :title="toastTitle" :type="toastType" dismissible>
         {{ toastMessage }}
      </v-alert>
   </v-snackbar>
</template>