import { Component, Input, OnInit } from '@angular/core';
import { ToDos } from 'src/app/shared/models/todos.model';
import { Users } from 'src/app/shared/models/users.model';
import { Json2Ts } from 'src/app/shared/services/json2ts.service';
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  users: Users[] = []; 
  toDos: ToDos[] = []; 

  favoriteSeason: number = 0;
  option: any;
  prev:any;
  isToDoEnabeld:boolean=false;

  constructor(private json2TsServise:Json2Ts) { }


  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers()
  {
    this.json2TsServise.getUsers().subscribe(res => {
      this.users=res;
    } );
  }
  public getToDos(userId:number)
  {
      this.json2TsServise.getToDos(userId).subscribe(res => {
      this.toDos=res;
    } );
  }
  public userManager()
  {
    if(this.option!=null)
    {
      this.getToDos(this.option);
      this.isToDoEnabeld=true
    }
    if(this.option!=this.prev||this.prev==null)
    {
      this.users.forEach(user => {
        if(user.id==this.prev)
        {
          user.disabled=false;
        }
      });
    }
    this.prev=this.option;
  }

}
