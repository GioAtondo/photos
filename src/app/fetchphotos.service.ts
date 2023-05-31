import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchphotosService {

  constructor(private http: HttpClient) { 


  }

  getPhoto(){
    return this.http.get('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID DWRqYfZggUNTm9Zw06Oxlx4xYbfuSwc40SBxe3tce8g'
      }
    });

  }
}
