import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-displaucontact',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './displaucontact.component.html',
  styleUrl: './displaucontact.component.css'
})
export class DisplaucontactComponent {
  public display="hidden"
  public displayeach="hidden"
  // public contactArray:contactInterface[]=[]
  public getcont:any=[]
  public eachContact:any=[]
  public id = ""
  constructor(public activated:ActivatedRoute, public routes:Router){}
  ngOnInit(){
    console.log(this.activated.snapshot.params['index']);
    if(localStorage['contactDetails']){
      this.getcont=JSON.parse(localStorage['contactDetails'])
    }
    else{
      let obj={
      firstname:'No information yet',
      }
      this.getcont.push(obj)
    }
  }
  close(){
    this.routes.navigate([''])
  }
  view(i:any){
    this.id=i+1
    this.eachContact.pop()
    this.eachContact.push(this.getcont[i])
    this.displayeach="visible"
  
  }
  closeeach(){
    this.displayeach="hidden"
  }
  home(){
    this.routes.navigate(['home'])
  }
  editpage(i:number){
    // this.routes.navigate([`dashboard/edit/${i}`])
  }
  deletpage(i:number){
    // this.routes.navigate([`dashboard/edit/${i}`])
    console.log(i);
    this.getcont= this.getcont.filter((item:any, id:any) => id ==this.id)
    console.log(this.getcont);
    localStorage.setItem('contactDetails', JSON.stringify(this.getcont))
    // this.getcont=JSON.parse(localStorage['contactDetails'])
  }
}

