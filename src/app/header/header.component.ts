import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GroupService } from '../service/group.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public groupService:GroupService){}
}
