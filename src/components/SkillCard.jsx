import { Link } from "react-router-dom";

export default function SkillCard({ skill }) {
  const { skillId, skillName, image, price, rating } = skill;

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
      <img src={image} alt={skillName} className="h-48 w-full object-cover" />..........
      <div className="p-4">
        <h3 className="text-lg font-bold">{skillName}</h3>
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>💰 ${price}</span>
          <span>⭐ {rating}</span>
        </div>
        <Link
          to={`/skill/${skillId}`}
          className="block bg-yellow-500 text-white text-center py-2 mt-4 rounded hover:bg-yellow-600"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
