import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MainComponent} from './main/main.component';
import {HeaderComponent} from './main/header/header.component';
import {StartComponent} from './main/start/start.component';
import {RouterModule, Routes} from '@angular/router';
import {MapComponent} from './main/map/map.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {AgmCoreModule} from '@agm/core';
import {HttpClientModule} from '@angular/common/http';
import {ServerService} from './shared/server.service';
import {HttpService} from './shared/http.service';


const appRoutes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: '', component: StartComponent},
      {path: 'city/:city', component: MapComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    HeaderComponent,
    StartComponent,
    MapComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCMceBaWE-7l0Et1H2uV8kt7VX9eptFufg'
    })
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
