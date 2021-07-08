import { observable, action, computed } from 'mobx';
import agent from '../agent';

const LIMIT = 20;

export class NewsStore {

  @observable isNewsLoading = false;
  @observable newsRegistry = observable.map();
 

  @computed get news() {
    return this.newsRegistry.values();
  };

  clear() {
    this.newsRegistry.clear();
  }

  
  $getAll(){
    return agent.News.all();
  }
  $getDetail(slug){
    return agent.News.detail(slug);
  }

  getNews() {
    return this.newsRegistry.values();
  }
  getDetailNews(slug) {
    return this.newsRegistry.get(slug);
  }

  @action loadNews() {
    this.isNewsLoading = true;
    
    return this.$getAll()
      .then(
        action(({ results }) => {
        console.log(results)
        this.newsRegistry.clear();
        results.forEach(service => this.newsRegistry.set(service.slug ,service));
        
      }))
      .finally(action(() => { this.isNewsLoading = false; }));
  }
/*
  @action loadDetailNews(slug) {
    this.isNewsLoading = true;
    
    return this.$getDetail()
      .then(
        action(({ results }) => {
        console.log(results)
        this.newsRegistry.clear();
        results.forEach(service => this.newsRegistry.set(service.slug ,service));
        
      }))
      .finally(action(() => { this.isNewsLoading = false; }));
  }*/

  @action loadDetailNews(slug, { acceptCached = false } = {}) {
    if (acceptCached) {
      const service = this.getNews(slug);
      if (service) return Promise.resolve(service);
    }
    this.isNewsLoading = true;
    return this.$getDetail(slug)
      .then(action(({ id,seoDescription, seoKeywords, date,imageAnons,image,title,desc,slug }) => {
        const obj = {
          "id": id,
          "seoDescription": seoDescription,
          "seoKeywords": seoKeywords,
          "date": date,
          "imageAnons": imageAnons,
          "image": image,
          "title": title,
          "desc": desc,
          "slug": slug
      }
        this.newsRegistry.set(slug,  obj);
        return obj;
      }))
      .finally(action(() => { this.isNewsLoading = false; }));
  }
}

export default new NewsStore();
