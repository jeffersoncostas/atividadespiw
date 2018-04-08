import { Component, OnInit } from '@angular/core';
import { PostService } from '../post-service/post-service.service';
import { Posts } from '../posts-itself/posts.model';
import { PostsItselfComponent } from '../posts-itself/posts-itself.component';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postItself: PostsItselfComponent
  postagem: Posts
  id=0
  constructor(private postService: PostService) { }

  ngOnInit() {
  }
  
  enviarPost(titulo:string,nome:string,texto:string):void{
    this.postagem = new Posts(this.id, titulo,nome,texto,0,false)
    console.log(this.postagem)

    this.postService.addPost(this.postagem)
      .subscribe((data)=>{ console.log(data);}, (error)=>{ console.log(error)})

    this.id++
    
  }
  
  
}
