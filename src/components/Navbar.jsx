import React from 'react'
// import {
//   Link,
//  } from "react-router-dom";
 import img from './t.png';

export default function Navbar(props) {
  return (
    // <browserRouter>

    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
      <a className="navbar-brand" href="/"><img src={img} alt="" width="50" /></a>
      <button className="navbar-toggler" type="button"
              data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
  {/*lonk like home,about.etc*/}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">home</a>
          </li>
          {/* home button  */}
          {/* <li className="nav-item text-lightbg-dark ">
            <Link to className="nav-link" href="/home">{props.about}</Link>
          </li> */}
          {/* about us button */}
          {/* <li className="nav-item">
            <Link className="nav-link" to="/aboutus">{props.aboutText}</Link>
          </li> */}
          {/* Github button  */}
          {/* <li className="nav-item">
            <Link className="nav-link" to="/github">github</Link>
          </li> */}
        </ul>

  {/* text-black */}
        <div className={`form-check form-switch text-${props.mode === 'dark' ? 'white' : 'black'}`}>
          <input onClick={props.handleMode} className="form-check-input bg-info" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
        </div>
      </div>
    </nav>
    // </browserRouter>

  )
}
