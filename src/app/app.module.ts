import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginTemplateComponent } from './core/page/login-template/login-template.component';
import { LoginPageComponent } from './core/page/login-template/login-page/login-page.component';
import { LoginFormComponent } from './core/component/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginTemplateComponent,
    LoginPageComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
