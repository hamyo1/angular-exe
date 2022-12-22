import { Component, OnInit } from '@angular/core';
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


  constructor(private json2TsServise:Json2Ts,private route: ActivatedRoute,    ) { }


  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers()
  {
    this.json2TsServise.getUsers().subscribe(res => {
      this.users=res;
    } );
  }
}
