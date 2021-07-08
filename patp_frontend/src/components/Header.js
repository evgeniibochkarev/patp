import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';



const MainMenu = props =>  {
  return (
    <div className="collapse navbar-collapse" >
      <ul className="navbar-nav mr-auto" id="navbarSupportedContent">

        <li className="nav-item">
          <Link to="/" className="nav-link">
          Транспорт
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
          Места
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
          Расписание
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
          Купить билеты
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
          Услуги ПАТП
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
          Новости
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
          Пассажирам
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
          Контакты
          </Link>
        </li>
        

      </ul>
    </div>

  );
}


const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      
        <div className="d-flex direction-row align-items-baseline">

          
          <div>
            <div className="search">
                <input type="text" placeholder=" " />
                <div>
                    <svg>
                        <use xlinkHref="#path" />
                    </svg>
                </div>
            </div>
    
            <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 28" id="path">
                    <path d="M32.9418651,-20.6880772 C37.9418651,-20.6880772 40.9418651,-16.6880772 40.9418651,-12.6880772 C40.9418651,-8.68807717 37.9418651,-4.68807717 32.9418651,-4.68807717 C27.9418651,-4.68807717 24.9418651,-8.68807717 24.9418651,-12.6880772 C24.9418651,-16.6880772 27.9418651,-20.6880772 32.9418651,-20.6880772 L32.9418651,-29.870624 C32.9418651,-30.3676803 33.3448089,-30.770624 33.8418651,-30.770624 C34.08056,-30.770624 34.3094785,-30.6758029 34.4782612,-30.5070201 L141.371843,76.386562" transform="translate(83.156854, 22.171573) rotate(-225.000000) translate(-83.156854, -22.171573)"></path>
                </symbol>
            </svg>
          </div>

          <div>
            <Link to="/login" className="nav-link">
              Войти
            </Link>
          </div>

          <div>
            <Link to="/account" className="nav-link">
              <img src="/assets/img/lk.svg" height="45px"/>
            </Link>
          </div>
        </div>
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <div class="d-flex direction-row align-items-baseline">

        <div>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </div>

        <div>
          <Link to="/editor" className="nav-link">
            <i className="ion-compose" />&nbsp;New Post
          </Link>
        </div>

        

        <div>
          <Link
            to={`/@${props.currentUser.username}`}
            className="nav-link"
          >
            <img src={props.currentUser.image} className="user-pic" alt="" />
            {props.currentUser.username}
          </Link>
        </div>

        <div>
          <Link to="/settings" className="nav-link">
              <img src="/assets/img/lk.svg" height="45px"/>
          </Link>
        </div>

      </div>
    );
  }

  return null;
};

@inject('userStore', 'commonStore')
@observer
class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        

          <Link to="/" className="navbar-brand">
            <img src="/assets/img/logo.svg" height="85px" />
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <MainMenu/>

          <LoggedOutView currentUser={this.props.userStore.currentUser} />

          <LoggedInView currentUser={this.props.userStore.currentUser} />
        
      </nav>
    );
  }
}

export default Header;
