import { CheckCircle } from "lucide-react";

const ProfileCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <div className="mb-4 text-center">
        <div className="flex justify-center">
          <Icon className="w-16 h-16 text-gray-500" />
        </div>

        <span className="text-2xl text-center font-extrabold block my-4 text-gray-500 uppercase">
          {title}
        </span>

        <ul className="text-left space-y-2">
          {description.map((desc, index) => (
            <li key={index} className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 mt-1 text-brand flex-shrink-0 " />
              <span className="flex-1">{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
