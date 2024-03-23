<script setup lang="ts">
import type { IEstateTest } from '~/interfaces/estate';

const props = defineProps<{ estate: IEstateTest, deleteItem: (value: number) => void, updateItem: (estate: IEstateTest) => void }>();

const isEditing = ref(false);
const estateRef = reactive(props.estate);

function handleUpdate() {
   if (isEditing.value) {
      props.updateItem(estateRef);
   }

   isEditing.value = !isEditing.value;
}

</script>

<template>
   <v-list-item>
      <p v-if="!isEditing">{{ estateRef.title }}</p>
      <v-text-field v-else v-model="estateRef.title" />
      <v-btn @click="() => isEditing ? isEditing = false : deleteItem(estateRef.value)">
         <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-btn @click="handleUpdate">
         <v-icon>{{ isEditing ? 'mdi-check' : 'mdi-pencil' }}</v-icon>
      </v-btn>
   </v-list-item>
</template>