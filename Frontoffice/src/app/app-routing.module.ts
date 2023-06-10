import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageComponent } from './components/page/page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './guard/auth.guard';
import { SucessComponent } from './components/sucess/sucess.component';
import { ListPropertiesComponent } from './components/list-properties/list-properties.component';
import { InfoPropertiesComponent } from './components/info-properties/info-properties.component';
import { ListEventsComponent } from './components/list-events/list-events.component';
import { InfoEventsComponent } from './components/info-events/info-events.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'pagina', component: PageComponent },
  { path: 'conta', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'sucess', component: SucessComponent },
  { path: 'properties', component: ListPropertiesComponent },
  { path: 'properties/:id', component: InfoPropertiesComponent },
  { path: 'events', component: ListEventsComponent },
  { path: 'events/:id', component: InfoEventsComponent},
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
