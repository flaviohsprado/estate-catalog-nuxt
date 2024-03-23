
import { useLocalStorage } from '@vueuse/core';
import type { IEstate } from '~/interfaces/estate';

type SavedRealEstate = Pick<IEstate, "id" | "title" | "slug">;

export function useSavedProperties() {
   const store = useLocalStorage("savedProperties", [] as SavedRealEstate[]);

   return { store };
}