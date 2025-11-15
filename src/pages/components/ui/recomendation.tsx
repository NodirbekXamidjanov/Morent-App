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

interface RecomendationState {
  cars: car[];
}

export const Recomendation = () => {
  const [state, setCars] = useState<RecomendationState>({ cars: [] });

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get<car[]>(
          "http://192.168.100.3:3000/recomendation-cars"
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
      className="px-6 md:px-15 flex flex-col gap-4  bg-[#f6f7f9]"
      style={{ fontFamily: "Plus Jakarta Sans" }}
    >
      <span className="flex justify-between">
        <h2 className=" font-semibold text-[14px] leading-[150%] tracking-[-0.02em] align-middle text-[#90A3BF]">
          Recomendation Cars
        </h2>
      </span>
      <div>
      <ul
  className="
    flex flex-col gap-5 w-full
    md:grid md:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
  "
>
  {state?.cars.map((car) => (
    <li key={car.id}>
      <Card className="bg-white border-none">
        <CardHeader>
          <CardTitle className="font-plusJakarta font-semibold text-[16px] leading-[150%] tracking-[-0.02em] align-middle">
            {car.model}
          </CardTitle>
          <CardDescription className="font-plusJakarta font-medium text-[12px] leading-[100%] tracking-[-0.02em] align-middle text-[#90A3BF]">
            {car.type}
          </CardDescription>
          <CardAction>{car.liked ? "❤️" : "🩶"}</CardAction>
        </CardHeader>

        <div className="flex items-center pr-4">
          <CardContent>
            <img src={car.imageUrl} alt="" />
          </CardContent>

          <CardContent className="flex flex-col gap-4 text-[#90A3BF]">
            <span className="flex gap-1 carParametrs">
              <img src="/gas-station.svg" alt="" />
              {car.parametrs.fuelCapacity}L
            </span>

            <span className="flex gap-1 carParametrs">
              <img src="/Car.svg" alt="" />
              {car.parametrs.manual ? "Manual" : "Automated"}
            </span>

            <span className="flex gap-1 items-center whitespace-nowrap carParametrs">
              <img src="/profile-2user.svg" alt="" />
              {car.parametrs.seats} People
            </span>
          </CardContent>
        </div>

        <CardFooter className="flex justify-between items-center">
          <span className="font-bold text-[16px] leading-[100%] tracking-[-0.01em] align-middle">
            ${car.rentPrice}/
            <span className="font-bold text-[12px] leading-[100%] tracking-[-0.01em] align-middle text-[#90A3BF]">
              day
            </span>
          </span>

          <Button
            variant="primary"
            className="px-4 py-2 font-semibold text-[12px] leading-[100%] tracking-[-0.02em] text-center align-middle"
          >
            Rental Now
          </Button>
        </CardFooter>
      </Card>
    </li>
  ))}
</ul>


        <div className="flex items-center justify-between md:ml-145 ml-24 mt-14 ">
          <Button
            variant={"primary"}
            className="font-semibold text-[12px] leading-[100%] md:leading-[150%] md:text-[16px ] tracking-[-0.02em] text-center align-middle"
            children={"Show More Car"}
          />
          <span className="font-bold text-[14px] leading-[100%] whitespace-nowrap tracking-[0em] text-right align-middle text-[#90A3BF]">
            120 Car
          </span>
        </div>
      </div>
    </div>
  );
};
