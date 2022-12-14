import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private GifsService: GifsService) {
  }

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    this.GifsService.searchGifs(valor)
    this.txtBuscar.nativeElement.value = '';

  }
}
