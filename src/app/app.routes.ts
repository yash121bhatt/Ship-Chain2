import { Routes } from '@angular/router';
import { CarrierListComponent } from './main/carrier-list/carrier-list.component';
import { CarrierDetailsComponent } from './main/carrier-details/carrier-details.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { VerifactionComponent } from './authentication/verifaction/verifaction.component';
import { VerifyComponent } from './authentication/verify/verify.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { ForgotEmailSendComponent } from './authentication/forgot-email-send/forgot-email-send.component';
import { ProfileComponent } from './main/profile/profile.component';
import { activatGuard } from './activat.guard';
import { DashboardComponent } from './main/dashboard/dashboard.component';

export const routes: Routes = [
    {
       path: 'table',
       loadComponent: () => import('./main/table/table.component').then(m => m.TableComponent),
      
    },
      
    {
       path: '',
       component : LoginComponent,
       pathMatch: 'full',
    },

    {
      path: 'my-profile',
      component : ProfileComponent,
      pathMatch: 'full',
      canActivate : [activatGuard]
   },

   {
      path: 'dashboard',
      component : DashboardComponent,
      pathMatch: 'full',
      canActivate : [activatGuard]
   },

    {
        path: 'register',
        component : RegisterComponent,
        pathMatch: 'full'
     },

     {
        path: 'forgot-password',
        component : ForgotPasswordComponent,
        pathMatch: 'full'
     },

     {
      path: 'reset-password',
      component : ResetPasswordComponent,
      pathMatch: 'full'
   },

     {
       path : 'verification',
       component : VerifactionComponent,
       pathMatch : 'full'
     },

     {
        path : 'verify',
        component : VerifyComponent,
        pathMatch : 'full'
      },

      {
         path : 'forgot-password-email-send',
         component : ForgotEmailSendComponent,
         pathMatch : 'full'
       },

    {
        path: 'carrier-list/:slug',
        component:CarrierListComponent,
        pathMatch: 'full'
    },

    {
        path:'carrier-detail',
        component:CarrierDetailsComponent,
        pathMatch: 'full'
    },

    {
        path:'**',
        redirectTo: '',
    }
];
