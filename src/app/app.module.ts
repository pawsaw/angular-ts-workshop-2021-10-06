import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import { TitleTextComponent } from './title-text/title-text.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [AppComponent, TitleTextComponent, NavigationComponent],
  imports: [BrowserModule, AppRoutingModule, BookModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
