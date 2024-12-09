<script setup lang="ts">
import { useGetEstate } from '~/hooks/estate/useGetEstate';

const route = useRoute();

const { estate, error, loadEstate } = useGetEstate(Number(route.params.id));

// Add error handling
const hasError = ref(false);

onMounted(async () => {
   try {
      await loadEstate();
   } catch (e) {
      console.error('Error loading estate:', e);
      hasError.value = true;
   }
});

</script>

<template>
   <v-layout class="rounded rounded-md">
      <!-- Show error state -->
      <div v-if="hasError || error" class="pa-4">
         <v-alert type="error">
            Failed to load estate information. Please try again later.
         </v-alert>
      </div>

      <!-- Show loading state -->
      <div v-else-if="!estate" class="pa-4">
         <v-progress-circular indeterminate />
      </div>

      <!-- Show content when estate data is available -->
      <v-row v-else-if="estate && Object.keys(estate).length" :style="{
         padding: '1em',
         borderRadius: '10px',
         boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.1)',
      }">
         <Header :estate="estate" />

         <v-col cols="12" md="8">
            <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
               <v-img :width="300" max-height="500" cover :src="estate.pictureURL" :style="{ borderRadius: '10px' }" />
            </v-main>

            <Info :bathrooms="estate.bathrooms ?? 0" :bedrooms="estate.bedrooms ?? 0" :parking="estate.parking ?? 0"
               :sqft="estate.sqft ?? 0" :yearBuilt="estate.yearBuilt ?? 0" />

            <div :style="{ paddingTop: '20px', paddingBottom: '20px' }">
               <v-text>{{ estate.description }}</v-text>
            </div>
         </v-col>

         <v-col cols="12" md="4" :style="{
            borderRadius: '10px',
            backgroundColor: '#c4c4c4',
            maxHeight: '600px',
         }">
            <FormContact />
         </v-col>
      </v-row>
   </v-layout>
</template>