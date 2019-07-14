import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {PostService} from '../services/post.service';

import {Post} from '../models/post';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.scss']
})
export class PostdetailComponent implements OnInit {
  post: Post;

  constructor(private route: ActivatedRoute, 
    private postService: PostService,
    private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id).subscribe(post=>this.post = post);
  }

}
