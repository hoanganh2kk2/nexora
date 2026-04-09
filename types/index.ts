export type productType = {
  _id: string;
  category: string;
  date: string;
  description: string;
  images: string[];
  name: string;
  offerPrice: number;
  popular: boolean;
  price: number;
  subCategory: string;
  userId: string;
};

export type addressType = {
  _id: string;
  userId: string;
  completeName: string;
  phone: string;
  zipcode: string;
  city: string;
  state: string;
  country: string;
  streetAddress: string;
};
