import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">Go REST</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav justify-content-end me-auto mb-2 mb-lg-0">
            <Link to="/" className="nav-link">Users</Link>
            <Link to="/posts" className="nav-link">Posts</Link>
            <a href="!#" className="nav-link">Create Account</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
