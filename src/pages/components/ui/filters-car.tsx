import { useState, useEffect } from "react";
import type { Filters } from "./types";

interface FilterProps {
  onChange: (filters: Filters) => void;
}



export function Filter({ onChange }: FilterProps) {
  const typeOptions = ["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"];
  const capacityOptions = [2, 4, 6, 8];

  const [type, setType] = useState<string[]>([]);
  const [capacity, setCapacity] = useState<number[]>([]);
  const [price, setPrice] = useState<number>(1000);


  useEffect(() => {
    onChange({ type, capacity, price });
  }, [type, capacity, price]);

  const toggleType = (t: string) => {
    setType((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  };

  const toggleCapacity = (c: number) => {
    setCapacity((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );
  };

  return (
    <div className="flex flex-col gap-6 p-4 w-64">
      {/* Type */}
      <div>
        <h3 className="text-xs font-semibold text-gray-400 uppercase mb-2">Type</h3>
        {typeOptions.map((t) => (
          <label key={t} className="flex items-center gap-2 mb-1 cursor-pointer">
            <input
              type="checkbox"
              checked={type.includes(t)}
              onChange={() => toggleType(t)}
            />
            <span className="text-sm">{t}</span>
          </label>
        ))}
      </div>

      {/* Capacity */}
      <div>
        <h3 className="text-xs font-semibold text-gray-400 uppercase mb-2">Capacity</h3>
        {capacityOptions.map((c) => (
          <label key={c} className="flex items-center gap-2 mb-1 cursor-pointer">
            <input
              type="checkbox"
              checked={capacity.includes(c)}
              onChange={() => toggleCapacity(c)}
            />
            <span className="text-sm">{c} Person</span>
          </label>
        ))}
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs font-semibold text-gray-400 uppercase mb-2">Price</h3>
        <input
          type="range"
          min={0}
          max={1000}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full"
        />
        <p className="text-sm mt-1">Max: ${price}</p>
      </div>
    </div>
  );
}
