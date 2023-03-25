import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SquareComponent } from '../square/square.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [AppComponent, SquareComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
