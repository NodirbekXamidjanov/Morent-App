import { PopularCars, Navbar, Search, Advertisement, Recomendation, Footer } from "./components";

export const HomePage = () => {
  return (
    <div className="mx-auto w-full flex flex-col gap-8  bg-[#f6f7f9] ">
      <div className="w-full  sm:px-6 lg:px-8 flex flex-col gap-8 px-6 pt-8 p-36 bg-white">
        {/* Navbar */}
        <Navbar />

        {/* Search box */}
        <Search />
      </div>

      {/* Ads banner */}
      <Advertisement/>
      <div className="px-6 sm:px-6 lg:px-8">
        <img className="w-full h-auto mt-30" src="/Screenshot 2025-11-04 210859.png" alt="Home banner" />
      </div>
      {/* <PickupDropoff/> TODO */}

      <PopularCars />
      <Recomendation />
      <Footer/>
    </div>
  );
};
