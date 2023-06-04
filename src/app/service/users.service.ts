import { Injectable, Output,EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  @Output() onPost = new EventEmitter();
  users = [
    {name: "Mike", status: "I'm learning angular", url: "https://i.pravatar.cc/150?img=12", id:1,},
    {name: "Nikola", status: "Playing piano", url: "https://i.pravatar.cc/150?img=7", id:2,},
    {name: "Bob", status: "Translations from Chinese", url: "https://i.pravatar.cc/150?img=11", id:3,},
    {name: "Anna ", status: "Pretty girl", url: "https://i.pravatar.cc/150?img=1", id:4,},
];
firstName = ''
userStatus = ''
onUserName( event: any){
  this.firstName = event.target.value;
}
onStatus( event: any){
  this.userStatus = event.target.value;
}
changeNameUser(firstName:any){
  this.users[0].name= this.firstName
  this.onPost.emit()
  this.firstName = '';
}
changeStatusUser(userStatus:any){
  this.users[0].status= this.userStatus
  this.onPost.emit()
  this.userStatus = '';
}
  constructor() { }
}
