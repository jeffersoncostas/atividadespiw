import { Injectable } from '@angular/core';
import { Posts } from '../posts-itself/posts.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostService {

  url: string = 'http://rest.learncode.academy/api/jeffinho/posts'
  listaPosts: Posts[];

  constructor(private http: Http) { }


  getPosts() {
    return this.http.get(this.url)
      .map((response: Response) => {
        this.listaPosts = [];
        for (let po of response.json()) {
          this.listaPosts.push(new Posts(po.id, po.titulo, po.nomePessoa, po.texto, po.tristezas, po.tristezaDada))
        }
        return this.listaPosts
      })
      .catch((error: Response) => Observable.throw(error));
  }

  addPost(postagem: Posts) {
    return this.http.post(this.url, postagem)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error));
  }

  addTristeza(post: Posts) {
    console.log("dei uma tristeza: " + post.nomePessoa)
    let id = post.id
    console.log(id)
    post.tristezaDada = true;
    post.tristezas = post.tristezas + 1

    return this.http.put(this.url + "/" + id + "/", post)
      .catch((error: Response) => Observable.throw(error));
  }

  excluirPost(post: Posts) {
    let id = post.id

    return this.http.delete(this.url + "/" + id + "/")
      .catch((error: Response) => Observable.throw(error));
  }

  editPost(post: Posts) {
    let id = post.id;
    post.editPost = false;
    return this.http.put(this.url + "/" + id + "/", post)
      .catch((error: Response) => Observable.throw(error));
  }
}
