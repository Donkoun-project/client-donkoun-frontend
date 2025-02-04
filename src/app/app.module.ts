import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParcelModule } from './features/parcel/parcel.module';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { GlobalWrapperComponent } from './layout/global-wrapper/global-wrapper.component';
import { SharedService } from './shared/shared.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/interceptor/auth.interceptor';

@NgModule({
  declarations: [
    GlobalWrapperComponent,
    HeaderComponent,
    FooterComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ParcelModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    SharedService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
