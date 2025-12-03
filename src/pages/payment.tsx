import { CheckoutForm, Footer, Navbar, RentalSummary } from "./components";

export function Payment() {
  return (
    <div className="bg-[#f6f7f9]">
      <div className=" w-full md:border-b md:sticky md:top-0 md:z-20 md:bg-white/90 md:backdrop-blur-md bg-white px-6 md:px-15 pt-8 pb-6 md:p-10">
        <Navbar search={false} />
      </div>
      <div className="md:flex md:items-start mt-8 space-y-8">
        <div className="px-6">
          <CheckoutForm />
        </div>
        <div className="lg:col-span-1 px-6 mt-8 md:mt-0 ">
          <RentalSummary
            carImage="/images/image.png"
            carName="Nissan GT - R"
            rating={4}
            reviewCount={440}
            subtotal={80}
            tax={0}
            totalPrice={80}
          />
        </div>
      </div>
      <div className="w-full bg-white">
      <Footer />
      </div>
    </div>
  );
}
