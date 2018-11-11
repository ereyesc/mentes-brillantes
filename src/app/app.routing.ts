import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoPadresComponent } from './info-padres/info-padres.component';
import { PlanesComponent } from './planes/planes.component';
import { CoursesComponent } from './courses/courses.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'informacion-padres', component: InfoPadresComponent },
    { path: 'planes', component: PlanesComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard] },
    { path: 'course/:id', component: CourseComponent, canActivate: [AuthGuard] },
    {path: '404', component: NotFoundComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '/404' }
];

export const routing = RouterModule.forRoot(appRoutes);