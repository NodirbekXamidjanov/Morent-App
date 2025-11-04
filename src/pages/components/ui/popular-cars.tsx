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
          "http://192.168.100.3:3000/popular-cars"
        );
        console.log(data);
        setCars({ cars: data });
        toast.success("Data is successfuly");
      } catch (error) {
        if (error) console.log(error);

        if (error instanceof AxiosError) return toast.error(error.message);
      }
    })();
  }, []);

  return (
    <div className="w-full pl-8 flex flex-col gap-4 bg-[#f6f7f9]" style={{fontFamily: "Plus Jakarta Sans"}}>
        <span className="flex justify-between pr-8">
      <h2 className=" font-semibold text-[14px] leading-[150%] tracking-[-0.02em] align-middle text-[#90A3BF]">Popular Cars</h2>
        <p className="font-semibold text-[12px] leading-[100%] tracking-[0em] text-right align-middle text-[#3563E9]">View All</p>
        </span>
      <div className="overflow-x-auto  ">
  <ul className="flex gap-4 w-max">
    {state?.cars.map((car) => (
      <li key={car.id}>
        <Card className="w-60 bg-white border-none">
          <CardHeader>
            <CardTitle>{car.model}</CardTitle>
            <CardDescription>{car.type}</CardDescription>
            <CardAction>{car.liked ? "❤️" : "🩶"}</CardAction>
          </CardHeader>
            <CardContent>
              <img src={car.imageUrl} alt="" />
            </CardContent>
            <CardContent className="">
              <span>{car.parametrs.fuelCapacity}L</span>
              <span>{car.parametrs.manual ? "Manual" : "Automated"}</span>
              <span>{car.parametrs.seats}</span>
            </CardContent>
          <CardFooter className="flex justify-between items-center">
            <span>${car.rentPrice}/<span>day</span></span>
            <Button variant={"primary"}>Rental Now</Button>
          </CardFooter>
        </Card>
      </li>
    ))}
  </ul>
</div>

    </div>
  );
};
