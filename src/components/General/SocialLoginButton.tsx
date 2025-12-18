import GoogleIcon from "./GoogleIcon";

interface SocialLoginButtonProps {
  provider: "google";
  onClick: () => void;
  isLoading?: boolean;
}

const SocialLoginButton = ({
  provider,
  onClick,
  isLoading,
}: SocialLoginButtonProps) => {
  const providers = {
    google: {
      text: "Continue with Google",
      bgColor: "bg-white",
      textColor: "text-gray-700",
      borderColor: "border-gray-300",
      icon: <GoogleIcon />,
    },
  };

  const config = providers[provider];

  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`bg-white text-gray-700 border-gray-300 w-full py-3 px-4 rounded-lg border flex items-center justify-center hover:shadow-md transition-shadow disabled:opacity-50`}
    >
      {config.icon}
      <span className="font-medium">Continue With Google</span>
    </button>
  );
};

export default SocialLoginButton;
