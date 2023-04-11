import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectViewComponent } from './component/project-view/project-view.component';
import { ProjectLoginComponent } from './component/project-login/project-login.component';

const routes: Routes = [
  { path: 'projectLogin',  component: ProjectLoginComponent},
  { path: 'projectView',  component: ProjectViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
