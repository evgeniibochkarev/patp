import ServicesPreview from './ServicesPreview';
import LoadingSpinner from './LoadingSpinner';
import React from 'react';

const ServicesList = props => {
  
  if (props.loading && props.services.length === 0) {
    return (
      
      <LoadingSpinner />
    );
  }
 
  if (props.services.length === 0) {
    return (
      <div className="container">
        <p>Пока нет ни одной услуги</p>
      </div>
    );
  }
  
  return (
    
    <div className="row ">
      {
        props.services.map(services => {
          
          
          return (
            <ServicesPreview key={services.slug} services={services} col={props.col} />
          );
        })
      }

    </div>
  );
};

export default ServicesList;
