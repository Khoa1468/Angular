import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BootstrapComponent } from './components/test/bootstrap.component';
import { DataComponent } from './components/data/data.component';
import { KhoaComponent } from './components/khoa/khoa.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapComponent,
    DataComponent,
    KhoaComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
