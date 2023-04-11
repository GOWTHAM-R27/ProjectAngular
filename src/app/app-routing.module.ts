import { ApplicationModule, Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';
import { ProductComponent } from './Product/Product.component';
import { PreWeddingComponent } from './PreWedding/PreWedding.component';
import { WeddingComponent } from './wedding/wedding.component';
import { PortraitComponent } from './Portrait/Portrait.component';
import { EventsComponent } from './Events/Events.component';
import { TravelComponent } from './Travel/Travel.component';
import { BookNowComponent } from './BookNow/BookNow.component';
import { IndexComponent } from './index/index.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },

  {
    path:'home',
    component: HomeComponent,
  },

  {
    path:'login',
    component: LoginComponent
  },

  {
    path:'register',
    component: RegisterComponent
  },

  {
    path:'index',
    component: IndexComponent
  },

  {
    path:'gallery',
    component: GalleryComponent,
//  canActivate:[AuthGuard]
  },

  {
    path:'pre_wedding',
    component: PreWeddingComponent,

  },

  {
    path:'wedding',
    component: WeddingComponent,
    // canActivate:[AuthGuard]
  },

  {
    path:'portrait',
    component: PortraitComponent,
    // canActivate:[AuthGuard]
  },

  {
    path:'products',
    component: ProductComponent,
    // canActivate:[AuthGuard]
  },

  {
    path:'events',
    component: EventsComponent,
    // canActivate:[AuthGuard]
  },

  {
    path:'travel',
    component: TravelComponent,
    // canActivate:[AuthGuard]
  },

  {
    path:'booknow',
    component: BookNowComponent,

    canActivate:[AuthGuard]

  },
  {
    path:'**',
    component:HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
