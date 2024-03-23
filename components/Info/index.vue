<script setup lang="ts">
defineProps<{
   bedrooms: number;
   bathrooms: number;
   parking: number;
   sqft: number;
   yearBuilt: number;
}>();
</script>

<template>
   <v-card :style="{ padding: '1em', marginTop: '1em', display: 'flex', justifyContent: 'space-between' }">
      <v-row dense class="mb-6" no-gutters cols="5">
         <v-col cols="4" md="2" class="center-div">
            <div>
               <v-text class="title-text">{{ bedrooms }}</v-text>
            </div>
            <div>
               <v-text class="title-name-text">BED</v-text>
            </div>
         </v-col>

         <v-col cols="4" md="2" class="center-div">
            <div>
               <v-text class="title-text">{{ bathrooms }}</v-text>
            </div>
            <div>
               <v-text class="title-name-text">BATH</v-text>
            </div>
         </v-col>

         <v-col cols="4" md="2" class="center-div">
            <div>
               <v-text class="title-text">{{ parking }}</v-text>
            </div>
            <div>
               <v-text class="title-name-text">PARKING</v-text>
            </div>
         </v-col>

         <v-col cols="6" md="2" class="center-div">
            <div>
               <v-text class="title-text">{{ sqft }}</v-text>
            </div>
            <div>
               <v-text class="title-name-text">SQFT</v-text>
            </div>
         </v-col>

         <v-col cols="6" md="2" class="center-div">
            <div>
               <v-text class="title-text">{{ yearBuilt }}</v-text>
            </div>
            <div>
               <v-text class="title-name-text">YEAR BUILD</v-text>
            </div>
         </v-col>
      </v-row>
   </v-card>
</template>

<style scoped>
.title-text {
   font-size: 2em;
}

.title-name-text {
   font-size: 1.2em;
}

.center-div {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
}

@media (max-width: 600px) {
   .title-text {
      font-size: 1.5em;
   }

   .title-name-text {
      font-size: 1em;
   }
}
</style>