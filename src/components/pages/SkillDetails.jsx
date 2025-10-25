import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function SkillDetails() {
  const { skillId } = useParams();
  const [skill, setSkill] = useState(null);

  useEffect(() => {
    fetch("/data/skills.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.skillId === parseInt(skillId));
        setSkill(found);
      });
  }, [skillId]);

  if (!skill)
    return <p className="text-center mt-20 text-gray-600">Loading...</p>;

  const handleBooking = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully!");
    e.target.reset();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md mt-10 rounded-xl">
      <img
        src={skill.image}
        alt={skill.skillName}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h2 className="text-3xl font-bold mt-4">{skill.skillName}</h2>
      <p className="text-gray-600 mt-2">{skill.description}</p>

      <div className="mt-4 space-y-1 text-gray-700">
        <p><strong>Provider:</strong> {skill.providerName}</p>
        <p><strong>Email:</strong> {skill.providerEmail}</p>
        <p><strong>Category:</strong> {skill.category}</p>
        <p><strong>Price:</strong> ${skill.price}</p>
        <p><strong>Rating:</strong> ⭐ {skill.rating}</p>
        <p><strong>Slots:</strong> {skill.slotsAvailable}</p>
      </div>

      <form onSubmit={handleBooking} className="mt-6 space-y-3">
        <h3 className="text-xl font-semibold">Book Session</h3>
        <input
          name="name"
          placeholder="Your Name"
          required
          className="w-full border p-2 rounded"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="w-full border p-2 rounded"
        />
        <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
          Submit
        </button>
      </form>
    </div>
  );
}
