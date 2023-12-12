import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from '@modules/main/main.component';


import {ProfileComponent} from '@pages/profile/profile.component';

import {DashboardComponent} from '@pages/dashboard/dashboard.component';

import {AuthGuard} from '@guards/auth.guard';
import {NonAuthGuard} from '@guards/non-auth.guard';


import {MainMenuComponent} from '@pages/main-menu/main-menu.component';
import {SubMenuComponent} from '@pages/main-menu/sub-menu/sub-menu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProcessInstancesComponent } from './process-instances/process-instances.component';
import { IAMComponent } from './iam/iam.component';
import { ChangeAmbulanceDetailsComponent } from '@pages/change-ambulance-details/change-ambulance-details.component';
import { LogIncidentComponent } from '@pages/log-incident/log-incident.component';
import { AmbulanceDetailsComponent } from '@pages/ambulance-details/ambulance-details.component';

const routes: Routes = [
    {
        path: '', pathMatch:"full",component:WelcomeComponent
    },
    {
        path:"IAM",
        component:IAMComponent
    },
    {
        path: '',
        component: MainComponent,
        //canActivate: [AuthGuard],
        //canActivateChild: [AuthGuard],
        children: [
            {
                path: 'profile',
                component: ProfileComponent
            },
           
            {
                path: 'sub-menu-1',
                component: SubMenuComponent
            },
           
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path:'process-instance/:id/:description',
                component:ProcessInstancesComponent
            },
            {
                path:'changeDetails/:taskId',component:ChangeAmbulanceDetailsComponent
            },
            {
                path:'logIncident/:taskId',component:LogIncidentComponent
            },
            {
                path:'ambulanceDetails/:taskId',component:AmbulanceDetailsComponent
            }, 
          
        ]
    },
 
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
