export function Skeleton() {
    return (
      <div className="flex flex-col gap-6 p-4">
  
        {/* Yuqori qism */}
        <div className="flex gap-4">
          {/* Chap katta content */}
          <div className="flex-1 flex flex-col gap-2">
            <div className="bg-green-500 h-40 rounded-md animate-pulse" />
            <div className="flex gap-2">
              <div className="bg-green-500 h-20 flex-1 rounded-md animate-pulse" />
              <div className="bg-green-500 h-20 flex-1 rounded-md animate-pulse" />
              <div className="bg-green-500 h-20 flex-1 rounded-md animate-pulse" />
            </div>
          </div>
  
          {/* O‘ng detallar paneli */}
          <div className="flex-1 flex flex-col gap-2">
            <div className="bg-blue-300 h-12 rounded-md animate-pulse" />
            <div className="bg-purple-300 h-24 rounded-md animate-pulse" />
            <div className="flex gap-2">
              <div className="bg-blue-500 h-10 flex-1 rounded-md animate-pulse" />
              <div className="bg-blue-500 h-10 flex-1 rounded-md animate-pulse" />
            </div>
            <div className="flex gap-2">
              <div className="bg-blue-500 h-10 flex-1 rounded-md animate-pulse" />
              <div className="bg-pink-300 h-10 flex-1 rounded-md animate-pulse" />
            </div>
          </div>
        </div>
  
        {/* Quyi ro‘yxat qismi */}
        <div className="flex flex-col gap-4 bg-gray-300 p-4 rounded-md">
          {/* Search bar */}
          <div className="bg-yellow-100 h-10 w-1/3 rounded-md animate-pulse mb-2" />
  
          {/* List item */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="bg-lime-400 w-10 h-10 rounded-md animate-pulse" />
              <div className="flex-1 flex flex-col gap-1">
                <div className="bg-lime-300 h-6 w-full rounded-md animate-pulse" />
                <div className="bg-pink-400 h-4 w-full rounded-md animate-pulse" />
              </div>
              <div className="bg-lime-400 w-20 h-6 rounded-md animate-pulse" />
            </div>
  
            {/* Ikkinchi item */}
            <div className="flex gap-2">
              <div className="bg-lime-400 w-10 h-10 rounded-md animate-pulse" />
              <div className="flex-1 flex flex-col gap-1">
                <div className="bg-lime-300 h-6 w-full rounded-md animate-pulse" />
                <div className="bg-pink-400 h-4 w-full rounded-md animate-pulse" />
              </div>
              <div className="bg-lime-400 w-20 h-6 rounded-md animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  