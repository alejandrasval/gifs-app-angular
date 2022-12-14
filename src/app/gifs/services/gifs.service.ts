import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey = 'D1l3QU0WPlzrMbUyA3pOzGEUUvhUQkFD';
  private serviceURL = 'https://api.giphy.com/v1/gifs'
  private _historial: string[] = [];
  public results: Gif[] = [];

  get historial() {
    return [...this._historial]
  }

  constructor(private http: HttpClient) {
    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!)
    };

    if (localStorage.getItem('results')) {
      this.results = JSON.parse(localStorage.getItem('results')!)
    };
  }

  searchGifs(query: string) {
    query = query.trim().toLowerCase()

    if (query.trim().length === 0) return;

    if (!this._historial.includes(query)) {
      this._historial.unshift(query)
      this._historial = this._historial.splice(0, 10)

      localStorage.setItem('historial', JSON.stringify(this._historial))
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', query)
      .set('limit', '10')


    this.http.get<SearchGifsResponse>(`${this.serviceURL}/search`, { params })
      .subscribe((resp) => {
        this.results = resp.data;
        localStorage.setItem('results', JSON.stringify(this.results))
      })
  }
}
