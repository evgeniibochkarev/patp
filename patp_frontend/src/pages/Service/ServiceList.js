import ServicesList from "components/ServicesList";
import React from "react";
import { inject, observer } from "mobx-react";
import { withRouter, NavLink } from "react-router-dom";





@inject("servicesStore")
@withRouter
@observer
export default class MainView extends React.Component {
  componentWillMount() {
    //this.props.articlesStore.setPredicate(this.getPredicate());
  }

  componentDidMount() {
    this.props.servicesStore.loadServices();
  }

  componentDidUpdate(previousProps) {
       
  }





  render() {
    
    
    const{
      services,
      isServicesLoading,
    } = this.props.servicesStore;

    console.log(services)
    return (
      
        
                    <ServicesList
                    services={services}
                    loading={isServicesLoading}
                    />

      
    );
  }
}
