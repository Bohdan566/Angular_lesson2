import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {PostService} from "../../services/post.service";
import {Post} from "../../models/post";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users!: User[];

  chosen!: User;

  posts!: Post[];

  constructor(private userService : UserService, private postService: PostService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(value => this.users = value);

  }



  getUser(user: User): void{
    console.log(user);
    this.chosen = user;
    this.postService.getUserPosts(this.chosen.id).subscribe(value => this.posts = value);

  }

}
