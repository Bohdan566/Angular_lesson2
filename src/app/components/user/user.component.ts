import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../models/user";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user!: User;
  @Output()
  bubbleUser = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  getUser(user: User): void{
    this.bubbleUser.emit(user);
  }

}
