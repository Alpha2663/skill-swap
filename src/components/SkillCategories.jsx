import React, { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider"; 
import { useNavigate } from "react-router-dom"; 
import toast from "react-hot-toast"; 
import { IoCloseCircleSharp } from "react-icons/io5";

export default function SkillCategories() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const { user } = useContext(AuthContext); 
  const navigate = useNavigate();

  const skills = [
    {
      skillId: 1,
      skillName: "Beginner Guitar Lessons",
      providerName: "Alex Martin",
      providerEmail: "alex@skillswap.com",
      price: 20,
      rating: 4.8,
      slotsAvailable: 3,
      description: "Acoustic guitar classes for complete beginners.",
      image: "../../public/guitar-class.jpg",
      category: "Music",
    },
    {
      skillId: 2,
      skillName: "Spoken English Practice",
      providerName: "Sara Hossain",
      providerEmail: "sara@skillswap.com",
      price: 10,
      rating: 4.6,
      slotsAvailable: 5,
      description: "Conversational English sessions for non-natives.",
      image: "../../public/english.jpg",
      category: "Language",
    },
    {
      skillId: 3,
      skillName: "Yoga for Beginners",
      providerName: "Anita Das",
      providerEmail: "anita@skillswap.com",
      price: 15,
      rating: 4.9,
      slotsAvailable: 4,
      description:
        "Relaxing and guided yoga sessions suitable for all ages.",
      image: "../../public/yoga.jpg",
      category: "Health",
    },
    {
      skillId: 4,
      skillName: "Web Development Basics",
      providerName: "Rahul Dev",
      providerEmail: "rahul@skillswap.com",
      price: 25,
      rating: 4.7,
      slotsAvailable: 2,
      description: "Learn HTML, CSS, and JavaScript step-by-step.",
      image: "../../public/wd.avif",
      category: "Technology",
    },
    {
      skillId: 5,
      skillName: "Photography Essentials",
      providerName: "Nadia Rahman",
      providerEmail: "nadia@skillswap.com",
      price: 30,
      rating: 4.8,
      slotsAvailable: 1,
      description: "Learn lighting, composition, and editing like a pro.",
      image: "../../public/pg.jpg",
      category: "Creative",
    },
    {
      skillId: 6,
      skillName: "Cooking Bangladeshi Dishes",
      providerName: "Tanvir Hasan",
      providerEmail: "tanvir@skillswap.com",
      price: 12,
      rating: 4.5,
      slotsAvailable: 6,
      description: "Cook authentic Bangladeshi meals easily at home.",
      image: "../../public/cooking.jpg",
      category: "Food",
    },
  ];

 
  const handleBookSession = () => {
    if (!user) {
      toast.error("Please log in to book a session!");
      navigate("/login");
      return;
    }

    
    toast.success(`Session booked successfully for ${user.displayName || user.email}`);
    setSelectedSkill(null);
  };

  return (
    <div className="px-6 py-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Skill Categories
      </h1>

      <div className="bg-gray-100 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.skillId}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
          >
            <img
              src={skill.image}
              alt={skill.skillName}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {skill.skillName}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Provider:</span>{" "}
                {skill.providerName}
              </p>
              <p className="text-gray-600 text-sm mb-3">{skill.description}</p>

              <div className="flex justify-between items-center mb-4">
                <span className="text-blue-600 font-semibold">
                  ${skill.price}
                </span>
                <span className="text-yellow-500 font-semibold">
                  ⭐ {skill.rating}
                </span>
              </div>

              <div className="flex justify-between items-center text-sm text-gray-500">
                <p>Slots: {skill.slotsAvailable}</p>
                <p className="italic">{skill.category}</p>
              </div>

              <button
                onClick={() => setSelectedSkill(skill)}
                className="mt-4 inline-block w-full bg-blue-600 text-white text-center py-2 rounded-xl hover:bg-blue-700 transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

     
      {selectedSkill && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 ">
          <div className=" bg-gray-300 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-4 sm:p-6 md:p-8 w-full max-w sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto relative ">
            
            <button
              onClick={() => setSelectedSkill(null)}
              className=" absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl sm:text-2xl md:text-3xl font-bold p-1 sm:p-2"
            >
              <IoCloseCircleSharp />
            </button>
            <img
              src={selectedSkill.image}
              alt={selectedSkill.skillName}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />

            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              {selectedSkill.skillName}
            </h2>
            <p className="text-gray-600 mb-3">{selectedSkill.description}</p>

            <div className="space-y-1 text-gray-700">
              <p><strong>Provider:</strong> {selectedSkill.providerName}</p>
              <p><strong>Email:</strong> {selectedSkill.providerEmail}</p>
              <p><strong>Category:</strong> {selectedSkill.category}</p>
              <p><strong>Price:</strong> ${selectedSkill.price}</p>
              <p><strong>Rating:</strong> ⭐ {selectedSkill.rating}</p>
              <p><strong>Slots:</strong> {selectedSkill.slotsAvailable}</p>
            </div>

            <button
              onClick={handleBookSession}
              className="mt-5 bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition"
            >
              Book Session
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
