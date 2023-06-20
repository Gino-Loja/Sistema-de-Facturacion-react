import { Injectable,Output ,EventEmitter} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ModalAddDeUsuariosService {
  @Output() eventoUsuario:EventEmitter<any> = new EventEmitter()
  @Output() eventoEditarUsuario:EventEmitter<any> = new EventEmitter()
  @Output() eventoGuardarUsuario:EventEmitter<any> = new EventEmitter()
  constructor() { }
}
