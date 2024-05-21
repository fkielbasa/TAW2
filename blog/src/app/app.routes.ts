import { Routes } from '@angular/router';
import { BlogComponent } from "./components/blog/blog.component";
import { BlogItemDetailsComponent } from "./components/blog-item-details/blog-item-details.component";

export const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
  },
  {
    path: 'api/posts/:id',
    component: BlogItemDetailsComponent
  },
  {
    path: '**', // Trasa domyślna - przekierowanie wszystkich niepasujących adresów URL
    component: BlogComponent, // Tutaj możesz ustawić inny komponent lub widok
  }
];
