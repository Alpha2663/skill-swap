import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate, Link, Navigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const { login, googleLogin } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    const password = e.target.password.value;

    try {
      await login(email, password);
      toast.success("Login successful!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error("Invalid credentials");
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      toast.success("Google login successful!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded-xl p-8 w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-yellow-600">Login</h2>

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border p-2 rounded"
        />

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

        <div className="flex justify-between text-sm">
          <Link
            to="/forgot-password"
            state={{ email }}
            className="text-yellow-600"
          >
            Forgot Password?
          </Link>
          <Link to="/signup" className="text-yellow-600">
            Create Account
          </Link>
        </div>

        <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">
          Login
        </button>

        <button
          type="button"
          onClick={handleGoogle}
          className="justify-center items-center flex gap-2 w-full border py-2 rounded hover:bg-gray-50"
        >
         <span className=" "><FcGoogle /></span> Continue with Google
        </button>
      </form>
    </div>
  );
}
