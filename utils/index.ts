import type { IEstate, IEstateResponse } from "~/interfaces/estate";

export function formatEstate(estate: IEstateResponse): IEstate {
   return {
      id: estate.Id,
      dateListed: estate.DateListed,
      title: estate.Title,
      description: estate.Description,
      salePrice: estate['Sale Price'],
      thumbnailURL: estate.ThumbnailURL,
      pictureURL: estate.PictureURL,
      location: estate.Location,
      sqft: estate.Sqft,
      bedrooms: estate.Bedrooms,
      bathrooms: estate.Bathrooms,
      parking: estate.Parking,
      yearBuilt: estate.YearBuilt,
   };
}

export function formatUSDate(date: string): string {
   const options = { year: 'numeric', month: 'short', day: 'numeric' };
   return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
   });
}

export function formatCurrency(amount: number): string {
   return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
   }).format(amount);
}

export function getItemsAndSort(estates: IEstate[], key: keyof IEstate) {
   console.log('estates', estates);
   const items = estates.map(estate => estate[key]).sort().filter((value, index, self) => self.indexOf(value) === index) as (string | number)[];

   return items.map(item => item.toString() as string);
}