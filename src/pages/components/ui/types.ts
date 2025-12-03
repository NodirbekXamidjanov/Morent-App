interface carParametrs {
  seats: number;
  fuelCapacity: number;
  manual: boolean;
}

export type car = {
  id: number;
  model: string;
  type: string;
  liked: boolean;
  imageUrl: string[];
  parametrs: carParametrs;
  rentPrice: number;
};

export interface Filters {  
  type: string[];
  capacity: number[];
  price: number; // maksimal price
}

export type review =  {
  id: string,
  author: string,
  role: string,
  avatar: string,
  date: string,
  rating: number,
  text: string,
}