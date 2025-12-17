import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "../hooks/useForm";
import SocialLoginButton from "../components/General/SocialLoginButton";

interface RegisterForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const navigate = useNavigate();
  const { register, loginWithGoogle } = useAuth();

  const { values, errors, setErrors, handleChange } = useForm<RegisterForm>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (values.password.length < 6) {
      setErrors({ password: "Password must be at least 6 characters" });
      return;
    }

    if (values.password !== values.confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match" });
      return;
    }

    try {
      register(values.username, values.email, values.password);
      navigate("/");
    } catch {
      setErrors({ email: "User already exists" });
    }
  };

  const handleGoogleRegister = () => {
    loginWithGoogle();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 dark:text-white">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <div>
          <h2 className="text-3xl font-bold text-center">Create Account</h2>
          <p className="mt-2 text-center text-gray-600">
            Or{" "}
            <Link to="/login" className="text-blue-600 hover:text-blue-500">
              sign in to existing account
            </Link>
          </p>
        </div>

        <SocialLoginButton provider="google" onClick={handleGoogleRegister} />

        <div className="text-center text-gray-500">or</div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={values.username}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

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
            placeholder="Password (min 6 characters)"
            value={values.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={values.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          {Object.values(errors).map(
            (error) =>
              error && (
                <div key={error} className="text-red-500 text-sm">
                  {error}
                </div>
              )
          )}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
