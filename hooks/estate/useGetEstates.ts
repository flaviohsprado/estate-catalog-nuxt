import { onMounted, ref } from 'vue';
import type { IEstate } from '~/interfaces/estate';
import { formatEstate } from '~/utils';
import { estateMock } from './estate.mock';

export function useGetEstates() {
   let estates = ref<IEstate[]>([]);
   const error = ref(null);

   const loadEstates = async () => {
      try {
         const formatedEstates = estateMock.map((estate) => formatEstate(estate));
         estates.value = formatedEstates;
      } catch (err: any) {
         error.value = err;
      }
   };

   onMounted(loadEstates);

   return { estates, error, loadEstates };
}