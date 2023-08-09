import { Component } from '@angular/core';
import { data } from 'jquery';
import { ModalAddDeProductosService } from 'src/app/modal-add-de-productos.service';

@Component({
  selector: 'app-modal-editar-producto',
  templateUrl: './modal-editar-producto.component.html'
})

export class ModalEditarProductoComponent {
  public producto = {
    _id:'',
    codigo: '',
    descripcion: '',
    precio: 0,
    cantidad: 0,
    categoria: ''
  };
  public listaCategorias: any;
  constructor(private addProducto: ModalAddDeProductosService) {

  }
  ngOnInit() {
    this.addProducto.tiggerDeEditarProducto.subscribe(data => {
      this.producto = data;
    })

    this.addProducto.tiggerDeCategorias.subscribe(data => {
      this.listaCategorias = data
    })
  }
  guardarProductoEditado(producto:any) {

    this.addProducto.tiggerDeGuardarProducto.emit(producto)
  }

}
