import React from 'react';
import PropTypes from 'prop-types'



export default function Navbar(props) {

  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.about}
              </a>
            </li>
          </ul> 
        </div>
          {/* <button type="button"onClick={()=>props.changehandle("#042743")} class="btn btn-primary"></button>
          <button type="button"onClick={()=>props.changehandle("green") }class="btn btn-success"></button>
          <button type="button"onClick={()=>props.changehandle("red") }class="btn btn-danger"></button>
          <button type="button" onClick={()=>props.changehandle("white")}class="btn btn-light"></button>
          <button type="button"onClick={()=>props.changehandle("grey") }class="btn btn-dark"></button>  */}

         <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="SwitchCheckDefault">Enable Dark Mode</label>
</div>
      </div>
    </nav>

  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: 'Set title here',
  about: 'About',
};
