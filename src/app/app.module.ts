import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterMessageComponent } from './counter-message/counter-message.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { ShorthandPipe } from './shorthand.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CounterMessageComponent,
    CounterButtonComponent,
    ShorthandPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
