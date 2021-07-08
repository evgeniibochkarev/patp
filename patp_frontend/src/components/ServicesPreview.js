import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';




@inject('servicesStore')
@observer
export default class ServicesPreview extends React.Component {

 

  render() {
    const services  = this.props.services;
    const col = this.props.col == undefined ? "2" : this.props.col; 

    const isScale = this.props.col == "1" ? 'services_scale' : ''; 
    const sizeText =  this.props.col == "1" ? {fontSize: ".6rem", fontWeight: "normal"} : {fontSize: ".8rem", fontWeight: "normal"};   
    return (
      
      <div className={`col-md-${col} mt-3 text-center ${isScale}`} >
        <Link to={`/service/${services.slug}/`} >
          <div>
            <img src={services.imageAnons} className="w-100 pb-2" />
            <p style={sizeText}>{services.title}</p>
          </div>
        </Link>
			</div>
      
    );
  }
}
