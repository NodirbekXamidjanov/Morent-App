import {
  PopularCars,
  Navbar,
  Advertisement,
  Recomendation,
  Footer,
  PickupDropoffSection,
} from "./components";

export const HomePage = () => {
  return (
    <div className=" w-full flex flex-col items-center gap-8 bg-[#f6f7f9] ">
      {/* Navbar */}
      <div className="navbar md:sticky md:top-0 md:z-70 w-full px-6 md:px-15 pt-8 pb-46 md:p-10 md:bg-white/50 md:backdrop-blur-md bg-white justify-between flex flex-row container shadow-md">
        <Navbar search={true} />
      </div>

      {/* Ads banner */}
      <Advertisement />

      {/* <PickupDropoff/> TODO */}
      <div className="mt-29 md:mt-0">
        <PickupDropoffSection />
      </div>

      <PopularCars />
      <Recomendation title={""} />
      <div className="bg-[#F6F7F9]">
        <Footer />
      </div>
    </div>
  );
};
