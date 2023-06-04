import { Component, Input } from '@angular/core';
import { GroupService } from '../service/group.service'; 
import { UsersService } from '../service/users.service'; 
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers :[UsersService],
})
export class UserComponent {
  @Input() name = ''
  @Input() status = ''
  @Input() img = ''
  constructor(public groupService:GroupService,public usersService:UsersService){}
  
}
