import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http';
import{RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
     {path:"",component:LoginComponent},
    {path:"home",component:HomeComponent},
    {path:"register",component:UsersComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
