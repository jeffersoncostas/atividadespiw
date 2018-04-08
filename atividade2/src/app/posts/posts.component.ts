import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  postTristeza(post){

    console.log("Evento sendo recebido pelo Pai. O post que foi dado tristeza foi o do: "+ post.nomePessoa)
  }

}
