import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './services/auth-services/auth.service';
import { AuthInterceptor } from './services/auth-services/auth-interceptor';
import { LoginModule } from './pages/login/login.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeModule } from './pages/home/home.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HomeModule,
    MatSnackBarModule,
    LoginModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }