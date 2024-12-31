// TestimonialCard.jsx
import { FaStar, FaCheckCircle } from "react-icons/fa";

const TestimonialCard = ({ name, feedback }) => {
  return (
    <div className="rounded-lg p-4 flex flex-col items-start">
      <div className="flex items-center mb-2">
        <div className="text-yellow-500 flex gap-2">
          {[...Array(5)].map((_, index) => (
            <FaStar key={`full-${index}`} className="text-yellow-500 text-xl" />
          ))}
        </div>
      </div>
      <div className="flex gap-2 items-center "><h4 className="font-bold align-middle text-base font-satoshi ">{name}</h4> <FaCheckCircle className="text-green-500" /></div>
      <p className="text-gray-700 font-satoshi font-normal sm:text-xs text-justify text-base">{feedback}</p>
    </div>
  );
};

export default TestimonialCard;

