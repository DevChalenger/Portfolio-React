const SearchProject = ({ setData, initData }) => {
  const handleChange = (e) => {
    const eventTarget = e.target.value;
    const search = initData.filter((project) =>
      project._title.toLowerCase().includes(eventTarget.toLowerCase())
    );
    eventTarget.length > 0 ? setData(search) : setData(initData);
  };

  return (
    <div className="app-search-project-container">
      <label
        htmlFor="app-search-project-input"
        className="app-search-project-label"
      >
        Search project :
      </label>
      <input
        className="app-search-project-input"
        id="app-search-project-input"
        type="text"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default SearchProject;
