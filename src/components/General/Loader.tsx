const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={
          "w-8 h-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
        }
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
