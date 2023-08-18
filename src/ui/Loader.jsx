const Loader = () => {
  return (
    /* /20 = opacity */
    <div className="absolute inset-0 flex items-center justify-center bg-stone-200/20 backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
