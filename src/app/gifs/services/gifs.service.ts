import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _historial: string[] = [];

  get historial() {
    return [...this._historial]
  }

  constructor(private http: HttpClient) {

  }

  searchGifs(query: string) {
    query = query.trim().toLowerCase()

    if (query.trim().length === 0) return;

    if (!this._historial.includes(query)) {
      this._historial.unshift(query)
      this._historial = this._historial.splice(0, 10)
    }

    this.http.get('api.giphy.com/v1/gifs/search?api_key=D1l3QU0WPlzrMbUyA3pOzGEUUvhUQkFD&q=minion&limit=10')

    // console.log(this._historial)
  }
}
