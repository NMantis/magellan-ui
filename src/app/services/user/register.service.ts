import { Injectable } from '@angular/core';
import { RegisterModule } from 'src/app/pages/register/register.module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: RegisterModule
})
export class RegisterService {
  private baseUrl = environment.apiUrl
  constructor() { }
}
