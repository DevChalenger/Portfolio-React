import { Helmet } from "react-helmet-async";

const TitlePage = ({ title }) => {
  return (
    <Helmet>
      <title>DevChalenger - {title}</title>
    </Helmet>
  );
};

export default TitlePage;
