import { NgModule } from '@angular/core';
import { ParcelRoutingModule } from './parcel-routing.module';
import { ParcelListComponent } from './liste/parcel-list/parcel-list.component';
import { ParcelItemComponent } from './liste/parcel-item/parcel-item.component';
import { ReadyToShipComponent } from '../ready-to-ship/ready-to-ship.component';
import { HowDonkounWorksComponent } from '../how-donkoun-works/how-donkoun-works.component';
import { CreateEditParcelComponent } from './create-edit-parcel/create-edit-parcel.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ParcelListComponent,
    ParcelItemComponent,
    ReadyToShipComponent,
    HowDonkounWorksComponent,
    CreateEditParcelComponent
  ],
  imports: [
    CommonModule,
    ParcelRoutingModule,
    FormsModule,
  //  SharedModule
    
  ],
  exports: [
    CommonModule,
    ParcelListComponent,
    ParcelItemComponent,
    ReadyToShipComponent,
    HowDonkounWorksComponent,
    CreateEditParcelComponent
  ]
})
export class ParcelModule { }
