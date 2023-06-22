import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { ModalAddDeUsuariosService } from 'src/app/modal-add-de-usuarios.service';
import { UsuariosService } from 'src/app/api/usuarios.service';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',

})
export class UsuariosComponent {
  dtOptions: DataTables.Settings = { destroy: true };
  dtTrigger: Subject<any> = new Subject<any>();
  public listaUsuarios: any;


  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;


  constructor(private servicioApi: UsuariosService, private addUsuario:ModalAddDeUsuariosService ) {

  }



  ngOnInit(): void {
    this.addUsuario.eventoGuardarUsuario.subscribe(data => {
      this.guardarUsuario(data);
    });
    // this.addUsuario.eventoGuardarUsuario.subscribe(data => {
    //   this.actualizarProducto(data._id, data)
    // }

    // )

    this.obtenerUsuarios();


  }

  guardarUsuario(data: any) {

    this.servicioApi.GuardarUsuario(data).then((data) => {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
        // Call the dtTrigger to rerender again
        this.obtenerUsuarios();
      });

    })

  }
  obtenerUsuarios(): void {
    this.servicioApi.ObtenerUsuarios().then(
      (respuesta) => {
        this.listaUsuarios = respuesta.data.usuarios;
        console.log("--------------------",this.listaUsuarios)
        this.dtTrigger.next(this.listaUsuarios);

      }
    )
  }

  editarProductoEscogido(producto: any) {
    this.addUsuario.eventoEditarUsuario.emit(producto)
  }
  eliminarProducto(id: any) {
    this.servicioApi.EliminarUsuario(id).then((data) => {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
        // Call the dtTrigger to rerender again
        this.obtenerUsuarios();
      });
    });
  }
  actualizarProducto(id: string, producto: {}) {
    this.servicioApi.ActualizarUsuario(id, producto).then(
      (data) => {
        console.log(data)
      }
    );
  }

  ngOnDestroy(): void {

    this.dtTrigger.unsubscribe();

  }
}
