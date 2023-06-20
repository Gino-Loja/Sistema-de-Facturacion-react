import { Injectable,Output ,EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalAddDeProductosService {
  @Output() tiggerDeProductos:EventEmitter<any> = new EventEmitter()
  @Output() tiggerDeCategorias:EventEmitter<any> = new EventEmitter()
  @Output() tiggerDeEditarProducto:EventEmitter<any> = new EventEmitter()
  @Output() tiggerDeGuardarProducto:EventEmitter<any> = new EventEmitter()

  constructor() { }
}
