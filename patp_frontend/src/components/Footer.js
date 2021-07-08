import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';



@inject('userStore', 'commonStore')
@observer
class Footer extends React.Component {
  render() {
    return (
        <div className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md text-center">
            <img className="mb-2" src="/assets/img/logo.svg" alt="" width="100px" />
            <small className="d-block mb-3 text-muted">© 2002–2021</small>
          </div>
          <div className="col-8 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Cool stuff</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Random feature</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team feature</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Stuff for developers</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Another one</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Last time</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resource</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resource name</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Another resource</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Final resource</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Locations</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Privacy</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;


