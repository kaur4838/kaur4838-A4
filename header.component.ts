import { Component, OnInit , Input } from '@angular/core';
import{kaur4838} from'../kaur4838';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input() headerProfile : kaur4838;
  constructor() { }

  ngOnInit() {
    
  }

}
