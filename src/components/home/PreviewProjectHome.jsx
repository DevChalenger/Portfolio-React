import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Programming } from "../../assets/home/programming.svg";
import { selectProject } from "../../redux/selector";
import Loader from "../Loader";
import ArticleProject from "../project/ArticleProject";

const PreviewProjectHome = () => {
  const { data, status } = useSelector(selectProject);
  const navigate = useNavigate();

  return (
    <section className="app-home-section">
      <header className="app-home-section-header">
        <h2 className="app-home-section-title">Here is my recent Project</h2>
        <Programming className="app-home-section-header-icon" />
      </header>

      <section className="app-home-project-section-container">
        {status === "resolved" ? (
          data
            .slice(0, 3)
            .map((project, index) => (
              <ArticleProject data={project} key={index} />
            ))
        ) : (
          <Loader type={"projects"} />
        )}
      </section>
      <aside
        className="app-home-project-link-more"
        onClick={() => navigate("/project")}
      >
        See more project
      </aside>
    </section>
  );
};

export default PreviewProjectHome;
