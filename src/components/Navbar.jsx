import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

const Navbar = (props) => {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    }
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${navBackground ? 'bg-dark navbar-dark' : 'bg-trasparent navbar-dark'} `} style={{ transition: '1s ease'}}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Go_Logo_Aqua.svg/1200px-Go_Logo_Aqua.svg.png" alt="" height="24" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto py-4 py-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link px-lg-3 py-3 py-lg-4">Users</Link>
            </li>
            <li className="nav-item">
              <Link to="/posts" className="nav-link px-lg-3 py-3 py-lg-4">Posts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-lg-3 py-3 py-lg-4" to='/users/register'>Create User</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-lg-3 py-3 py-lg-4" to='/posts/create'>Create Post</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
