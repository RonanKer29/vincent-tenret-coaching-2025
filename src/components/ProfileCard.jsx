import { CheckCircle } from "lucide-react";

const ProfileCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="p-6 border rounded-lg shadow-lg bg-blue-2 border-blue-6">
      <div className="mb-4 text-center">
        <div className="flex justify-center">
          <Icon className="w-16 h-16 text-blue-9" />
        </div>

        <span className="block my-4 text-2xl font-extrabold text-center uppercase text-blue-12">
          {title}
        </span>

        <ul className="space-y-2 text-left">
          {description.map((desc, index) => (
            <li key={index} className="flex items-start space-x-2">
              <CheckCircle className="flex-shrink-0 w-5 h-5 mt-1 text-blue-10" />
              <span className="flex-1 text-blue-11">{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
