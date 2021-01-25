import {  Link } from "react-router-dom";

function MainNav () {
  return (
    <nav className="main-nav d-flex justify-content-between fixed-bottom w-100">
      <Link to="/home" className="nav-item icon-home active"></Link>
      <Link to="/details" className="nav-item icon-money-bag"></Link>
      <Link className="nav-item icon-credit-card"></Link>
      <Link className="nav-item icon-star"></Link>
      <Link className="nav-item icon-bell"></Link>
    </nav>
  )
}

export default MainNav