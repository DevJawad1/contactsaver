import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';
import { Router } from '@angular/router';

interface contactInterface{
  firstname:string,
  lastname:string,
  email:string,
  gender:string,
  address:string,
  password:string,
}
@Component({
  selector: 'app-first-work',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './first-work.component.html',
  styleUrl: './first-work.component.css'
})
export class FirstWorkComponent {
  public firstname=""
  public lastname=""
  public email=""
  public gender=""
  public address=""
  public password=""
  public display="hidden"
  public displayeach="hidden"
  public contactArray:contactInterface[]=[]
  public getcont:any=[]
  public eachContact:any=[]
  public id = ""

  constructor(public routes:Router){}
  ngOnInit(){
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
  view(i:any){
    this.id=i+1
    this.eachContact.pop()
    this.eachContact.push(this.getcont[i])
    this.displayeach="visible"

  }
  closeeach(){
    this.displayeach="hidden"
  }
  addContact(){
    if(localStorage['contactDetails']){
      let getContact=JSON.parse(localStorage['contactDetails'])
      this.contactArray=getContact
    }
    let contactObj={
      firstname:this.firstname,
      lastname:this.lastname,
      email:this.email,
      gender:this.gender,
      address:this.address,
      password:this.password,
    }
    this.contactArray.push(contactObj)
    console.log(this.contactArray);
    localStorage.setItem('contactDetails', JSON.stringify(this.contactArray))
  }
  show(){
    this.display="visible"
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
    this.display="hidden"
  }
  gotodash(){
    this.routes.navigate(['dashboard'])
  }
}