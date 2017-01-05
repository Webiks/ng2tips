import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ParamsFormComponent } from './components/params-form/params-form.component';
import {DataGeneratorService} from "./services/data-generator.service";
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import {ConfigService} from "./services/config-service/config.service";
import { APP_INITIALIZER } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    ParamsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule
  ],
  providers: [ DataGeneratorService,
    ConfigService,
    { provide: APP_INITIALIZER, useFactory: (config: ConfigService) => () => config.load(), deps: [ConfigService], multi: true }
              ],
  bootstrap: [AppComponent]
})
export class AppModule
{

}
