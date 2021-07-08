import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';




@inject('newsStore')
@observer
export default class NewsPreview extends React.Component {

 

  render() {
    const news  = this.props.news;
    const col = this.props.col == undefined ? "2" : this.props.col; 

    const dateSplit = String(news.newsDate).split('-');


    const isScale = this.props.col == "1" ? 'news_scale' : ''; 
    const sizeText =  this.props.col == "1" ? {fontSize: "0.6rem", fontWeight: "normal"} : {fontSize: "1rem", fontWeight: "bold"};   
    return (
      
      <div className={`col-md-${col} mt-3  ${isScale}`} >
        <Link to={`/news/${news.slug}/`} >
          <div className="d-flex">
            <img src={news.imageAnons} className="w-100 pb-2 pr-2" />
            <div className="pt-2">
                <span style={sizeText}>{dateSplit[2]}.{dateSplit[1]}.{dateSplit[0]}</span>
                <p style={sizeText}>{news.title}</p>
            </div>
          </div>
        </Link>
	    </div>
      
    );
  }
}
