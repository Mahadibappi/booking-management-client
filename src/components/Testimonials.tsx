import React from "react";
import peson1 from "../assets/person1.jpg";
import peson2 from "../assets/person2.jpg";
import peson3 from "../assets/person3.jpg";
import peson4 from "../assets/person4.jpg";
const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Klaudia Byrt",
      role: "CEO & co-founder @mp fizjo",
      image: peson1,
      feedback:
        "Timerise is a trustworthy partner for our marketplace with health-related services for corporate employees. The system flexibility, team’s competencies, and support allowed us to deliver on time, despite very tight deadlines.",
      rating: 5,
    },
    {
      name: "Adrianna Stryjewska",
      role: "HR Business Partner @ Callstack",
      image: peson2,
      feedback:
        "Collaboration with Timerise to implement a custom booking system was outstanding. Their expertise and assistance during the process were superb. I highly recommend Timerise for anyone seeking reliable booking software.",
      rating: 5,
    },
    {
      name: "Łukasz Osiadły",
      role: "Process Leader @ RST Software Masters",
      image: peson3,
      feedback:
        "The project required a quick implementation of a complete booking system. API and frontend were used. We are very pleased with both the product’s capabilities and the commitment of the team. Great software, great teamwork!",
      rating: 5,
    },
    {
      name: "Agnieszka Jawińska",
      role: "Social Media & Community Lead @ Text",
      image: peson4,
      feedback:
        "I highly recommend their exceptional cooperation, and strict specialization in custom booking systems. With their expertise and tailored solution, they are the perfect choice for projects requiring a robust and user-friendly system.",
      rating: 5,
    },
  ];

  return (
    <div className="p-20 bg-white">
      <h2 className="text-center text-3xl font-serif font-semibold mt-6">
        Our Customers say
      </h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
          >
            <img
              className="w-24 h-24 rounded-full mb-4"
              src={testimonial.image}
              alt={testimonial.name}
            />
            <p className="text-gray-700 mb-4">{testimonial.feedback}</p>
            <div className="text-yellow-500 mb-2">
              {"★".repeat(testimonial.rating)}
            </div>
            <p className="text-gray-900 font-semibold">{testimonial.name}</p>
            <p className="text-gray-600 text-sm">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
