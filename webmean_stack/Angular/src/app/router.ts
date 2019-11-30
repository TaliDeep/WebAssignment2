import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';
import { SigninComponent} from './user/signin/signin.component';
import { UserProfileComponent} from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { CreateExerciseComponent } from './create-exercise/create-exercise.component';
import { CreateWorkoutComponent } from './create-workout/create-workout.component';

export const ngRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{path: '', component: SignupComponent}]
    },
    {
        path: 'login', component: UserComponent,
        children: [{path: '', component: SigninComponent}]
    },
    {
        path: 'userprofile', component: UserProfileComponent, canActivate:[AuthGuard]
    },
    {
        path: 'addexercise', component: CreateExerciseComponent, canActivate:[AuthGuard]
    },
    {
        path: 'addworkout', component: CreateWorkoutComponent, canActivate:[AuthGuard]
    },
    {
        path: '', redirectTo:'/login', pathMatch: 'full'
    }
];