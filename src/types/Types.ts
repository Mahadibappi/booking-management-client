export type TUser = {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  address: string;
};

export type TFacilityData = {
  name: string;
  description: string;
  pricePerHour: number | string;
  location: string;
  image: File | string;
};
