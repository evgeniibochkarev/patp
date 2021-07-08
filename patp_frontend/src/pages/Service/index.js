import React from "react";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import LoadingSpinner from '../../components/LoadingSpinner';
import ServicesList from '../../components/ServicesList';


@inject("servicesStore")
@withRouter
@observer
export default class Service extends React.Component {
  
  componentDidMount() {
    const slug = this.props.match.params.id;
    this.props.servicesStore.loadServices();
    this.props.servicesStore.loadService(slug, { acceptCached: false });
  }
  componentDidUpdate(previousProps) {
    const slug = this.props.match.params.id;

    if(slug !== previousProps.match.params.id){
      this.props.servicesStore.loadService(slug, { acceptCached: false });
      
    }
      
  }


  isBodyLoading(service){
    if(typeof service.desc === 'undefined'){
      return <LoadingSpinner />
    }
    return <div className="" dangerouslySetInnerHTML={{__html: service.desc}} />
  }

  render() {
    const slug = this.props.match.params.id;
    const service = this.props.servicesStore.getService(slug);

    if (!service || this.props.servicesStore.length === 0) {
      return (
        
          <LoadingSpinner />
        
      );
    }
   
    const body = this.isBodyLoading(service)
    

    return (
      <div className="service-page">
        <div className="services_wrap services_gradiend">
          <div className="container-fluid pt-5 services">
            <div className="row align-items-end">
            <ServicesList
              services={this.props.servicesStore.getServices()}
              loading={this.props.servicesStore.isServicesLoading}
              col="1"
            />
            </div>
          </div>
        </div>
        <svg width="100%" height="100%" viewBox="0 0 192000 18700" xmlns="http://www.w3.org/2000/svg"><g class="layer"> <title>Layer 1</title>  <g id="Слой_x0020_1"> <metadata id="CorelCorpID_0Corel-Layer"/><g id="_2726714108320"><path class="fil0" d="m18788,13403l-892,1694c-86,163 -190,287 -310,371c-121,83 -252,125 -394,125c-110,0 -224,-25 -342,-74l117,-376c84,27 154,40 210,40c60,0 114,-15 161,-44c48,-30 92,-76 132,-139l18,-25l-826,-1572l518,0l557,1150l575,-1150l476,0zm1267,2178c-214,0 -407,-48 -580,-143c-173,-94 -308,-226 -407,-394c-99,-168 -148,-359 -148,-571c0,-212 49,-402 148,-570c99,-168 234,-300 407,-395c173,-95 367,-142 583,-142c181,0 345,33 492,98c147,65 270,159 370,281l-312,294c-141,-167 -317,-251 -527,-251c-129,0 -245,29 -347,87c-102,58 -181,140 -238,244c-57,104 -85,222 -85,354c0,133 28,251 85,355c57,104 136,185 238,243c102,58 218,88 347,88c210,0 386,-85 527,-254l312,293c-100,125 -224,220 -371,285c-148,65 -313,98 -494,98zm3000,-2178l0,2141l-479,0l0,-1737l-719,0l-15,446c-10,304 -34,550 -72,739c-38,188 -101,333 -190,434c-89,101 -213,152 -373,152c-65,0 -145,-12 -239,-34l30,-419c26,8 55,12 87,12c115,0 196,-70 242,-209c46,-140 75,-359 87,-656l30,-869l1611,0zm2417,0l-893,1694c-85,163 -189,287 -310,371c-120,83 -252,125 -393,125c-110,0 -224,-25 -342,-74l117,-376c84,27 154,40 210,40c60,0 113,-15 161,-44c48,-30 92,-76 132,-139l18,-25l-826,-1572l518,0l557,1150l575,-1150l476,0zm1707,404l-998,0l3,1737l-482,0l0,-2141l1480,0l-3,404zm299,-404l482,0l0,1395l1000,-1395l456,0l0,2141l-480,0l0,-1392l-1000,1392l-458,0l0,-2141z" id="svg_1"/><polygon class="fil1" id="svg_2" points="-2,0 191998,0 191997,3141 186061,10066 411,10066 4,11863 "/><path class="fil2" d="m33002,6170l70905,16l3660,-5c888,6 1344,-311 1924,-917c1055,-1100 2182,-2881 2656,-3666l692,0c-809,2067 -1618,4133 -2426,6200c-638,1630 -1098,2627 -5273,2597l-1233,0l-32009,-1l-2338,4l-63233,-1c-5563,0 -6329,7018 -6329,6664l0,-3754l12,-2849c10,-2416 2345,-4443 7708,-4406l25284,118l0,0z" id="svg_3"/><path class="fil2" d="m121261,6053l1358,0l60740,13l2599,1c890,6 2524,-527 3153,-1060c2587,-2195 2732,-4033 2886,-5005l0,3907c0,3049 -1467,5883 -6035,6186c-270,18 -551,27 -843,26l-1761,1l-63462,-1c-1364,-8 -3021,-263 -4761,1087c-738,573 -1242,2103 -1434,2813l-696,0l728,-2342c1005,-3238 1759,-5666 7528,-5626l0,0z" id="svg_4"/><path class="fil3" d="m43256,10798l1359,0l60740,13l2599,1c891,6 1991,-300 2574,-884c1059,-1060 2930,-7530 3406,-8287l695,0c-624,2428 -2408,10396 -2861,11335c-672,1393 -2931,1907 -5176,1891l-1237,0l-63463,-1c-1365,-8 -3022,-263 -4761,1088c-738,572 -1242,2103 -1434,2812l-696,0l727,-2342c1006,-3238 1759,-5665 7528,-5626l0,0z" id="svg_5"/></g> </g> <g id="Слой_x0020_1_0"> <metadata id="CorelCorpID_1Corel-Layer"/></g></g></svg>

              
        <div className="container">
          <div className="row">
            <div className="col-lg-11 offset-lg-1">
              <h1>{service.title}</h1>
            </div>
          </div>
        </div>

        <div className="container page">
         
           
            {body}
              
            
          

          <hr />

          <div className="article-actions" />

          <div className="row">
          
          </div>
        </div>
      </div>
    );
  }
}
