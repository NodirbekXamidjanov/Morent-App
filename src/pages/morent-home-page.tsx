import {
  PopularCars,
  Navbar,
  Advertisement,
  Recomendation,
  Footer,
} from "./components";
import PickupDropoffSection from "./components/ui/pickup-dropoff";

export const HomePage = () => {
  return (
    <div className=" w-full flex flex-col items-center gap-8 bg-[#f6f7f9] ">
      {/* Navbar */}
      <Navbar />

      {/* Ads banner */}
      <Advertisement />
      {/* <div className="px-6">
        <img className="w-full h-auto mt-30 md:hidden" src="/Screenshot 2025-11-04 210859.png" alt="Home banner" />
        <img className="w-full h-auto   hidden md:block" src="/image.png" alt="Home banner" />
      </div> */}
      {/* <PickupDropoff/> TODO */}
      <PickupDropoffSection />

      <PopularCars />
      <Recomendation />
      <Footer />
    </div>
  );
};
