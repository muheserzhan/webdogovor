import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginTemplateComponent } from './core/page/login-template/login-template.component';

const routes: Routes = [
  {
    path: '',
    component: LoginTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
