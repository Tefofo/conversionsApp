import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppService } from './app.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ConvertionsComponent } from './convertions/convertions.component';
import { AppRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ConvertionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    AppRouting
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
