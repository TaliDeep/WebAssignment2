import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';

export const ngRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{path: '', component: SignupComponent}]
    },
    {
        path: '', redirectTo:'/signup', pathMatch: 'full'
    }
];