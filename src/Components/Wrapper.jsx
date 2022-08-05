import "./wrapper.styles.scss";

function Wrapper({ id, title, children }) {
  return (
    <section id={id}>
      <div className="container">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default Wrapper;
