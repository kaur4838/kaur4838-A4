import { Component, OnInit ,Input} from '@angular/core';
import{kaur4838} from'../kaur4838';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() footerProfile : kaur4838;
  constructor() { }

  ngOnInit() {
  }

}
