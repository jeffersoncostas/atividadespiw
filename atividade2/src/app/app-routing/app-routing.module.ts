import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { PostsComponent } from '../posts/posts.component';
import { AddPostComponent } from '../add-post/add-post.component';
import { AppComponent } from '../app.component';


const routes:Routes = [
  {path:'', redirectTo:'/timeline', pathMatch:'full'},
  {path:'timeline', component: PostsComponent},
  {path:'add-post', component:AddPostComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]

})
export class AppRoutingModule { }
