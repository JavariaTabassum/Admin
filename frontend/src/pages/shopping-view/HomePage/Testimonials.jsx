import { useState } from "react";
import TestimonialCard from "../../../components/shopping-view/Home/TestimonialCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    { name: "Sarah M.", feedback: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations." },
    { name: "Alex K.", feedback: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions." },
    { name: "James L.", feedback: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends." },
    { name: "Moeen L.", feedback: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends." },
    { name: "Sarah M.", feedback: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations." },
    { name: "Alex K.", feedback: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions." },
    { name: "James L.", feedback: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends." },
    { name: "Moeen L.", feedback: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="py-6 bg-gray-100 md:px-16 px-0 my-10">
      <div className="flex lg:justify-between justify-center items-center mb-6 md:px-0 px-16"><h2 className="md:text-5xl text-2xl font-bold font-integral text-center">OUR HAPPY CUSTOMERS</h2>
      <div className="lg:flex hidden justify-end mt-4">
          <button
            onClick={handlePrev}
            className="text-gray-900 p-2"
          >
            <FaArrowLeft className="text-3xl" />
          </button>
          <button
            onClick={handleNext}
            className="text-gray-900 p-2"
          >
            <FaArrowRight className="text-3xl" />
          </button>
        </div></div>
      <div className="relative max-w-full mx-auto">
        <div className="overflow-x-auto scroll-smooth no-scrollbar">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="md:min-w-80 min-w-72 gap-3 flex justify-center"
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
        <div className="lg:hidden flex justify-center mt-4">
          <button
            onClick={handlePrev}
            className="text-gray-900 p-2"
          >
            <FaArrowLeft className="text-xl" />
          </button>
          <button
            onClick={handleNext}
            className="text-gray-900 p-2"
          >
            <FaArrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
