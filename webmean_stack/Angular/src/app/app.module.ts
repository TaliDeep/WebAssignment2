import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import {
  MatInputModule, 
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatCheckboxModule
} from '@angular/material/';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';

import { ngRoutes} from './router';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignupComponent
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
