import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a href="!#" className="navbar-brand">Go REST</a>
        <div className="navbar-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/posts" className="nav-link">Users Post</Link>
          <a href="!#" className="nav-link">Create Account</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
