import React from 'react'

export default function Navbar(props) {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
    {/* search & login button */}
    <form className="d-flex float-left" role="search">
    <input type="text" class="form-control " placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>

      <button className="btn btn-outline-success float-end m-2"
               type="submit"
               id="search"
      >Search</button>

    </form>
  </div>
</nav>
  
  )
}
