import axios from 'axios';
import { onMounted, ref } from 'vue';
import type { IEstate, IEstateResponse } from '~/interfaces/estate';
import { formatEstate } from '~/utils';

export function useGetEstates() {
   let estates = ref<IEstate[]>([]);
   const error = ref(null);

   const loadEstates = async () => {
      try {
         const { data } = await axios.get<IEstateResponse[]>('https://mocki.io/v1/4814c9f0-ceca-4f94-ab54-02cc311dda3f');
         estates.value = data.map((estate) => formatEstate(estate));
      } catch (err: any) {
         error.value = err;
      }
   };

   onMounted(loadEstates);

   return { estates, error, loadEstates };
}