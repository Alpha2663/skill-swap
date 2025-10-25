import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

export default function Profile() {
  const { user } = useContext(AuthContext);

  if (user === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">
          You’re not logged in 😕
        </h2>
        <Link
          to="/login"
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gray-50 min-h-screen">
      <img
        src={user.photoURL || "https://i.ibb.co/2P2Q0Pn/avatar.png"}
        alt="User avatar"
        className="w-28 h-28 rounded-full border-4 border-yellow-400 mb-4 object-cover"
      />
      <h2 className="text-2xl font-bold text-gray-800">
        {user.displayName || "Anonymous User"}
      </h2>
      <p className="text-gray-700 mb-6">{user.email}</p>

      <Link
        to="/update-profile"
        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
      >
        Update Profile
      </Link>
    </div>
  );
}
