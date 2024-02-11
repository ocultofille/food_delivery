const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-warning">
      <div className="container-fluid">
        <a className="navbar-brand" href="#)">Logo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="mynavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#)">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#)">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#)">Contact</a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>

  );
}
export default Header;