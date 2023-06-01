import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnSplashResponse {
  urls: {
    regular: string;
  }
}
@Injectable({
  providedIn: 'root'
})
export class FetchphotosService {

  constructor(private http: HttpClient) { 


  }

  getPhoto(){
    return this.http.get<UnSplashResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID DWRqYfZggUNTm9Zw06Oxlx4xYbfuSwc40SBxe3tce8g'
      }
    });

  }
}
