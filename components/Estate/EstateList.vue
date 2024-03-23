<script setup lang="ts">
import type { IEstateTest } from '~/interfaces/estate';

const props = defineProps<{ estates: IEstateTest[] }>();

const items = computed(() => props.estates)

const isEditing = ref(false);

function deleteItem(value: number) {
   const index = items.value.findIndex((item) => item.value === value);
   items.value.splice(index, 1);
}

function updateItem(estate: IEstateTest) {
   const index = items.value.findIndex((item) => item.value === estate.value);
   items.value[index] = estate;
}

</script>

<template>
   <v-card class="mx-auto" max-width="300">
      <v-list :items="items">
         <template v-slot:item="{ props }">
            <EstateListItem :estate="props" :delete-item="deleteItem" :update-item="updateItem" />
         </template>
      </v-list>
   </v-card>
</template>