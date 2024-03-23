<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useGetEstates } from '~/hooks/estate/useGetEstates';
import { useRealStateFilterOptions } from '~/hooks/useFilterOptions';
import type { IEstate } from '~/interfaces/estate';

const { estates, error, loadEstates } = useGetEstates();

const estatesRef = ref<IEstate[]>([]);
const filteredEstatesRef = ref<IEstate[]>([]);

let bathroomsOptionsRef = ref<string[]>([]);
let bedroomsOptionsRef = ref<string[]>([]);
let parkingOptionsRef = ref<string[]>([]);
let minPriceRef = ref<number>(0);
let maxPriceRef = ref<number>(0);
const drawer = ref(false)

const bedroomsValue = ref('');
const bathroomsValue = ref('');
const parkingValue = ref('');
const priceRangeValue = ref([0, 0]);

onMounted(async () => {
   await loadEstates();

   estatesRef.value = estates.value;
   filteredEstatesRef.value = estates.value;

   const { bathroomsOptions, bedroomsOptions, parkingOptions, maxPrice, minPrice } = useRealStateFilterOptions(estatesRef.value);
   bathroomsOptionsRef.value = bathroomsOptions;
   bedroomsOptionsRef.value = bedroomsOptions;
   parkingOptionsRef.value = parkingOptions;
   maxPriceRef.value = maxPrice;
   minPriceRef.value = minPrice;
});

const filterEstates = () => {
   filteredEstatesRef.value = estatesRef.value.filter(estate => {
      const matchesBedrooms = bedroomsValue.value ? estate.bedrooms === Number(bedroomsValue.value) : true;
      const matchesBathrooms = bathroomsValue.value ? estate.bathrooms === Number(bathroomsValue.value) : true;
      const matchesParking = parkingValue.value ? estate.parking === Number(parkingValue.value) : true;
      const matchesPrice = Math.round(priceRangeValue.value[0]) <= Math.round(estate.salePrice) && Math.round(estate.salePrice) <= Math.round(priceRangeValue.value[1]);

      return matchesBedrooms && matchesBathrooms && matchesParking && matchesPrice;
   });
};

const resetFilters = () => {
   bedroomsValue.value = '';
   bathroomsValue.value = '';
   parkingValue.value = '';
   priceRangeValue.value = [minPriceRef.value, maxPriceRef.value];
   filteredEstatesRef.value = [...estatesRef.value];
};
</script>

<template>
   <v-app id="inspire">
      <v-app-bar>
         <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

         <v-app-bar-title>Estate Catalog</v-app-bar-title>
      </v-app-bar>

      <v-navigation-drawer :model-value="drawer" temporary>
         <div class="filters">
            <UiCustomComboBox label="Bedrooms" :items="bedroomsOptionsRef" v-model="bedroomsValue" />
            <UiCustomComboBox label="Bathrooms" :items="bathroomsOptionsRef" v-model="bathroomsValue" />
            <UiCustomComboBox label="Parking" :items="parkingOptionsRef" v-model="parkingValue" />

            <UiCustomRange label="Price Range" :min="minPriceRef" :max="maxPriceRef" v-model.lazy="priceRangeValue" />

            <UiDefaultButton @click="filterEstates">
               Search
            </UiDefaultButton>
            <UiDefaultButton @click="resetFilters">
               Reset
            </UiDefaultButton>
         </div>
      </v-navigation-drawer>

      <v-main class="bg-grey-lighten-2">
         <v-container>
            <v-row>
               <template v-for="estate in filteredEstatesRef" :key="estate.id">
                  <UiCustomCard :id="estate.id" :title="estate.title" :thumbnailURL="estate.thumbnailURL"
                     :location="estate.location" :bedrooms="estate.bedrooms" :bathrooms="estate.bathrooms"
                     :salePrice="estate.salePrice" :estate="estate" />
               </template>
            </v-row>
         </v-container>
      </v-main>
   </v-app>
</template>

<style scoped>
#inspire {
   background-color: #8f8080;
}

.filters {
   padding: 10px;
}
</style>