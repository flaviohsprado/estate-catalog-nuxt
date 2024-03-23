<script setup lang="ts">
import type { IEstate } from '~/interfaces/estate';

defineProps<{
   id: number;
   title: string;
   thumbnailURL: string;
   location: string;
   bedrooms: number;
   bathrooms: number;
   salePrice: number;
   estate?: IEstate;
}>();
</script>

<template>
   <v-card :loading="false" :style="{
      minWidth: '18%',
      width: '18%',
      margin: '1em',
      borderRadius: '10px',
      boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.1)',
   }">
      <v-img height="250" :src="thumbnailURL" cover></v-img>
      <v-card-item>
         <v-card-title>{{ title }}</v-card-title>

         <v-card-text :style="{ padding: '0' }">
            <span class="me-1">{{ location }}</span>
         </v-card-text>

         <v-card-subtitle :style="{ padding: '0', paddingTop: '8px' }">
            {{ bedrooms }} beds | {{ bathrooms }} baths
         </v-card-subtitle>

         <v-card-title>${{ new Intl.NumberFormat('en-US').format(salePrice) }}</v-card-title>

         <v-card-actions :style="{ padding: 0 }">
            <NuxtLink :to="'/estate/' + id" :target="'_blank'">
               <v-btn variant="flat" :style="{ color: 'white', backgroundColor: '#569bfc' }">
                  View Details
               </v-btn>
            </NuxtLink>
         </v-card-actions>
      </v-card-item>
   </v-card>
</template>