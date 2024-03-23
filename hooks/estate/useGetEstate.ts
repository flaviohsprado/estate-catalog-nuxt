import axios from 'axios';
import { onMounted, ref } from 'vue';
import type { IEstate, IEstateResponse } from '~/interfaces/estate';
import { formatEstate } from '~/utils';

export function useGetEstate(id: number) {
   let estate = ref<IEstate>({} as IEstate);
   const error = ref(null);

   const loadEstate = async () => {
      try {
         const { data } = await axios.get<IEstateResponse[]>('https://mocki.io/v1/4814c9f0-ceca-4f94-ab54-02cc311dda3f');

         const formatedEstates = data.map((estate) => formatEstate(estate));

         estate.value = formatedEstates.find((estate) => estate.id === id) || {} as IEstate;
      } catch (err: any) {
         error.value = err;
      }
   };

   onMounted(loadEstate);

   return { estate, error, loadEstate };
}