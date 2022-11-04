const Loader = ({ type }) => {
  return (
    <div className="app-loader-container">
      <div className="app-loader-spinner"></div>
      <span>Loading of {type}</span>
    </div>
  );
};

export default Loader;
