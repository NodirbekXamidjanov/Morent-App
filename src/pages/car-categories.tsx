import { useEffect, useState } from "react";
import {
  Footer,
  Navbar,
  PickupDropoffSection,
  Recomendation,
  Filter,
} from "./components";
import { filterData } from "./logics/filter-logic";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import type { car, Filters } from "./components/ui/types";
export function Categories() {
  const [allCars, setAllCars] = useState<car[]>([]);
  const [filteredCars, setFilteredCars] = useState<car[]>([]);
  const [filters, setFilters] = useState<Filters>({
    type: [],
    capacity: [],
    price: 0,
  });

  // Backenddan ma'lumot olish
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get<car[]>(
          "https://my-json-server.typicode.com/NodirbekXamidjanov/Demo-db/recomendation-cars"
        );
        setAllCars(data);
        setFilteredCars(data);
      } catch (error) {
        if (error instanceof AxiosError) toast.error(error.message);
      }
    })();
  }, []);

  // Filterlar o‘zgarganda filteredCars yangilansin
  useEffect(() => {
    setFilteredCars(filterData(allCars, filters));
  }, [allCars, filters]);

  return (
    <div>
      <div className=" w-full md:border-b md:sticky md:top-0 md:z-90 md:bg-white/50 md:backdrop-blur-md bg-white px-6 md:px-15 pt-8 pb-6 md:p-10">
        <Navbar search={true} />
      </div>

      <div className="flex gap-8">
        {/* Filter sidebar */}
        <div className="hidden md:block md:w-64 md:top-24 md:self-start">
          <Filter onChange={setFilters} />
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col gap-8 items-center pt-8">
          <PickupDropoffSection />
          <Recomendation title={" "} data={filteredCars} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
