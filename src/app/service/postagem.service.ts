import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://blog-pessoal-dayanne.herokuapp.com/api/v1/postagem/todas', this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://blog-pessoal-dayanne.herokuapp.com/api/v1/postagem/salvar', postagem, this.token)
  }


  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://blog-pessoal-dayanne.herokuapp.com/api/v1/postagem/${id}`, this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://blog-pessoal-dayanne.herokuapp.com/api/v1/postagem/atualizar', postagem, this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`https://blog-pessoal-dayanne.herokuapp.com/api/v1/postagem/deletar/${id}`, this.token)
  }

}
