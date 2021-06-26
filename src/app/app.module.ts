import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MyComponentComponent} from './my-component/my-component.component';
import {TabConentComponent} from './tab-conent/tab-conent.component';
import {TabComponentComponent} from './tab-component/tab-component.component';
import {MyDirectiveDirective} from "./directives/my-directive.directive";
import {MyPipePipe} from './pipes/my-pipe.pipe';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {RouterModule, Routes} from "@angular/router";

const appRoutes : Routes = [
  { path : 'login',
    component : LoginComponent} ,
  { path : 'home',
    component : HomeComponent ,
    data : {page : 'Home page' }},
  { path : 'news/:newsId' ,
    component : NewsComponent },
  { path : '',
    redirectTo : '/home',
    pathMatch : 'full'},
  { path : '**',
    component : NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    TabConentComponent,
    TabComponentComponent,
    MyDirectiveDirective,
    MyPipePipe,
    HomeComponent,
    LoginComponent,
    NewsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule ,
    RouterModule. forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
