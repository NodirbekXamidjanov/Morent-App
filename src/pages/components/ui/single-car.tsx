import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  ReviewsSection,
} from "@/components/ui/";
import { useEffect, useState } from "react";
import type { car, review } from "./types";
import { CarCard } from "./car-card";
import { useNavigate } from "react-router-dom";

interface SingleCarProps {
  car: car;
  reviews: review[];
}

export function SingleCar(props: SingleCarProps) {
  const [state, setState] = useState<car>(props.car);
  const [reviews, setReview] = useState<review[]>(props.reviews);

  const [liked, setLiked] = useState(false);

  const navigate = useNavigate();

  const handleLike = () => {
    setLiked(!liked);
  };

  useEffect(() => {
    setState(props.car);
    setReview(props.reviews);
  }, [props.car, props.reviews]);

  console.log("state = ", state);
  console.log("props = ", props.car);

  return (
    <div className="bg-[#f6f7f9] flex mt-18 md:mt-0 flex-col items-center ">
      <div className="mt-8 flex flex-col md:flex-row w-full md:px-15 px-4 justify-center items-center gap-6 font-['Plus Jakarta Sans', sans-serif]">
        <Carousel className="md:w-[498px] w-[335px]">
          <CarouselContent>
            {state?.imageUrl.map((link, index) => (
              <CarouselItem key={index} className="w-full">
                <div className="  ">
                  <Card className="sm:w-[327px] sm:h-[232px] md:w-[492px] bg-[#3562e9]/40 md:h-[360px] ">
                    <CardContent className="flex md:aspect-square items-center text-white flex-col">
                      <h2 className=" font-semibold md:text-[32px] text-[16px] md:leading-[140%] align-middle">
                        Sports car with the best design and acceleration
                      </h2>
                      <p className="font-medium md:text-[16px] text-3  md:leading-[150%] md:tracking-[0.02em] tracking-[-2%x] align-middle">
                        Safety and comfort while driving a futuristic and
                        elegant sports car
                      </p>
                      <img src={link} alt="" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <CarCard
          name="Nissan GT - R"
          rating={4}
          reviewCount={440}
          description="NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the 'race track'."
          specs={{
            typeLabel: "Type Car",
            typeValue: "Sport",
            capacityLabel: "Capacity",
            capacityValue: "2 Person",
            steeringLabel: "Steering",
            steeringValue: "Manual",
            gasLabel: "Gasoline",
            gasValue: "70L",
          }}
          pricePerDay={80}
          originalPrice={100}
          onRent={() => navigate(`/cars/${props.car.id}/payment`)}
          onLike={handleLike}
          liked={liked}
        />
      </div>
      <ReviewsSection reviews={reviews} totalCount={13} />
    </div>
  );
}
