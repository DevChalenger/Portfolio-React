import { ReactComponent as Hello } from "../../assets/home/hello.svg";

const IntroductionHome = () => {
  return (
    <section className="app-home-section app-home-section-introduction">
      <header className="app-home-section-header">
        <h2 className="app-home-section-title">Hi, i am Ilyas Boukhechem</h2>
        <Hello className="app-home-section-header-icon hello-animation" />
      </header>
      <p>
        I'm currently working in France and my current stack is{" "}
        <strong>React/Javascript</strong>
      </p>
    </section>
  );
};

export default IntroductionHome;
