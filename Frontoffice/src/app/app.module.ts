import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { AuthenticationService } from './service/authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './guard/auth.guard';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageComponent } from './components/page/page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SucessComponent } from './components/sucess/sucess.component';
import { ListPropertiesComponent } from './components/list-properties/list-properties.component';
import { InfoPropertiesComponent } from './components/info-properties/info-properties.component';
import { ListEventsComponent } from './components/list-events/list-events.component';
import { InfoEventsComponent } from './components/info-events/info-events.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PageComponent,
    ProfileComponent,
    UserProfileComponent,
    SucessComponent,
    ListPropertiesComponent,
    InfoPropertiesComponent,
    ListEventsComponent,
    InfoEventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [AuthenticationService, CookieService, AuthGuard,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
