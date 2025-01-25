import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-create-edit-parcel',
  templateUrl: './create-edit-parcel.component.html',
  styleUrls: ['./create-edit-parcel.component.scss']
})
export class CreateEditParcelComponent implements OnInit,   OnDestroy {

  constructor(public _shared: SharedService) { }

  ngOnInit(): void {
  }



  ngOnDestroy(): void {
    this._shared.baniereImage= true
  }
}
