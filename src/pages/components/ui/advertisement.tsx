export function Advertisement() {
  return (
    <div className="absolute flex items-center gap-32 z-50 top-45 md:static  px-6 md:p-15">
      <img src="/Ads 1.svg" className="w-full h-auto cursor-pointer" alt="advertisement" />
      <img src="/Ads 2.svg" className="w-full h-auto cursor-pointer hidden md:block" alt="advertisement" />
    </div>
  );
}
