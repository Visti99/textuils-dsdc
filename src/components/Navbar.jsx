import React from 'react'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
      <a className="navbar-brand" href="/">{props.tittle}</a>
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
            <a className="nav-link" href="/">{props.about}</a>
          </li>
          <li className="nav-item text-lightbg-dark ">
            <a className="nav-link" href="/">Link</a>
          </li>
        </ul>

  {/* text-black */}
        <div className={`form-check form-switch text-${props.mode === 'dark' ? 'white' : 'black'}`}>
          <input onClick={props.handleMode} className="form-check-input bg-info" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
        </div>
      </div>
    </nav>

  )
}
