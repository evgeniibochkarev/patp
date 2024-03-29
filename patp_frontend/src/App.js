import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";
import PrivateRoute from "components/PrivateRoute";

import Login from "pages/Login";
import Home from "pages/Home";
import Register from "pages/Register";
import Article from "pages/Article";
import Editor from "pages/Editor";
import Profile from "pages/Profile";
import Settings from "pages/Settings";
import Service from "pages/Service";
import ServiceList from "pages/Service/ServiceList";
import News from "pages/News";

@inject("userStore", "commonStore")
@withRouter
@observer
export default class App extends React.Component {
  componentWillMount() {
    if (!this.props.commonStore.token) {
      this.props.commonStore.setAppLoaded();
    }
  }

  componentDidMount() {
    
    if (this.props.commonStore.token) {
      this.props.userStore
        .pullUser()
        .finally(() => this.props.commonStore.setAppLoaded());
    }
  }

  render() {
    if (this.props.commonStore.appLoaded) {
      return (
        <div>
          <Header />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/editor/:slug?" component={Editor} />
            <Route path="/article/:id" component={Article} />
            <Route path="/service/:id" component={Service} />
            <Route path="/service/" component={ServiceList} />
            <Route path="/news/:id" component={News} />
           
            <PrivateRoute path="/settings" component={Settings} />
            <Route path="/@:username" component={Profile} />
            <Route path="/@:username/favorites" component={Profile} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      );
    }
    return <Header />;
  }
}
