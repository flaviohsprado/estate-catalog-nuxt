import type { IEstate } from "~/interfaces/estate";

function createUniqueOptions(data: number[]): string[] {
   const uniqueOptions = new Set(data);

   return Array.from(uniqueOptions, String).sort();
}

export const useRealStateFilterOptions = (estates: IEstate[]) => {
   const bedroomsOptions = createUniqueOptions(
      estates.map((realEstate) => realEstate.bedrooms)
   );

   const bathroomsOptions = createUniqueOptions(
      estates.map((realEstate) => realEstate.bathrooms)
   );

   const parkingOptions = createUniqueOptions(
      estates.map((realEstate) => realEstate.parking)
   );

   const salePriceMap = estates.map(
      (realEstate) => realEstate.salePrice
   );

   const maxPrice = Math.max(...salePriceMap);

   const minPrice = Math.min(...salePriceMap);

   return {
      bedroomsOptions,
      bathroomsOptions,
      parkingOptions,
      maxPrice: maxPrice,
      minPrice: minPrice,
   };
}