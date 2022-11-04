import { useEffect, useState } from "react";

import Loader from "../components/Loader";
import ArticleProject from "../components/project/ArticleProject";
import SearchProject from "../components/project/SearchProject";
import LightBoxProject from "../components/project/LightBoxProject";

import fetchAllProject from "../services/project/all.project";

import "../styles/css/pages/project.css";

const Project = () => {
  const [data, setData] = useState();
  const [initData, setInitData] = useState();

  const [lightBox, setLightBox] = useState({
    isOpen: false,
    picture: undefined,
  });

  useEffect(() => {
    const getProject = async () => {
      const project = await fetchAllProject();
      setData(project);
      setInitData(project);
    };
    getProject();
  }, []);

  return data ? (
    <main className="app-main-container app-project-main">
      <SearchProject setData={setData} initData={initData} />

      <section className="app-project-section">
        {data.length ? (
          data
            .sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt))
            .map((element, index) => (
              <ArticleProject
                data={element}
                key={index}
                setLightBox={setLightBox}
              />
            ))
        ) : (
          <div>project not found</div>
        )}
      </section>

      {lightBox.isOpen && lightBox.picture ? (
        <LightBoxProject lightBox={lightBox} setLightBox={setLightBox} />
      ) : (
        ""
      )}
    </main>
  ) : (
    <Loader type={"projects"} />
  );
};

export default Project;
