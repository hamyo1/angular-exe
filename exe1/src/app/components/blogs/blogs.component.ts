import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private json2TsServise:Json2Ts,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPosts();
  }
  public getPosts()
  {
    this.json2TsServise.getPosts().subscribe(res => {
      this.posts=res;
    } );
  }

  public shortBody(body:string):string
  {
    var shortBody=body.slice(0,20);

    return shortBody;
  }
  
  public goToPost(post:Posts)
  {
    this.router.navigate(['/Posts/'], { state: post });
  }
}
