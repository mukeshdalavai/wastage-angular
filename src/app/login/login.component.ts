import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  type : string;
  constructor(private router : Router) { }

  ngOnInit() {
    this.type="Resturant";
  }
  setLoginType(LoginType){
   this.type=LoginType;
  }
  IntiateLogin(){
    if(this.type=="Resturant"){
      this.router.navigateByUrl("/restaurantDashboard");
    }else if(this.type=="Charity"){
      this.router.navigateByUrl("/CharityDashBoard");
    }else if(this.type=="Delivery Boy"){
      this.router.navigateByUrl("/DeliveryBoyDashBoard");
    }
  }
}
