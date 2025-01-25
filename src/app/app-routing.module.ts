import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalWrapperComponent } from './layout/global-wrapper/global-wrapper.component';

const routes: Routes = [
  {
    path: 'auth',  
    loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule)
  },

  {
    path: 'parcel',  
    loadChildren: () => import('../app/features/parcel/parcel.module').then(m => m.ParcelModule)
  },
  {
    path: 'home',  component: GlobalWrapperComponent
  //  loadChildren: () => import('../app/shared/shared/shared.module').then(m => m.SharedModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/auth/login' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
