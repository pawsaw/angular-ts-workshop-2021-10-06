import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/books',
  },
  {
    path: 'books/:isbn/edit',
    component: BookEditComponent,
  },
  {
    path: 'books/:isbn',
    component: BookDetailComponent,
  },
  {
    path: 'books',
    component: BookComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
