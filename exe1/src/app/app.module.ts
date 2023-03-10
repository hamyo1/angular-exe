import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { PostPageComponent } from './components/blogs/post-page/post-page.component';

const appRoute:Route[]=
[{path:'',component:TodosComponent},
{path:'ToDos',component:TodosComponent},
{path:'Blog',component:BlogsComponent},
{path:'Posts',component:PostPageComponent}]

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    BlogsComponent,
    PostPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
