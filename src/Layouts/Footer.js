import "./footer.styles.scss";

function Footer() {
  return (
    <section>
      <div className="footer">
        <p>
          © {new Date().getFullYear()} Built and designed by
          <a href="http://www.artemtrehub.com" target="_blank" rel="noreferrer">
            {" "}
            Artem Trehub
          </a>
        </p>
      </div>
    </section>
  );
}

export default Footer;
