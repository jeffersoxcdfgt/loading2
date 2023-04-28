import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JsonParsePipe } from './json-custom.pipe';
import { WithLoadingPipe } from './with-loading.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WithLoadingPipe,
    JsonParsePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
