const Loader = ({ type }) => {
  return (
    <div className="app-loader-container">
      <div className="app-loader-animation">
        <div className="app-loader-animation-dot" />
        <div className="app-loader-animation-dot" />
        <div className="app-loader-animation-dot" />
        <div className="app-loader-animation-dot" />
        <div className="app-loader-animation-dot" />
        <div className="app-loader-animation-dot" />
        <div className="app-loader-animation-dot" />
        <div className="app-loader-animation-dot" />
        <div className="app-loader-animation-dot" />
        <div className="app-loader-animation-dot" />
        <div className="app-loader-animation-dot" />
        <div className="app-loader-animation-dot" />
      </div>
      <span>Loading of {type}</span>
    </div>
  );
};

export default Loader;
