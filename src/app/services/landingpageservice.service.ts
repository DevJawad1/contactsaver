import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandingpageserviceService {

  constructor() { }
  public item= "My name is Oyindamola"
  public numnerarray:number[]=[1,2,3,3,4,4,2,5,6,7]

  returnitem(){  
    return this.item
  }
  retnumber(){
    return this.numnerarray
  }
}
