import React from 'react'
import { Link } from 'react-router-dom'
function Slider() {
  return <> <nav className="navbar navbar-inverse visible-xs ">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link to='/notes'>
          <a className="navbar-brand ">Notes App</a>
        </Link>
      </div>
      <div className="collapse navbar-collapse " id="myNavbar">
        <ul className="nav navbar-nav">
          <li className=""><a href="#"><i className="fa-solid fa-file-lines"></i>Notes</a></li>

        </ul>
      </div>
    </div>
  </nav>



    <div className="col-sm-3 totalslider sidenav hidden-xs">

      <h4 >Notes App</h4>
      <Link to='/notes'>
        <ul className="nav nav-pills nav-stacked nav-ul">

          <li className="sliderbtn"><a><i className="fa-solid fa-file-lines"></i>Notes</a></li>

        </ul>
        </Link>
        <br />
      
    </div>


  </>


}

export default Slider