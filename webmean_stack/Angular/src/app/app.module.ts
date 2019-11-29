import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {
  MatInputModule, 
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatTableModule
} from '@angular/material/';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';

import { ngRoutes} from './router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SigninComponent } from './user/signin/signin.component';
import { UserService } from './shared/user.service';

import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignupComponent,
    UserProfileComponent,
    SigninComponent
    
  ],
  imports: [
    MatInputModule, 
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCheckboxModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ngRoutes),
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
