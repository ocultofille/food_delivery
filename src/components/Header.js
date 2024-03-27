import { Link } from "react-router-dom";
const Header = () => {
  return (
    
    <nav className="navbar navbar-expand-sm navbar-light p-3 sticky-top "  style={{ background:"white",boxShadow:" 0px 12px 12px -15px rgba(0,0,0,0.2)"}}>
      <div className="container px-5">
        <Link className="navbar-brand" to="/">Logo</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end " id="mynavbar">
          <ul className="navbar-nav gap-4">
            <li className="nav-item"  >
              <Link className=" headLink  " style={{textDecoration:"none"}} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className=" headLink " style={{textDecoration:"none"}} to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className=" headLink " style={{textDecoration:"none"}} to="/contact">Contact</Link>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>

  );
}
export default Header;