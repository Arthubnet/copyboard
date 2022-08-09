import "./footer.styles.scss";

function Footer() {
  return (
    <div className="footer">
      <p>
        © {new Date().getFullYear()} Built and designed by
        <a
          href="https://www.linkedin.com/in/artem-trehub/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Artem Trehub
        </a>
      </p>
    </div>
  );
}

export default Footer;
