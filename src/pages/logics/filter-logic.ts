import type { car, Filters } from "../components/ui/types";

export function filterData(data: car[], filters: Filters): car[] {
  return data.filter((c) => {

    if (filters.type && filters.type.length > 0) {
      if (
        !filters.type
          .map((t) => t.toLowerCase())
          .includes(c.type.trim().toLowerCase())
      ) {
        return false;
      }
    }

    if (filters.capacity && filters.capacity.length > 0) {
      if (!filters.capacity.includes(c.parametrs.seats)) return false;
    }

    if (filters.price !== undefined && c.rentPrice > filters.price)
      return false;

    return true;
  });
}
