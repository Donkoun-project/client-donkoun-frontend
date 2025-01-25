import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParcelModule } from 'src/app/features/parcel/parcel.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ParcelModule,
    HttpClientModule
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
