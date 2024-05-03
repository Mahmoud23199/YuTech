import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ErrorComponent } from './Components/error/error.component';
import { NewsDetalisComponent } from './Components/news-detalis/news-detalis.component';
import { AuthorDetalisComponent } from './Components/author-detalis/author-detalis.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'newsDetalis/:id', component: NewsDetalisComponent },
  { path: 'authorDetalis/:id', component: AuthorDetalisComponent },
  { path: '**', component: ErrorComponent },
  { path: '',redirectTo:'home',pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
