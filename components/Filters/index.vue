<script setup lang="ts">
import { ref } from 'vue';
import { useRealStateFilterOptions } from '~/hooks/useFilterOptions';
import type { IEstate } from '~/interfaces/estate';

const router = useRouter();

let { estates, filteredEstates } = defineProps<{ estates: IEstate[], filteredEstates: IEstate[] }>();
const { bathroomsOptions, bedroomsOptions, parkingOptions, maxPrice, minPrice } = useRealStateFilterOptions(estates);

/*let bathroomsOptionsRef = ref<string[]>([]);
let bedroomsOptionsRef = ref<string[]>([]);
let parkingOptionsRef = ref<string[]>([]);
let minPriceRef = ref<number>(0);
let maxPriceRef = ref<number>(0);*/

const bedroomsValue = ref('');
const bathroomsValue = ref('');
const parkingValue = ref('');
const priceRangeValue = ref([0, 0]);


/*bathroomsOptionsRef.value = bathroomsOptions;
bedroomsOptionsRef.value = bedroomsOptions;
parkingOptionsRef.value = parkingOptions;
maxPriceRef.value = maxPrice;
minPriceRef.value = minPrice;*/

const filterEstates = () => {
   filteredEstates = estates.filter(estate => {
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
   priceRangeValue.value = [minPrice, maxPrice];
   filteredEstates = [...estates];
};
</script>

<template>
   <UiCustomComboBox label="Bedrooms" :items="bedroomsOptions" v-model="bedroomsValue" />
   <UiCustomComboBox label="Bathrooms" :items="bathroomsOptions" v-model="bathroomsValue" />
   <UiCustomComboBox label="Parking" :items="parkingOptions" v-model="parkingValue" />

   <UiCustomRange label="Price Range" :min="minPrice" :max="maxPrice" v-model.lazy="priceRangeValue" />

   <UiDefaultButton @click="filterEstates">
      Search
   </UiDefaultButton>
   <UiDefaultButton @click="resetFilters">
      Reset
   </UiDefaultButton>
</template>