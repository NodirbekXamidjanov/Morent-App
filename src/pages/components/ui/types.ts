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
  imageUrl: string;
  parametrs: carParametrs;
  rentPrice: string;
};
