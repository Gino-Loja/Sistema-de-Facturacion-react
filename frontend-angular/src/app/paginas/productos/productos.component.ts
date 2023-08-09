import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductosService } from 'src/app/api/productos.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

import { ModalAddDeProductosService } from 'src/app/modal-add-de-productos.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',

})

export class ProductosComponent implements OnInit {


  dtOptions: DataTables.Settings = { destroy: true };
  dtTrigger: Subject<any> = new Subject<any>();
  public listaProductos: any;
  public listaCategorias: any;

  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;

  constructor(private servicioApi: ProductosService, private addProducto: ModalAddDeProductosService) {

  }



  ngOnInit(): void {
    this.addProducto.tiggerDeProductos.subscribe(data => {
        this.guardarProducto(data);
    });
    this.addProducto.tiggerDeGuardarProducto.subscribe(data=>{
      this.actualizarProducto(data._id, data )
    }

    )
    
    this.obtenerCategorias()
    this.obtenerProdutos();


  }

  guardarProducto(data: any) {

    this.servicioApi.GuardarProducto(data.data).then((data) => {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
        // Call the dtTrigger to rerender again
        this.obtenerProdutos();
      });

    })

  }
  obtenerProdutos(): void {
    this.servicioApi.ObtenerProductos().then(
      (respuesta) => {
        this.listaProductos = respuesta.data.productos;
        this.dtTrigger.next(this.listaProductos);

      }
    )
  }

  obtenerCategorias() {
    this.servicioApi.ObtenerCategorias().then(
      (respuesta) => {

        this.listaCategorias = respuesta.data.categoria;
        this.addProducto.tiggerDeCategorias.emit(this.listaCategorias);
      }
    )
  }
  editarProductoEscogido(producto: any) {
    this.addProducto.tiggerDeEditarProducto.emit(producto)
  }
  eliminarProducto(id: any) {
    this.servicioApi.EliminarProducto(id).then((data) => {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
        // Call the dtTrigger to rerender again
        this.obtenerProdutos();
      });
    });
  }
  actualizarProducto(id:string, producto:{}){
    this.servicioApi.ActualizarProducto(id, producto).then(
      (data)=>{
        
      }
    );
  }

  ngOnDestroy(): void {

    this.dtTrigger.unsubscribe();

  }

}
