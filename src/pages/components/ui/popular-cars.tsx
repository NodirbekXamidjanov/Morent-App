import { useEffect, useState } from "react";
import type { car } from "./types";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components";

interface PopularCarsState {
  cars: car[];
}

export const PopularCars = () => {
  const [state, setCars] = useState<PopularCarsState>({ cars: [] });

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get<car[]>(
          "https://my-json-server.typicode.com/NodirbekXamidjanov/Demo-db/popular-cars"
        );
        console.log(data);
        setCars({ cars: data });
      } catch (error) {
        if (error) console.log(error);

        if (error instanceof AxiosError) {
          toast.error(error.message);

          return <h1>{error.message}</h1>;
        }
      }
    })();
  }, []);

  return (
    <div
      className="w-full pl-6 flex flex-col gap-4 md:px-15 bg-[#f6f7f9]"
      style={{ fontFamily: "Plus Jakarta Sans" }}
    >
      <span className="flex justify-between pr-8">
        <h2 className=" font-semibold text-[14px] leading-[150%] tracking-[-0.02em] align-middle text-[#90A3BF]">
          Popular Cars
        </h2>
        <p className="font-semibold text-[12px] leading-[100%] tracking-[0em] text-right align-middle text-[#3563E9]">
          View All
        </p>
      </span>
      <div className="overflow-x-auto  ">
        <ul className="flex gap-4 md:gap-8 w-max">
          {state?.cars.map((car) => (
            <li key={car.id}>
              <Card className="w-60 md:w-76 bg-white border-none">
                <CardHeader className="md:pb-8">
                  <CardTitle className="font-plusJakarta font-semibold md:font-bold text-[16px] md:text-5 leading-[150%] tracking-[-0.02em] align-middle">
                    {car.model}
                  </CardTitle>
                  <CardDescription className="font-plusJakarta font-medium md:font-bold text-[12px] md:text-4 leading-[100%] tracking-[-0.02em] align-middle text-[#90A3BF]">
                    {car.type}
                  </CardDescription>
                  <CardAction>{car.liked ? "❤️" : "🩶"}</CardAction>
                </CardHeader>
                <CardContent>
                  <img src={car.imageUrl} alt="" />
                </CardContent>
                <CardContent className="flex md:pt-4 gap-4 text-[#90A3BF]">
                  <span className="flex gap-2 carParametrs">
                    <img src="/gas-station.svg" alt="" />
                    {car.parametrs.fuelCapacity}L
                  </span>
                  <span className="flex gap-2 carParametrs">
                    <img src="/Car.svg" alt="" />
                    {car.parametrs.manual ? "Manual" : "Automated"}
                  </span>
                  <span className="flex gap-2 carParametrs">
                    <img src="/profile-2user.svg" alt="" />
                    {car.parametrs.seats}
                  </span>
                </CardContent>
                <CardFooter className="flex justify-between items-center gap-4">
                  <span className="font-bold text-[16px] leading-[100%] tracking-[-0.01em] align-middle">
                    ${car.rentPrice}/
                    <span className="font-bold text-[12px] leading-[100%] tracking-[-0.01em] align-middle text-[#90A3BF]">
                      day
                    </span>
                  </span>
                  <Button
                    variant={"primary"}
                    className="px-4 py-2 font-semibold text-[12px] leading-[100%] tracking-[-0.02em] text-center align-middle"
                  >
                    Rental Now
                  </Button>
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
