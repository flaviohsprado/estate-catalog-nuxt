import { onMounted, ref } from 'vue';
import type { IEstate } from '~/interfaces/estate';
import { formatEstate } from '~/utils';
import { estateMock } from './estate.mock';

export function useGetEstate(id: number) {
   let estate = ref<IEstate>({} as IEstate);
   const error = ref(null);

   const loadEstate = async () => {
      try {
         const formatedEstates = estateMock.map((estate) => formatEstate(estate));

         estate.value = formatedEstates.find((estate) => estate.id === id) || {} as IEstate;
      } catch (err: any) {
         error.value = err;
      }
   };

   onMounted(loadEstate);

   return { estate, error, loadEstate };
}