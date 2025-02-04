import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { TokenService } from 'src/app/shared/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  loginForm: FormGroup;  

  constructor(
    private fb: FormBuilder,
     private authService: AuthService,
     private sharedService: SharedService,
     private _router: Router,
     private _token: TokenService
    ) {
   
  }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],  
      email: ['', [Validators.required, Validators.email]], 
      roleId: ['', [Validators.required]],  // Champ pour le role ID (ex: selectionné depuis une liste déroulante)
      telephone: ['', [Validators.required, Validators.pattern('^\\+?[1-9]\\d{1,14}$')]],  // Champ pour le téléphone avec validation de format international
      password: ['', [Validators.required, Validators.minLength(6)]],  // Champ pour le mot de passe
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });

    this.loginForm = this.fb.group({
      telephone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmitLogin(): void {
    if (this.loginForm.valid) {
      
      // Appel de la fonction login du service
      this.authService.login(this.loginForm.value)
      .subscribe(
        response => {
          this._token?.setToken(response?.data?.token)
          this.sharedService.showAlert("success", "Success", "Connected Successfully")
          console.log('Login successful:', response);
          this._router.navigateByUrl("/home")
         //   this.notificationService.showSuccess('Login successful!', 'Welcome');
          // Redirection ou autres actions après une connexion réussie
        },
        error => {
          // Logique en cas d'erreur
          this.sharedService.showAlert("error", "Error", "Connection failed")

          console.error('Login failed:', error);
       //   this.notificationService.showError('Login failed. Please check your credentials.');
        }
      );
    } else {
      this.loginForm.markAllAsTouched(); // Marquer tous les champs comme touchés pour afficher les erreurs
    }
  }

  // Validator personnalisé pour vérifier si les mots de passe correspondent
  matchPasswords(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];
      if (confirmPasswordControl.errors && !confirmPasswordControl.errors['mismatch']) {
        return;
      }
      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ mismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit() {
  

    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(
        response => {
          this.sharedService.showAlert("success", "Success", "registered successfully")
          console.log('Login successful:', response);
          location.reload()
      
        },
        error => {
          // Logique en cas d'erreur
          this.sharedService.showAlert("error", "Error", "Opération failed")

          console.error('Login failed:', error);
        }
      );
    } else {
      this.registerForm.markAllAsTouched(); // Marquer tous les champs comme touchés pour afficher les erreurs
    }
  }
}
