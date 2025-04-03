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
import { WriteReviewComponent } from './pages/write-review/write-review.component';
import { ContactUsComponent } from './blog/contact-us/contact-us.component';
import { VerifyOtherComponent } from './authentication/verify-other/verify-other.component';
import { AppComponent } from './app.component';
import { TableComponent } from './main/table/table.component';
import { MainComponent } from './blog/main/main.component';
import { LayoutComponent } from './main/layout/layout.component';
import { AboutComponent } from './blog/about/about.component';
import { BlogComponent } from './blog/blog/blog.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { BlogListComponent } from './admin/blog-list/blog-list.component';
import { AddBlogComponent } from './admin/add-blog/add-blog.component';
import { GetListComponent } from './main/main-profile/get-list/get-list.component';

export const routes: Routes = [
   {
      path: '',
      component: LayoutComponent,
      children: [
         {
            path: '',
            component: TableComponent,
            pathMatch: 'full'
         },

         {
            path: 'carrier-list/:slug',
            component: CarrierListComponent,
            pathMatch: 'full'
         },
         {
            path: 'login',
            component: LoginComponent,
            pathMatch: 'full',
         },

         {
            path: 'my-profile',
            component: ProfileComponent,
            pathMatch: 'full',
            canActivate: [activatGuard]
         },

         {
            path: 'dashboard',
            component: DashboardComponent,
            pathMatch: 'full',
            canActivate: [activatGuard]
         },

         {
            path: 'register',
            component: RegisterComponent,
            pathMatch: 'full'
         },

         {
            path: 'forgot-password',
            component: ForgotPasswordComponent,
            pathMatch: 'full'
         },

         {
            path: 'reset-password',
            component: ResetPasswordComponent,
            pathMatch: 'full'
         },

         {
            path: 'verification',
            component: VerifactionComponent,
            pathMatch: 'full'
         },

         {
            path: 'verify',
            component: VerifyComponent,
            pathMatch: 'full'
         },

         {
            path: 'forgot-password-email-send',
            component: ForgotEmailSendComponent,
            pathMatch: 'full'
         },

         {
            path: 'carrier-detail',
            component: CarrierDetailsComponent,
            pathMatch: 'full'
         },

         {
            path: 'review',
            component: WriteReviewComponent,
            pathMatch: 'full'
         },



         {
            path: 'verify-others-email',
            component: VerifyOtherComponent,
            pathMatch: 'full'
         },

      ]

   },

   {
      path: 'company',
      component: MainComponent,
      children: [
         {
            path: 'contact-us',
            component: ContactUsComponent,
            pathMatch: 'full'
         },
         {
            path: 'about',
            component: AboutComponent,
            pathMatch: 'full'
         },
         {
            path: 'blog',
            component: BlogComponent,
            pathMatch: 'full'
         }
      ]
   },

   {
      path: "admin",
      component: AdminLayoutComponent,
      children: [
         {
            path: "dashboard",
            component: AdminDashboardComponent,
            pathMatch: 'full'

         },
         {
            path: "blog-list",
            component: BlogListComponent,
            pathMatch: 'full'
         },
         {
            path: "add-blog",
            component: AddBlogComponent,
            pathMatch: 'full'
         },
         {
            path: 'list-blog',
            component: GetListComponent,
            pathMatch: 'full'
         }

      ]
   }

   //    {
   //       path: '**',
   //       redirectTo: '',
   //    }
];
