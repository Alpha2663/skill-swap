import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function UpdateProfile() {
  const { user, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [preview, setPreview] = useState(user?.photoURL || "");

  const handlePhotoChange = (e) => {
    const url = e.target.value;
    setPhoto(url);
    if (url.startsWith("http")) {
      setPreview(url);
    } else {
      setPreview("");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!name.trim() || !photo.trim()) {
      toast.error("Please enter both name and photo URL.");
      return;
    }

    try {
      await updateUserProfile(name, photo);
      toast.success("Profile updated successfully!");
      navigate("/profile");
    } catch (error) {
      toast.error("Error updating profile: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <form
        onSubmit={handleUpdate}
        className="bg-white shadow-md rounded-xl p-8 w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-yellow-600">
          Update Profile
        </h2>

        {preview ? (
          <div className="flex justify-center">
            <img
              src={preview}
              alt="Preview"
              className="w-24 h-24 rounded-full object-cover border-2 border-yellow-400"
            />
          </div>
        ) : (
          <div className="text-center text-gray-400 italic">
            Enter a valid image URL to preview
          </div>
        )}

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Display Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Photo URL
          </label>
          <input
            type="url"
            value={photo}
            onChange={handlePhotoChange}
            className="w-full border p-2 rounded focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter photo URL"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
        >
          Update
        </button>
      </form>
    </div>
  );
}
