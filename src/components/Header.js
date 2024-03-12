const Header = () => {
  return (
    
    <nav className="navbar navbar-expand-sm navbar-light p-3 sticky-top "  style={{ background:"white",boxShadow:" 0px 12px 12px -15px rgba(0,0,0,0.2)"}}>
      <div className="container px-5">
        <a className="navbar-brand" href="#)">Logo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end " id="mynavbar">
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