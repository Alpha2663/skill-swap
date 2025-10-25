import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

export default function ForgotPassword() {
  const { forgotPassword } = useContext(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      toast.success("Reset link sent to your email!");
      setTimeout(() => (window.location.href = ""), 1500);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleReset}
        className="bg-white shadow-md rounded-xl p-8 w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-yellow-600">Reset Password</h2>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border p-2 rounded"
        />
        <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">
          Reset Password
        </button>
      </form>
    </div>
  );
}
