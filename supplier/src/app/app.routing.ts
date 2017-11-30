import { Routes, RouterModule } from '@angular/router';
import { LoginComponent,HomeComponent} from './components/index';
import { AuthGuard } from './guards/index';

const appRoutes: Routes = [
    //{ path: '', component: HomeComponent,canActivate: [AuthGuard]},
    { path: '', component: HomeComponent},  
    { path: 'login', component: LoginComponent}, 

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);