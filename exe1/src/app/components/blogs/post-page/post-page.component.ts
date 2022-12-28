import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from 'src/app/shared/models/posts.model';
import { Location } from '@angular/common';
import { Json2Ts } from 'src/app/shared/services/json2ts.service';
import { Comments } from 'src/app/shared/models/comments.model';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  post!: Posts;
  comments: Comments[] = []; 

  constructor(private location:Location,private json2TsServise:Json2Ts){
  }

  ngOnInit(): void {
    this.post=this.location.getState() as Posts;
    if(this.post!=null)
    {
      this.json2TsServise.getComments(this.post.id).subscribe(res => {
        this.comments=res;
      } );
    }
  }

}
