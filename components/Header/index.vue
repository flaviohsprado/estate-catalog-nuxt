<script setup lang="ts">
import type { IEstate } from '~/interfaces/estate';

defineProps<{
   estate: IEstate;
}>()

</script>

<template>
   <v-col cols="6" md="4" style="padding-top: 0px; padding-bottom: 0px;">
      <v-container>
         <div><v-text :style="{ fontSize: '1.3em' }">{{ estate.title }}</v-text></div>
         <div><v-text>{{ estate.location }}</v-text></div>
      </v-container>
   </v-col>

   <v-col cols="6" md="4" style="padding-top: 0px; padding-bottom: 0px;">
      <v-container>
         <div style="text-align: right;">
            <v-text :style="{ fontSize: '1.3em' }">{{ formatCurrency(estate.salePrice) }}</v-text>
         </div>
         <div style="text-align: right;">
            <v-text>Date Listed: {{ formatUSDate(estate.dateListed) }}</v-text>
         </div>
      </v-container>
   </v-col>

   <SavePropertyButton :estate="estate" />
</template>