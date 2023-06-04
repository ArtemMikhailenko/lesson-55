
import { Injectable, Output,EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GroupService {
  @Output() onPost = new EventEmitter();
  title = 'Healthy Lifestyle'
  nameInputValue = '';
  onName(event: any){
    this.nameInputValue = event.target.value;
  }
  changeName(nameInputValue:any){
  this.title = this.nameInputValue
  this.onPost.emit()
  this.nameInputValue = '';
  }
  constructor() { }
}
