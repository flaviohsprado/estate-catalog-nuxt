<script setup lang="ts">
import { useGetEstate } from '~/hooks/estate/useGetEstate';

const route = useRoute()

const { estate, error, loadEstate } = useGetEstate(Number(route.params.id));

onMounted(() => {
   loadEstate();
});

</script>

<template>
   <v-layout class="rounded rounded-md" v-if="estate && Object.keys(estate).length">
      <v-row :style="{
      padding: '1em',
      borderRadius: '10px',
      boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.1)',
   }">
         <Header :estate="estate" />

         <v-col cols="12" md="8">
            <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
               <v-img :width="300" max-height="500" cover :src="estate.pictureURL" :style="{ borderRadius: '10px' }" />
            </v-main>

            <Info :bathrooms="estate.bathrooms" :bedrooms="estate.bedrooms" :parking="estate.parking"
               :sqft="estate.sqft" :yearBuilt="estate.yearBuilt" />

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
</template>~/hooks/estate/useGetEstate