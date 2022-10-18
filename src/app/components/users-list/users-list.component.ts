import { Component, OnInit} from '@angular/core';
import { UsersService } from 'src/app/apis/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  public usersData:any;
  public selectedUserId="-1";

  constructor(private api: UsersService) { }

  public ngOnInit(): void {
    this.loadUsers();
  }

  public async loadUsers(){
    const res = await this.api.loadUsers().toPromise().then((res:any) => res.users);
    this.usersData = res;
  }

  public async  selectedUser(user){
    this.selectedUserId = user?._id;
    const res = await this.api.loadUsersById(this.selectedUserId).toPromise().then((res:any) => res.user);
    this.api.subject.next(res);
  }
}
