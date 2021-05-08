import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { ReviewComponent } from './review/review.component';
import { ReservationComponent } from './reservation/reservation.component';


const routes: Routes = [{path: "home", component: HomeComponent},
                        {path: "about", component: AboutComponent},
                        {path: "news", component: NewsComponent},
                        {path: "contact", component: ContactComponent}, 
                        {path: "menu", component: MenuComponent},
                        {path: "review", component: ReviewComponent}, 
                        {path: "reservation", component: ReservationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
