import { Component } from '@angular/core';
import { FetchphotosService } from '../fetchphotos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent {
  photoUrl: string = '';

  constructor(private fetchphotosService: FetchphotosService){
    this.fetchPhoto();
  }

  onClick(){
    this.fetchPhoto();
  }

  fetchPhoto(){
    this.fetchphotosService.getPhoto().subscribe(response => {
      this.photoUrl = response.urls.regular;
    });
  }
}
