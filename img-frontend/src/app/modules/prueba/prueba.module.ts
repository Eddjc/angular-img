import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruebaRoutingModule } from './prueba-routing.module';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { NgxDropzoneModule } from 'ngx-dropzone'

@NgModule({
  declarations: [
    UploadImageComponent
  ],
  imports: [
    CommonModule,
    PruebaRoutingModule,
    NgxDropzoneModule
  ]
})
export class PruebaModule { }
