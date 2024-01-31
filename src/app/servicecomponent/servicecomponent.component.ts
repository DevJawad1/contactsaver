import { Component } from '@angular/core';
import { LandingpageserviceService } from '../services/landingpageservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicecomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicecomponent.component.html',
  styleUrl: './servicecomponent.component.css'
})
export class ServicecomponentComponent {
  constructor (public service:LandingpageserviceService){}
  public user = 'Honey'
  public number:number[]=[]
  ngOnInit(){
    this.user=this.service.returnitem()
    this.number=this.service.retnumber()
    console.log(this.number);
  }
} 
