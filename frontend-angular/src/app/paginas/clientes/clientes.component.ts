import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { ModalAddDeUsuariosService } from 'src/app/modal-add-de-usuarios.service';
import { ClientesService } from 'src/app/api/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})

export class ClientesComponent {
  dtOptions: DataTables.Settings = { destroy: true };
  dtTrigger: Subject<any> = new Subject<any>();
  public listaClientes: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;

  constructor(private servicioClientes: ClientesService){}
  ngOnInit(): void {
    this.servicioClientes.ObtenerClientes().then((data)=>{
      
      this.listaClientes = data.data.clientes
     
      this.dtTrigger.next(this.listaClientes);
    })

  }
  editarClienteEscogido(cliente:{}){

  }

  eliminarCLiente(id:string){}
  ngOnDestroy(): void {

    this.dtTrigger.unsubscribe();

  }
}
