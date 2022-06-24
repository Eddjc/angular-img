import { Component, OnInit } from '@angular/core';
import { UploadImageService } from 'src/app/shared/services/upload-image.service';


@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  files: File[] = [];
  
  constructor(private subirImg: UploadImageService, ) { }

  ngOnInit(): void {
  }

  onSelect(event:any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }
  
  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  upLoad(){
    if(!this.files[0]){
      alert('Primero sube una imagen ')
    }

    //subir img a cloudinary
    const fileData = this.files[0];
    console.log(fileData);
    const data = new FormData();
    
    data.append('api_key','535976918921696');
    data.append('api_secret', 'muFdpcR6TXCRhQ-GebYeczWkO7U')
    data.append('file', fileData);
    data.append('upload_preset', 'angular_cloudinary');
    data.append('cloud_name', 'unahjc');
    
    this.subirImg.uploadImagen(data).subscribe((res:any) => {
      if (res){
        console.log(res);
      }
    });
  }
}
