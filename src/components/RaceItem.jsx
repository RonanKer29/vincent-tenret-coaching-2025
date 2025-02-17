import { Mountain, MapPin, Timer } from "lucide-react";

const RaceItem = ({ title, year, distance, elevation }) => {
  return (
    <div className="p-6 transition-transform bg-white border border-gray-200 shadow-md rounded-xl">
      <h3 className="flex items-center space-x-2 text-lg font-semibold text-gray-900">
        <MapPin className="w-5 h-5 text-blue-9" />
        <span>{title}</span>
      </h3>
      <div className="flex flex-wrap gap-3 mt-3 text-gray-700">
        <span className="flex items-center px-3 py-1 space-x-1 text-sm font-medium bg-gray-200 rounded-lg">
          <Timer className="w-4 h-4 text-gray-600" />
          <span>{year}</span>
        </span>
        <span className="flex items-center px-3 py-1 space-x-1 text-sm font-medium bg-gray-200 rounded-lg">
          <Mountain className="w-4 h-4 text-gray-600" />
          <span>{distance}</span>
        </span>
        <span className="flex items-center px-3 py-1 space-x-1 text-sm font-medium bg-gray-200 rounded-lg">
          <Mountain className="w-4 h-4 text-gray-600" />
          <span>{elevation}</span>
        </span>
      </div>
    </div>
  );
};

export default RaceItem;
