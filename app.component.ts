import { Component, OnInit} from '@angular/core';
import { kaur4838} from './kaur4838';
import{SERVICEService} from './service.service';
import { Food } from './food';
import breakfast from '../assets/data/Breakfast.json';
import lunch from '../assets/data/Lunch.json';
import dinner from '../assets/data/Dinner.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Assignment4';
  pData:kaur4838;
  breakData : Food[] = breakfast.breakfast;
  lunchData: Food[] = lunch.lunch; 
  dinnerData: Food[]= dinner.dinner;
  ngOnInit(){
this.lpLoad();
  }
  constructor(private LService: SERVICEService){

  }
  lpLoad():void{
this.pData = this.LService.kaur4838();

  }
}
