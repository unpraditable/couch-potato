import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "../hooks/useForm";
import SocialLoginButton from "../components/General/SocialLoginButton";

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const { login, loginWithGoogle } = useAuth();

  const { values, errors, setErrors, handleChange } = useForm<LoginForm>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      login({ email: values.email, password: values.password });
      navigate("/");
    } catch {
      setErrors({ email: "Invalid email or password" });
    }
  };

  const handleGoogleLogin = () => {
    loginWithGoogle();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 dark:text-white">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <div>
          <h2 className="text-3xl font-bold text-center">Sign In</h2>
          <p className="mt-2 text-center text-gray-600">
            Or{" "}
            <Link to="/register" className="text-blue-600 hover:text-blue-500">
              create an account
            </Link>
          </p>
        </div>

        <SocialLoginButton provider="google" onClick={handleGoogleLogin} />

        <div className="text-center text-gray-500">or</div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          {errors.email && (
            <div className="text-red-500 text-sm">{errors.email}</div>
          )}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
