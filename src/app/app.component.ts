import { Component,ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { UsersService } from './service/users.service';
import { PopUpComponent } from './pop-up/pop-up.component';
import { GroupService } from './service/group.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers :[UsersService],
})
export class AppComponent {
  @ViewChild('popUp', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef
  private componentRef!: ComponentRef<PopUpComponent>
  constructor(public usersService:UsersService, public groupService:GroupService){}
showPopUp(){
  this.componentRef = this.viewRef.createComponent(PopUpComponent);
  console.log(this.viewRef.createComponent(PopUpComponent));
  this.componentRef.instance.members = this.usersService.users.length
  this.componentRef.instance.groupName = this.groupService.title
  this.componentRef.instance.close.subscribe(()=> {this.viewRef.clear()})
}

}
