import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'node:console';

@Component({
  selector: 'app-editcontact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editcontact.component.html',
  styleUrl: './editcontact.component.css'
})
export class EditcontactComponent {
  constructor (public activated:ActivatedRoute, public router:Router){}
  public eachContact:any =''
  public editCont='hidden'
  public getcontact:any=JSON.parse(localStorage['contactDetails'])
  public id=this.activated.snapshot.params['id']
  ngOnInit(){
    // console.log(this.activated.snapshot.params['id']);
    this.eachContact=this.getcontact[this.id]
    // console.log(this.eachContact);
    
  }
  delet(i:number){
    this.getcontact=this.getcontact.filter((item:any, id:any)=> i!=id)
    console.log(i);
    
    console.log(this.getcontact);
    localStorage.setItem('contactDetails', JSON.stringify(this.getcontact))
    this.router.navigate(['dashboard'])
    // getcontact.splice(i,1)
    
    // console.log(this.id);
    // console.log(getcontact);
    
  }

  public firstname=''
  public lastname=''
  public email=''
  public address=''
  public gender=''
  edit(i:number){
    this.editCont='visible'
    
  }
  
  save(i: number) {
    let contactObj = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      gender: this.gender,
      address: this.address,
    }
    this.getcontact.splice(i, 1, contactObj);
    localStorage.setItem('contactDetails', JSON.stringify(this.getcontact));
    this.editCont = 'hidden';
    let id = this.activated.snapshot.params['id'];
    this.eachContact[id] = contactObj
  }
}
