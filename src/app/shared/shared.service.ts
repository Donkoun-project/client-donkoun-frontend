import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  baniereImage: boolean= true;
  constructor() {}

  // Afficher une alerte de succès avec des paramètres
  showAlert(icon: SweetAlertIcon, title: string, text: string) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
      confirmButtonText: 'OK'
    });
  }

  // Afficher une alerte de confirmation personnalisée
  showConfirmationAlert(
    title: string,
    text: string,
    confirmButtonText: string = 'Oui, confirme!',
    cancelButtonText: string = 'Non, annule'
  ) {
   return Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText
    })
  }
}