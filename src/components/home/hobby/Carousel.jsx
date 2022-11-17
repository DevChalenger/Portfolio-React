const Carousel = ({ data }) => {
  return (
    <article className="app-home-hobby-caroussel">
      {data.data.map((hobby, index) => (
        <div className="app-home-hobby" key={index}></div>
      ))}
    </article>
  );
};

export default Carousel;
