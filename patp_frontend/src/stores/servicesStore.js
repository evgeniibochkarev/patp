import { observable, action, computed } from 'mobx';
import agent from '../agent';

const LIMIT = 20;

export class ServicesStore {

  @observable isServicesLoading = false;
  @observable servicesRegistry = observable.map();
 

  @computed get services() {
    return this.servicesRegistry.values();
  };

  clear() {
    this.servicesRegistry.clear();
  }

  $getAll(){
    return agent.Services.all();
  }
  $getDetail(slug){
    return agent.Services.detail(slug);
  }

  getServices() {
    return this.servicesRegistry.values();
  }
  getService(slug) {
    return this.servicesRegistry.get(slug);
  }

  @action loadServices() {
    this.isServicesLoading = true;
    return this.$getAll()
      .then(
        action(({ results }) => {
                results.forEach(service => {
                                    if( typeof this.servicesRegistry.get(service.slug) === 'undefined' )
                                      this.servicesRegistry.set(service.slug, service) ;
                                    }
              
        )
      }))
      .finally(action(() => { this.isServicesLoading = false; }));
  }


  @action loadService(slug, { acceptCached = false } = {}) {
    if (acceptCached) {
      const service = this.getService(slug);
      if (service) return Promise.resolve(service);
    }
    
    this.isDetailLoading = true;
    return this.$getDetail(slug)
      .then(action(({ id,seoDescription, seoKeywords,imageAnons,image,title,desc,slug }) => {
        const obj = {
          "id": id,
          "seoDescription": seoDescription,
          "seoKeywords": seoKeywords,
          "imageAnons": imageAnons,
          "image": image,
          "title": title,
          "desc": desc,
          "slug": slug
      }
      this.servicesRegistry.set(slug,  obj);
      }))
      .finally(action(() => { this.isDetailLoading = false; }));
  }
}

export default new ServicesStore();
