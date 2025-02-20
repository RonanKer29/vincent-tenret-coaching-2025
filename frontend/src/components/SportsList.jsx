import { Badge } from "../components/ui/badge";

const sportsList = [
  "Trail",
  "Ski de randonnée",
  "Vélo de route",
  "Course à pied",
  "Natation",
];

const SportsSection = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-12">
      {sportsList.map((sport, index) => (
        <Badge
          key={index}
          className="px-4 py-2 text-lg text-gray-900 bg-gray-200 border border-gray-300 shadow-sm rounded-xl"
        >
          {sport}
        </Badge>
      ))}
    </div>
  );
};

export default SportsSection;
