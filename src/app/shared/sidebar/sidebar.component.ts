import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';
import { SearchGifsResponse } from '../../gifs/interface/gifs.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  get historial() {
    return this.gifsService.historial;
  }

  constructor(private gifsService: GifsService) { }

  buscar(item: string) {
    this.gifsService.searchGifs(item)
  }
}
