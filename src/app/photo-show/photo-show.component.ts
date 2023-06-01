import { Component } from '@angular/core';
import { FetchphotosService } from '../fetchphotos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent {
  constructor(private fetchphotosService: FetchphotosService){
    this.fetchphotosService.getPhoto().subscribe(response => {
      console.log(response.urls.regular);
    });
  }
}
