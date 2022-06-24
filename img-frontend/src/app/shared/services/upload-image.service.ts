import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  
  constructor(private http: HttpClient) { }

  uploadImagen(data:FormData):Observable<any> {
    console.log(data);
    return this.http.post('https://api.cloudinary.com/v1_1/unahjc/image/upload', data);
  }
}
