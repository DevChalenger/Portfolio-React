import { ReactComponent as ZoomOff } from "../../assets/SVG/zoom-off.svg";

const LightBoxProject = ({ lightBox, setLightBox }) => {
  return (
    <div className="app-project-light-box-container">
      <img
        src={require(`../../assets/project/${lightBox.picture}.png`)}
        alt={lightBox.picture}
        className="app-project-light-box-picture"
      />
      <ZoomOff
        className="app-project-light-box-zoom-off"
        onClick={() => setLightBox({ isOpen: false, picture: undefined })}
      />
    </div>
  );
};

export default LightBoxProject;
