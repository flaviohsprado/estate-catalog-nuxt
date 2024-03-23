import { ref } from 'vue';

type ToastType = 'success' | 'error' | 'warning' | 'info';

export const useToast = () => {
   const toastTitle = ref('');
   const toastMessage = ref('');
   const toastVisible = ref(false);
   const toastType = ref('success' as ToastType);

   const showToast = (title: string, message: string, type: ToastType) => {
      toastTitle.value = title;
      toastMessage.value = message;
      toastType.value = type;
      toastVisible.value = true;
      setTimeout(() => {
         toastVisible.value = false;
      }, 3000);
   };

   return { toastTitle, toastMessage, toastType, toastVisible, showToast };
}