import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentNameComponent } from './component-name/component-name.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, ComponentNameComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
