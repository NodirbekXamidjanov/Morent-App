import { Toaster } from "./components";
import { HomePage, Categories, AboutCar, Payment } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router";
import {} from "./pages/about-car";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/cars/:id" element={<AboutCar />} />
          <Route path="/cars/:id/payment" element={<Payment />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}
