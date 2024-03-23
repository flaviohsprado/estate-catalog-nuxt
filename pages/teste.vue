<script setup lang="ts">
import CreateEstate from '~/components/Estate/CreateEstate.vue';
import type { IEstateTest } from '~/interfaces/estate';

const route = useRoute()
const name = ref('')
const estates = reactive<IEstateTest[]>([]);
const addEstate = () => {
   estates.push({
      title: name.value,
      value: estates.length + 1,
   });
   name.value = '';
}

</script>

<template>
   <div class="pa-10">
      <CreateEstate v-model:value="name" />
      <EstateList v-show="estates.length" :estates="estates" />
      <UiDefaultButton @click="addEstate">
         Add Estate
      </UiDefaultButton>
   </div>
</template>