import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/apis/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  public usersDetails:any;

  constructor(private api: UsersService) { }

  public ngOnInit(): void {
    this.api.subject.subscribe((value)=>{
      this.usersDetails=value;
    })
  }
}
