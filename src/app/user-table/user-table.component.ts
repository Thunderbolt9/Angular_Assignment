import { Component, OnInit } from '@angular/core';
import { PostsService } from './../posts.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent implements OnInit {
  public posts = Array();
  p: any;
  constructor(private _postService: PostsService) {}

  ngOnInit(): void {
    this._postService.getPosts().subscribe((data) => (this.posts = data));
  }
}
