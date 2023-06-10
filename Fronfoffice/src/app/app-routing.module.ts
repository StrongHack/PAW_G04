import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageComponent } from './components/page/page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './guard/auth.guard';
import { SucessComponent } from './sucess/sucess.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'pagina', component: PageComponent },
  { path: 'conta', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'sucess', component: SucessComponent },
  { path: 'recoverPassword', component: RecoverPasswordComponent },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
