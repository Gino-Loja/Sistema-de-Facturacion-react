import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { ModalAddDeUsuariosService } from 'src/app/modal-add-de-usuarios.service';
import { CategoriasService } from 'src/app/api/categorias.service';
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',

})
export class CategoriasComponent {
  dtOptions: DataTables.Settings = { destroy: true };
  dtTrigger: Subject<any> = new Subject<any>();
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;
  listaCategorias:any;

  constructor(private servicioCategoria: CategoriasService ){}
  ngOnInit(): void {
    this.servicioCategoria.ObtenerCategorias().then((data)=>{
      this.listaCategorias = data.data.categoria;
      console.log(data.data);
      this.dtTrigger.next(this.listaCategorias);
    })

  }
  editarCategoriaEscogida(categoria :{}){

  }
  eliminarCategoria(id:string){}
}
