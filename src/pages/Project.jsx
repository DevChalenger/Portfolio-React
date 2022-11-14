import { useEffect, useState } from "react";
import HeaderMain from "../components/HeaderMain";

import Loader from "../components/Loader";
import ArticleProject from "../components/project/ArticleProject";
import SearchProject from "../components/project/SearchProject";

import fetchAllProject from "../services/project/all.project";

import "../styles/css/pages/project.css";
import TitlePage from "../utils/TitlePage";

import "aos/dist/aos.css";

const Project = () => {
  const [data, setData] = useState();
  const [initData, setInitData] = useState();

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
      <TitlePage title={"Projects"} />
      <HeaderMain Title={"Projects"} />
      <SearchProject setData={setData} initData={initData} />

      <section className="app-project-section">
        {data.length ? (
          data
            .sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt))
            .map((element, index) => (
              <ArticleProject data={element} key={index} />
            ))
        ) : (
          <div>project not found</div>
        )}
      </section>
    </main>
  ) : (
    <Loader type={"projects"} />
  );
};

export default Project;
