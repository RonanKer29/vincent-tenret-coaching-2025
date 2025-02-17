const TestimonialCard = ({ user }) => {
  return (
    <div className="h-full p-6 mb-2 rounded-lg bg-blue-2 ">
      <div className="mb-4 text-center">
        <span className="block my-2 text-xl font-bold uppercase text-blue-12">
          {user.title}
        </span>
        <span className="block my-2 text-lg font-semibold text-blue-9">
          {user.boost}
        </span>
        <p className="mt-4 text-base leading-relaxed text-blue-12">
          {user.description}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
