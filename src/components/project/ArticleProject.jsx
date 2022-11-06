import { ReactComponent as ZoomIn } from "../../assets/SVG/zoom-in.svg";

const ArticleProject = ({ data, setLightBox }) => {
  const today = new Date(data._createdAt)
    .toLocaleDateString("en-En")
    .slice(0, 10);

  return (
    <article className={"app-project-article"}>
      <div className="app-project-article-preview-container">
        <img
          className="app-project-article-preview"
          src={require(`../../assets/project/${data._preview}.png`)}
          alt={data._title.toLowerCase() + "-picture"}
        />
        <div className="app-project-article-preview-zoom-in-container">
          <ZoomIn
            className="app-project-article-preview-zoom-in-icon"
            onClick={() =>
              setLightBox({
                isOpen: true,
                picture: data._preview,
              })
            }
          />
        </div>
      </div>
      <div className="app-project-article-information">
        <header className="app-project-article-information-header">
          <h2 className="app-project-article-title">{data._title}</h2>
        </header>
        <p className="app-project-article-description">{data._description}</p>
        <p className="app-project-article-link-text">
          <a
            href={data._url}
            className="app-project-article-link"
            target="_blank"
            rel="noreferrer"
          >
            Link to the project
          </a>
        </p>
        <ul className="app-project-article-programming-language-list">
          {data._programmingLanguage.map((lang, index) => (
            <li
              key={index}
              className={`app-project-article-programming-language-item ${lang.toLowerCase()}`}
            >
              {lang}
            </li>
          ))}
        </ul>
        <p className="app-project-article-created-date">{today}</p>
      </div>
    </article>
  );
};

export default ArticleProject;
