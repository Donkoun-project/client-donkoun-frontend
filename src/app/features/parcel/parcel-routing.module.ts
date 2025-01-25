import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEditParcelComponent } from './create-edit-parcel/create-edit-parcel.component';

const routes: Routes = [
  {path: 'create-edit-parcel', component: CreateEditParcelComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParcelRoutingModule { }
