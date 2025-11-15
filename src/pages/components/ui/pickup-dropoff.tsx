import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function PickupDropoffSection() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [dropoffTime, setDropoffTime] = useState("");

//    const handleSearch = () => {
//     const data = {
//       pickupLocation,
//       pickupDate,
//       pickupTime,
//       dropoffLocation,
//       dropoffDate,
//       dropoffTime,
//     };
//     console.log("Search data:", data);
//     // Bu yerda search logic qo'shishingiz mumkin
//   };

  return (
    <div className="bg-white rounded-lg mt-29 md:mt-0 p-6 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-end">
        {/* Pick-Up */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="font-semibold text-gray-800">Pick-Up</span>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Locations
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Select your city"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="w-full px-3 py-2 border-0 bg-transparent text-sm text-gray-600 focus:outline-none"
                />
                <ChevronDown className="absolute right-2 top-2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  placeholder="Select your date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full px-3 py-2 border-0 bg-transparent text-sm text-gray-600 focus:outline-none"
                />
                <ChevronDown className="absolute right-2 top-2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Time
              </label>
              <div className="relative">
                <input
                  type="time"
                  placeholder="Select your time"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full px-3 py-2 border-0 bg-transparent text-sm text-gray-600 focus:outline-none"
                />
                <ChevronDown className="absolute right-2 top-2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>
          </div>
        </div>
         

        {/* Swap Button */}
        <div className="flex justify-center">
          <button 
            onClick={() => {
              // Swap pick-up and drop-off values
              const tempLocation = pickupLocation;
              const tempDate = pickupDate;
              const tempTime = pickupTime;
              
              setPickupLocation(dropoffLocation);
              setPickupDate(dropoffDate);
              setPickupTime(dropoffTime);
              
              setDropoffLocation(tempLocation);
              setDropoffDate(tempDate);
              setDropoffTime(tempTime);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg shadow-lg transition-colors"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M7 16V4M7 4L3 8M7 4L11 8" />
              <path d="M17 8V20M17 20L21 16M17 20L13 16" />
            </svg>
          </button>
        </div>

        {/* Drop-Off */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-400 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="font-semibold text-gray-800">Drop-Off</span>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Locations
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Select your city"
                  value={dropoffLocation}
                  onChange={(e) => setDropoffLocation(e.target.value)}
                  className="w-full px-3 py-2 border-0 bg-transparent text-sm text-gray-600 focus:outline-none"
                />
                <ChevronDown className="absolute right-2 top-2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  placeholder="Select your date"
                  value={dropoffDate}
                  onChange={(e) => setDropoffDate(e.target.value)}
                  className="w-full px-3 py-2 border-0 bg-transparent text-sm text-gray-600 focus:outline-none"
                />
                <ChevronDown className="absolute right-2 top-2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Time
              </label>
              <div className="relative">
                <input
                  type="time"
                  placeholder="Select your time"
                  value={dropoffTime}
                  onChange={(e) => setDropoffTime(e.target.value)}
                  className="w-full px-3 py-2 border-0 bg-transparent text-sm text-gray-600 focus:outline-none"
                />
                <ChevronDown className="absolute right-2 top-2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
