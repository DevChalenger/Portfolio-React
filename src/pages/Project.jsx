import { useEffect, useState } from "react";
import HeaderMain from "../components/HeaderMain";

import Loader from "../components/Loader";
import ArticleProject from "../components/project/ArticleProject";
import SearchProject from "../components/project/SearchProject";

import "../styles/css/pages/project.css";
import TitlePage from "../utils/TitlePage";

import { useDispatch, useSelector } from "react-redux";
import { selectProject } from "../redux/selector";
import { loadProject } from "../redux/features/actions/project";

const Project = () => {
  const [dataProject, setDataProject] = useState([]);
  const [initData, setInitData] = useState();
  const [limit, setLimit] = useState(2);

  const dispatch = useDispatch();

  const { data, loading } = useSelector(selectProject);

  useEffect(() => {
    const getProject = async () => {
      dispatch(loadProject());
      setDataProject(data);
    };

    getProject();
  }, [dispatch]);

  return data && loading === false ? (
    <main className="app-main-container app-project-main">
      <TitlePage title={"Projects"} />
      <HeaderMain Title={"Projects"} />
      <SearchProject setData={dataProject} initData={initData} />

      <section className="app-project-section">
        {data && loading === false
          ? dataProject.map((element, index) => (
              <ArticleProject data={element} key={index} />
            ))
          : ""}
      </section>
    </main>
  ) : (
    <Loader type={"projects"} />
  );
};

export default Project;
