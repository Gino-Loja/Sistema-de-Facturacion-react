import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
@Component({
  selector: 'app-ver-facturas',
  templateUrl: './ver-facturas.component.html',
})
export class VerFacturasComponent {
  listaFacturas: any;
  dtOptions: DataTables.Settings = { destroy: true };
  dtTrigger: Subject<any> = new Subject<any>();
  public listaClientes: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;
  eliminarFactura(id: string) { }
  editarFacturaEscogida(factura: {}) {

  }
}
// "facturas": {
//   "cliente": {
   
//     "id": "ObjectId(648e65cffe84cc3155d62d6f)"
//   },

//   "productos": [
//     {
//       "_id": "648e1da228a382e1f05e6c9d",
//       "codigo": "1111",
//       "nombre": "sdsdsdsd",
//       "estado": true,
//       "precio": 23
//     }
//   ],
//   "vendedor": {
//     "id": "ObjectId(648e49939d487a3560f6102d)"
//   },
//   "pago":"efectivo"
// },