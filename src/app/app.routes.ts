import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Galerie/:name', component: GalleryComponent },
    { path: 'Galerie', component: GalleryComponent },
];
