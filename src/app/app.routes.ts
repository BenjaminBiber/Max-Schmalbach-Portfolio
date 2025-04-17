import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ImpressumComponent } from '../impressum/impressum.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Galerie/:name', component: GalleryComponent },
    { path: 'Galerie', component: GalleryComponent },
    { path: 'Über-Mich', component: AboutComponent },
    { path: 'Impressum', component: ImpressumComponent },
];
