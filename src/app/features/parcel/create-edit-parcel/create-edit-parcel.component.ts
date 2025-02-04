import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { PercelService } from '../percel.service';
import { Router } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-create-edit-parcel',
  templateUrl: './create-edit-parcel.component.html',
  styleUrls: ['./create-edit-parcel.component.scss']
})
export class CreateEditParcelComponent implements OnInit,   OnDestroy {
  public transport: any
  constructor(
    public _shared: SharedService,
    private _percel: PercelService,
    private _router : Router
  ) { 

   this.transport= {
      userId: '8179ffb1-378c-48c5-8be0-29a7249649b6',
      transportType: '',
      transportCompany: '',
      departureCity: '',
      arrivalCity: '',
      departureDate: '',
      arrivalDate: '',
      availableQuantity: 0,
      minReservation: 0,
      pickupLocation: '',
      deliveryLocation: '',
      pricePerKg: 0,
      currency: '',
      message: '',
    };
  }

  ngOnInit(): void {
  }



  ngOnDestroy(): void {
    this._shared.baniereImage= true
  }

  onSubmit() {
    //console.log('Transport soumis:', this.transport);
    this._shared.showConfirmationAlert("Avertissment","Voulez-vous vraiment créer cette annonce?")
    .then((result)=>{
        console.log("result", result)

        if(result.isConfirmed){
          this._percel.createTransport(this.transport)
        .subscribe(
          response => {
            this._shared.showAlert("success", "Success", "Connected Successfully")
            console.log('Login successful:', response);
            // Redirection ou autres actions après une connexion réussie
            this._router.navigateByUrl("/home")
          },
          error => {
            // Logique en cas d'erreur
            this._shared.showAlert("error", "Error", "Connection failed")

            console.error('Login failed:', error);
        //   this.notificationService.showError('Login failed. Please check your credentials.');
          }
        );
        }
    })
        
  } 
}
