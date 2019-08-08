import { Injectable } from '@angular/core';
import {kaur4838} from'./kaur4838';
import {MYPROFILE} from '../assets/data/profile';
@Injectable({
  providedIn: 'root'
})
export class SERVICEService {

  constructor() { }
  kaur4838() : kaur4838{
    return MYPROFILE;
  }
}

