import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Posts } from "./posts.model";
import { PostService } from '../post-service/post-service.service';

@Component({
  selector: 'app-posts-itself',
  templateUrl: './posts-itself.component.html',
  styleUrls: ['./posts-itself.component.css']
})
export class PostsItselfComponent implements OnInit {
  @Output() tristezaClicada = new EventEmitter();
  postList: Posts[]
  editarPostBool: boolean = false

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPost()
  }

  maisTristeza(post: Posts) {
    if (post.tristezaDada == true) {
      return
    } else {

      console.log(post)
      this.postService.addTristeza(post)
        .subscribe((data) => { console.log(data) })
    }
  }

  getPost() {
    console.log("geeet")
    this.postList = [];
    this.postService.getPosts()
      .subscribe((data) => { this.postList = data }, (error) => console.log(error));
  }

  deletePost(post: Posts) {
    this.postService.excluirPost(post)
      .subscribe((data) => { console.log(data); this.getPost() })
  }

  editarPost(post: Posts) {
    post.editPost = true
    console.log(post)
  }

  concluirEdit(post: Posts) {
    console.log("conclui toda")
    this.postService.editPost(post)
      .subscribe((data) => { console.log("editou toda"); this.getPost() })
  }

  cancelarEdit(post:Posts){
    post.editPost = false;
  }
}
