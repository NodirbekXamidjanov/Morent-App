import { useEffect, useState } from "react";
import { Footer, Navbar, Recomendation, Filter, SingleCar } from "./components";
import { filterData } from "./logics/filter-logic";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import type { car, Filters } from "./components/ui/types";
import { useParams } from "react-router-dom";
export function AboutCar() {
  const [allCars, setAllCars] = useState<car[]>([]);
  const [filteredCars, setFilteredCars] = useState<car[]>([]);
  const [filters, setFilters] = useState<Filters>({
    type: [],
    capacity: [],
    price: 0,
  });

  const { id } = useParams();
  const currentCar = allCars.find((car) => car.id === Number(id));

  const reviews = [
    {
      id: "1",
      author: "Alex Stanton",
      role: "CEO at Bukalapak",
      avatar: "/avatar-alex-stanton.jpg",
      date: "21 July 2022",
      rating: 4,
      text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    },
    {
      id: "2",
      author: "Skylar Dias",
      role: "CEO at Amazon",
      avatar: "/avatar-skylar-dias.jpg",
      date: "20 July 2022",
      rating: 4,
      text: "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    },
  ];

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
        <div className="flex flex-col items-center ">
          <SingleCar car={currentCar!} reviews={reviews} />
          <Recomendation title={"Recent Cars"} data={filteredCars} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
