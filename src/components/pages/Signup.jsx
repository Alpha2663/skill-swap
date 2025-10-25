
import { useContext, useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


export default function Signup() {
  const { signup, googleLogin, updateUserProfile } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    // ✅ Password validation
    if (!/(?=.*[A-Z])/.test(password))
      return toast.error("Password must have an uppercase letter!");
    if (!/(?=.*[a-z])/.test(password))
      return toast.error("Password must have a lowercase letter!");
    if (password.length < 6)
      return toast.error("Password must be at least 6 characters long!");

    try {
      const result = await signup(email, password);
      await updateUserProfile(name, photo);
      toast.success("Signup successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      toast.success("Google login successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSignup}
        className="bg-white shadow-md rounded-xl p-8 w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-yellow-600">Create Account</h2>

        <input name="name" placeholder="Full Name" required className="w-full border p-2 rounded" />
        <input name="email" type="email" placeholder="Email" required className="w-full border p-2 rounded" />
        <input name="photo" placeholder="Photo URL" className="w-full border p-2 rounded" />

        <div className="relative">
          <input
            name="password"
            type={showPass ? "text" : "password"}
            placeholder="Password"
            required
            className="w-full border p-2 rounded"
          />
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute right-3 top-3 text-gray-500"
          >
            {showPass ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>

        <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">
          Register
        </button>

        <button
          type="button"
          onClick={handleGoogle}
          className="justify-center items-center flex gap-2 w-full border py-2 rounded hover:bg-gray-50"
        >
         <span><FcGoogle /></span> Continue with Google
        </button>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-yellow-600 font-semibold">
            Login
          </Link>
        </p>
      </form>.....
    </div>
  );
}
