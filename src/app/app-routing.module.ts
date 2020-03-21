import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthguardService } from './services/auth-services/authguard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    loadChildren: './pages/register/register.module#RegisterModule',
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthguardService]
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/first-login/first-login.module').then(m => m.FirstLoginModule),
    canActivate: [AuthguardService]
  },
  {
    path: 'recommendations',
    loadChildren: () => import('./pages/recommendations/recommendations.module').then(m => m.RecommendationsModule),
    canActivate: [AuthguardService]
  },
  {
    path: 'advanced-search',
    loadChildren: () => import('./pages/advanced-search/advanced-search.module').then(m => m.AdvancedSearchModule),
    canActivate: [AuthguardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }