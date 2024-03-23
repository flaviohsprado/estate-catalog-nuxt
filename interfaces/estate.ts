export interface IEstateTest {
   title: string;
   value: number;
}

export interface IEstateResponse {
   Id: number;
   DateListed: string;
   Title: string;
   Description: string;
   "Sale Price": number;
   ThumbnailURL: string;
   PictureURL: string;
   Location: string;
   Sqft: number;
   Bedrooms: number;
   Bathrooms: number;
   Parking: number;
   YearBuilt: number;
}

export interface IEstate {
   id: number;
   dateListed: string;
   title: string;
   description: string;
   salePrice: number;
   thumbnailURL: string;
   pictureURL: string;
   location: string;
   sqft: number;
   bedrooms: number;
   bathrooms: number;
   parking: number;
   yearBuilt: number;
   slug?: string;
}