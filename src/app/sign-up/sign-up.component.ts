import { Component, OnInit } from '@angular/core';
import { DonationService } from '../donation.service';
import { Restaurant } from '../restaurant';
import { Charity } from '../charity';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private service : DonationService) { }

  ngOnInit() {
  }

  public saveRestaurant(restaurant : Restaurant){
    console.log(restaurant)
    this.service.saveRestaurant(restaurant).subscribe((data)=>{
      console.log(data);
    })
  }

  public saveCharity(charity : Charity){
    console.log(charity)
    this.service.saveCharity(charity).subscribe((data)=>{
      console.log(data);
    })
  }
}
