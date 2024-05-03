import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './Components/error/error.component';
import { HomeComponent } from './Components/home/home.component';
import { NavComponent } from './Components/shared/nav/nav.component';
import { FooterComponent } from './Components/shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { NewsDetalisComponent } from './Components/news-detalis/news-detalis.component';
import { AuthorDetalisComponent } from './Components/author-detalis/author-detalis.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    NewsDetalisComponent,
    AuthorDetalisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
