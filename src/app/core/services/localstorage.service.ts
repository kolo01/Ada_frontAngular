import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  get(key: string){
    return localStorage.getItem(`${key}`)
  }

  set(key: string, value: string){
    localStorage.setItem(`${key}`, value);
  }

  delete(key: string){
    localStorage.removeItem(`${key}`);
  }

  deleteAll(){
    localStorage.clear();
  }

}
