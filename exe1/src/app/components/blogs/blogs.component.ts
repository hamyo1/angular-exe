import { Component, OnInit } from '@angular/core';
import { Comments } from 'src/app/shared/models/comments.model';
import { Posts } from 'src/app/shared/models/posts.model';
import { Json2Ts } from 'src/app/shared/services/json2ts.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  posts: Posts[] = []; 
  comments: Comments[] = []; 
  option: any;
  isPostChosen:boolean=false;
  prev:any;

  constructor(private json2TsServise:Json2Ts) { }

  ngOnInit(): void {
    this.getPosts();
  }
  public getPosts()
  {
    this.json2TsServise.getPosts().subscribe(res => {
      this.posts=res;
    } );
  }
  public getComments(postId:number)
  {
      this.json2TsServise.getComments(postId).subscribe(res => {
      this.comments=res;
    } );
  }

  public postManager()
  {
    if(this.option!=null)
    {
      this.getComments(this.option);
      this.isPostChosen=true
    }
    if(this.option!=this.prev||this.prev==null)
    {
      this.posts.forEach(post => {
        if(post.id==this.prev)
        {
          post.disabled=false;
        }
      });
    }
    this.prev=this.option;
  }
}
