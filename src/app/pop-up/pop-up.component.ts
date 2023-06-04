import { Component, Output, EventEmitter} from '@angular/core';
import { GroupService } from '../service/group.service';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
  providers :[UsersService],
})
export class PopUpComponent {
  groupName = ''
  members = 0
  @Output() close = new EventEmitter
  constructor(public usersService:UsersService, public groupService:GroupService){}
}
