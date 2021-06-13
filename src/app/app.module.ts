import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { TabConentComponent } from './tab-conent/tab-conent.component';
import { TabComponentComponent } from './tab-component/tab-component.component';
import {MyDirectiveDirective} from "./directives/my-directive.directive";
import { MyPipePipe } from './pipes/my-pipe.pipe';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    TabConentComponent,
    TabComponentComponent,
    MyDirectiveDirective,
    MyPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
