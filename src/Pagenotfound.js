// import "./Pagenotfound";
const Pagenotfound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p style={{ marginBottom: "35px" }}>
        The page you are looking for does not exist.
      </p>
      <a href="/" className="nonFound">
        Go to Home
      </a>
    </div>
  );
};

export default Pagenotfound;
