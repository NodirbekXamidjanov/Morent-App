import { PopularCars, Navbar, Search, Advertisement } from "./components";

export const HomePage = () => {
  return (
    <div className="mx-auto w-full h-screen flex flex-col gap-8 bg-[#f6f7f9] ">
      <div className="w-full px-8 flex flex-col gap-8 pt-8 pb-35 bg-white">
        {/* Navbar */}
        <Navbar />

        {/* Search box */}
        <Search />
      </div>

      {/* Ads banner */}
     <Advertisement/>
      <div className="mt-27 px-8">
        <img src="/Screenshot 2025-11-04 210859.png" alt="" />
      </div>
      {/* <PickupDropoff/> TODO */}

      <PopularCars />
    </div>
  );
};
