import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from '../models/comments.model';
import { Posts } from '../models/posts.model';
import { ToDos } from '../models/todos.model';
import { Users } from '../models/users.model';


@Injectable({
    'providedIn':'root'
})
export class Json2Ts{

    constructor(private myHttpClient:HttpClient){
        
     }

     getComments():Observable<Comments>
     {
        return this.myHttpClient.get<Comments>(`https://jsonplaceholder.typicode.com/comments`);
     }
     getPosts():Observable<Posts>
     {
        return this.myHttpClient.get<Posts>(`https://jsonplaceholder.typicode.com/posts`);
     }
     getToDos():Observable<ToDos>
     {
        return this.myHttpClient.get<ToDos>(`https://jsonplaceholder.typicode.com/todos`);
     }
     getUsers():Observable<Users[]>
     {
        return this.myHttpClient.get<Users[]>(`https://jsonplaceholder.typicode.com/users`);
     }
}   
