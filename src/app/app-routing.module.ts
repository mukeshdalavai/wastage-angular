import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RestaurantDashboardComponent } from './restaurant-dashboard/restaurant-dashboard.component';
import { LoginComponent } from './login/login.component';
import { FoodStatusComponent } from './food-status/food-status.component';
import { CharityDashBoardComponent } from './charity-dash-board/charity-dash-board.component';
import { DeliveryBoyDashBoardComponent } from './delivery-boy-dash-board/delivery-boy-dash-board.component';

const routes: Routes = [
  {path : '',component :HomeComponent},
  {path: 'SignUp', component : SignUpComponent},
  {path: 'restaurantDashboard', component : RestaurantDashboardComponent},
  {path: 'Login', component : LoginComponent },
  {path: 'FoodStatus',component : FoodStatusComponent},
  {path: 'DeliveryBoyDashBoard',component : DeliveryBoyDashBoardComponent},
  {path: 'CharityDashBoard',component : CharityDashBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
