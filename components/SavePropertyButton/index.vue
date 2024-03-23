<script setup lang="ts">
import { useSavedProperties } from '~/hooks/useSavedProperties';
import { useToast } from '~/hooks/useToast';
import type { IEstate } from '~/interfaces/estate';

const { store } = useSavedProperties();
const { toastTitle, toastMessage, toastType, toastVisible, showToast } = useToast();

const props = defineProps<{
   estate: IEstate;
}>()

const estateRef = reactive(props.estate);

const isSaved = computed(() => store.value.find((property) => property.id === props.estate.id));

function handleSave() {
   if (isSaved.value) {
      removeSaved(estateRef.id);

      showToast('Removed!', 'Property removed from saved list', 'info');
   } else {
      store.value.push(estateRef);

      showToast('Saved!', 'Property saved to list', 'success');
   }
}

function removeSaved(id: number) {
   store.value = store.value.filter((property) => property.id !== id);
}
</script>

<template>
   <v-col cols="12" md="4" style="padding-top: 0px; padding-bottom: 0px; align-self: center; ">
      <v-responsive style="text-align: right;">
         <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
               <UiIconButton icon="mdi-format-list-bulleted" v-bind="activatorProps" :style="{ marginRight: '10px' }" />
            </template>

            <template v-slot:default="{ isActive }">
               <v-card title="Saved Estates">
                  <v-list-item v-for="estate in store">
                     <v-row>
                        <v-col cols="6" md="10">
                           <NuxtLink :to="'/estate/' + estate.id" :target="'_blank'">
                              <v-list-item-title>{{ estate.title }}</v-list-item-title>
                           </NuxtLink>
                        </v-col>
                        <v-col cols="6" md="2">
                           <v-btn variant="flat" icon="mdi-delete" @click="removeSaved(estate.id)"
                              :style="{ color: 'white', backgroundColor: '#569bfc', width: '6vh', height: 'auto', borderRadius: '5px' }" />
                        </v-col>
                     </v-row>
                  </v-list-item>

                  <v-card-actions>
                     <v-spacer></v-spacer>

                     <v-btn text="Close" @click="isActive.value = false"></v-btn>
                  </v-card-actions>
               </v-card>
            </template>
         </v-dialog>

         <UiIconButton :icon="isSaved ? 'mdi-heart' : 'mdi-heart-outline'" @click="handleSave">
            Save Property
         </UiIconButton>
      </v-responsive>
   </v-col>

   <v-snackbar v-model="toastVisible">
      <v-alert closable :title="toastTitle" :type="toastType" dismissible>
         {{ toastMessage }}
      </v-alert>
   </v-snackbar>
</template>