import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from './store/store.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	declarations: [AppComponent, HeaderComponent],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule, StoreModule],
	bootstrap: [AppComponent],
})
export class AppModule {}

