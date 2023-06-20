import { Component ,OnInit} from '@angular/core';
import { ModalAddDeUsuariosService } from 'src/app/modal-add-de-usuarios.service';

@Component({
  selector: 'app-usuario-add-modal',
  templateUrl: './usuario-add-modal.component.html',
})


export class UsuarioAddModalComponent implements OnInit {

  usuario = {
    nombres: '',
    usuario: '',
    password: '',
    cargo: {
      empleado: true,
      administrador: true,
    },
    contacto: {
      email: '',
      telefono: '',
      direccion: '',
    },
  }
  constructor(private addUsuario: ModalAddDeUsuariosService){}
  ngOnInit(): void {
    
  }
  guardarUsuario(){
   console.log(this.usuario);
    this.addUsuario.eventoGuardarUsuario.emit(this.usuario)
  }
  asignarValores(valor: string): void {
    if (valor === 'Empleado') {
      this.usuario.cargo.administrador = false;
      this.usuario.cargo.empleado = true;
    } else {
      this.usuario.cargo.administrador = true;
      this.usuario.cargo.empleado = false;
    }
  }
  

}
