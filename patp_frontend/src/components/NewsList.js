import NewsPreview from './NewsPreview';
import LoadingSpinner from './LoadingSpinner';
import React from 'react';


const NewsList = props => {

  if (props.loading && props.news.length === 0) {
    return (
      
        <LoadingSpinner />
      
    );
  }
 
  if (props.news.length === 0) {
    return (
      
        <span className="text-white">Пока нет ни одной новости</span>
      
    );
  }
  
  return (
    
    <div className="row ">
      {
        props.news.map(news => {
          
          
          return (
            <NewsPreview key={news.slug} news={news} col={props.col}/>
          );
        })
      }

    </div>
  );
};

export default NewsList;
