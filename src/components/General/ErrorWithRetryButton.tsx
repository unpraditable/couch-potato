interface ErrorWithRetryButtonProps {
  error: string;
  onRetry: () => void;
}

const ErrorWithRetryButton: React.FC<ErrorWithRetryButtonProps> = ({
  error,
  onRetry,
}) => (
  <div className="text-center py-8">
    <p className="text-red-500 dark:text-red-400">{error}</p>
    <button
      onClick={onRetry}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
    >
      Retry
    </button>
  </div>
);

export default ErrorWithRetryButton;
