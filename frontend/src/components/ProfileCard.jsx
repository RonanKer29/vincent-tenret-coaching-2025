import { CheckCircle } from "lucide-react";

const ProfileCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="p-6 transition-transform bg-white border border-gray-200 shadow-md rounded-xl ">
      <div className="mb-4 text-center">
        <div className="flex justify-center">
          <Icon className="w-14 h-14 text-blue-9" />
        </div>

        <h3 className="mt-4 text-2xl font-bold text-gray-900 uppercase">
          {title}
        </h3>

        <ul className="mt-4 space-y-2 text-left">
          {description.map((desc, index) => (
            <li key={index} className="flex items-start space-x-2">
              <CheckCircle className="flex-shrink-0 w-5 h-5 mt-1 text-blue-10" />
              <span className="flex-1 leading-relaxed text-gray-700">
                {desc}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
