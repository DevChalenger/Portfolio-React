import { Link } from "react-router-dom";

import { ReactComponent as Download } from "../../../assets/home/resume/download-resume.svg";

const LinkPDF = ({ langue }) => {
  return (
    <Link
      className="app-home-resume-download"
      download
      target={"_blank"}
      to={require(`../../../assets/home/resume/Ilyas-Boukhechem_Software-React-Developer-${langue}-Resume.pdf`)}
    >
      <Download className="app-home-resume-download-icon" />
      Download in {langue}
    </Link>
  );
};

export default LinkPDF;
