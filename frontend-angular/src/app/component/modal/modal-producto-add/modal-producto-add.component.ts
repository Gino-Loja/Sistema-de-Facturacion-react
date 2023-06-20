import { Component, OnInit } from '@angular/core';

import { ModalAddDeProductosService } from 'src/app/modal-add-de-productos.service';

@Component({
  selector: 'app-modal-producto-add',
  templateUrl: './modal-producto-add.component.html',
  providers: []
})
export class ModalProductoAddComponent implements OnInit {

  producto = {
    codigo: '',
    descripcion: '',
    precio: 0,
    cantidad: 0,
    categoria: ''
  };
  public listaCategorias:any;
  constructor(private addProducto: ModalAddDeProductosService) {

  }


  ngOnInit() {
    this.addProducto.tiggerDeCategorias.subscribe(data=>{
      console.log(data)
      this.listaCategorias = data
    })
  }

  guardarProducto() {

    this.addProducto.tiggerDeProductos.emit({ data: this.producto })

    this.producto = {
      codigo: '',
      descripcion: '',
      precio: 1,
      cantidad: 1,
      categoria: ''
    }
  }
}
