import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentDev } from '../../../environments/environment.development';
import { catchError, Observable, shareReplay, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseServicesService {
  baseUrl: string = environmentDev.baseUrl;
  constructor(private http:HttpClient) {}


  get(endpoint: string, id?:string): Observable<any>{
    if(id){
      return this.http.get(`${this.baseUrl}${endpoint}/${id}`).pipe(shareReplay(),catchError(this.handleError));
    }
    return this.http.get(`${this.baseUrl}${endpoint}`).pipe(shareReplay(),catchError(this.handleError));

  }

  sendData(data: any, endpoint: string, id?: string): Observable<any>{
    if(id){
      return this.http.put(`${this.baseUrl}${endpoint}/${id}`, data).pipe(catchError(this.handleError));
    }
    return this.http.post(`${this.baseUrl}${endpoint}`, data).pipe(catchError(this.handleError));
  }

  delete(endpoint: string, id: string): Observable<any>{
    return this.http.delete(`${this.baseUrl}${endpoint}/${id}`).pipe(catchError(this.handleError));
  }





  private handleError(error: any) : any {
    let errorMessage : string = 'Oups quelque chose a mal tourné'
    if (error.error instanceof ErrorEvent){
      errorMessage = `Une erreur s'est produite : ${error.error.message}`;
    }else{
      switch(error){
        case 400: errorMessage = 'Le formulaire est invalide'; break;
        case 401: errorMessage = 'Vous n\'êtes pas authentifié'; break;
        case 403: errorMessage = 'Vous n\'avez pas les droits nécessaires'; break;
        case 404: errorMessage = 'La page demandée n\'existe pas'; break;
        case 500: errorMessage = 'Une erreur interne du serveur s\'est produite'; break;
        default:
          errorMessage = `Erreur : ${error.status} - ${error.message}`;
      }
    }
    return throwError((): Error =>new Error(errorMessage));
  }


}
